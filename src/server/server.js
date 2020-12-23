import config from './../config/config'
import app from './express'
import mongoose from 'mongoose'

// Connection URL
mongoose.Promise = global.Promise
mongoose.connect(config.DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, useFindAndModify: true })
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${config.DB_URI}`)
})

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info(`${config.SERVER_NAME} with server version ${config.SERVER_VERSION} is running on ${config.BASE_URL}:${config.port}`);
})
     