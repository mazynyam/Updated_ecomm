import express from 'express'
import session from 'express-session'
import path from 'path'
import auth from './../client/auth/auth-helper'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import Template from './../template'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'
import shopRoutes from './routes/shop.routes'
import productRoutes from './routes/product.routes'
import orderRoutes from './routes/order.routes'
import Chat from './models/chatModel'
import queryString from 'querystring'

// modules for server side rendering
import React from 'react'
// import ReactDOMServer from 'react-dom/server'
import { renderToStringAsync } from 'react-async-ssr'
import MainRouter from './../client/MainRouter'
import { StaticRouter } from 'react-router-dom'
import config from './../config/config'
import { ServerStyleSheets, ThemeProvider } from '@material-ui/styles'
import theme from './../client/theme'
//end

//comment out before building for production
import devBundle from './devBundle'

const { addUser, removeUser, getUser, getUsersInRoom } = require('./../client/chat/users')

const CURRENT_WORKING_DIR = process.cwd()
const app = express()

const server = require('http').createServer(app)
const io = require('socket.io')(server)
//comment out before building for production
devBundle.compile(app)

// parse body params and attache them to req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors({credentials:true}))
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: config.jwtSecret,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}))
app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

io.on('connection', socket => {
  console.log('New connection!!!');

  socket.on('join',({name, room}, callback) =>{
    // try{
    //   let chat = new Chat({message: msg.chatMessage, sender:msg.userId, type:msg.type})
    //   chat.save((err,doc)=>{
    //     if(err)return res.json({ success:false, err})
    //     Chat.find({"_id":doc._id})
    //     .populate("sender")
    //     .exec((err, doc)=>{
    //       return io.emit("Output Chat Message", doc)
    //     })
    //   })
    // }
    // catch(error){
    //   console.error(error)
    // }

    const {error, user} = addUser({id: auth.authenticated().user._id, name:auth.authenticated().user.name, room})
    if(error) return callback(error)

    socket.emit('message', { user: 'admin', text:`${auth.isAuthenticated().user.name}, Welcome to Kiriikou Customer Support Center`});
    socket.broadcast.to(user.room).emit('message', {user:'admin', text:`${auth.isAuthenticated().user.name}  joined`});

    socket.join(user.room)
    callback()
    
  })
  socket.on('sendMessage', (message, callback)=>{
    const chat = new Chat()
    io.to(chat.room).emit('message', { chat:chat.sender, text: message })
    try {
      chat.save((err, doc)=>{
        if(err)return res.json({ success: false, err})
        Chat.find({"_id": doc._id})
        .populate(sender)
        .exec((err, doc)=>{
          return io.emit('chat message', doc);
        })
      })
    } catch (error) {
      console.error(error)
    }
    callback()
  })
  socket.on('disconnect', ()=>{
    console.log('User has left')
  })
})

// mount routes
app.use('/', userRoutes)
app.use('/', authRoutes)
app.use('/', shopRoutes)
app.use('/', productRoutes)
app.use('/', orderRoutes)
// app.use('/kiriikou-admin', adminBro)

app.get('*', (req, res) => {
  const sheets = new ServerStyleSheets()
  const context = {}
  let name;
  switch (name) {
    case queryString.location === '/auth/signin':
      name = 'Login'
      case queryString.location === '/user/signup':
      name = 'Register'
    default:
      name = 'Home'
      break;
  }
  const markup =  renderToStringAsync (
    sheets.collect(
      <StaticRouter location={req.url} context={context}>
          <ThemeProvider theme={theme}>
            <MainRouter />
          </ThemeProvider>
      </StaticRouter>
     )
  )
    if (context.url) {
      return res.redirect(303, context.url)
    }
    
    const css = sheets.toString()
    res.status(200).send(Template({
      markup: markup,
      css: css,
      name: name
    }))
})

// Catch unauthorised errors
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }else if (err) {
    res.status(400).json({"error" : err.name + ": " + err.message})
    console.log(err)
  }
})

export default app
