import User from '../models/userModel'
import jwt from 'jsonwebtoken'
import expressJwt from 'express-jwt'
import config from '../../config/config'

const signin = async (req, res) => {
  try {
    let user = await User.findOne({
        "email": req.body.email
      })

      if (!user)
        return res.status('401').json({
          error: "User not found"
        })

      if (!user.authenticate(req.body.password)) {
        return res.status('401').send({
          error: "Email and password don't match."
        })
      }
      if(!user.isVerified){
        return res.status(401).json({
          error:'Not verified, Please verify your account'
        })
      }

      const token = jwt.sign({
        _id: user._id
      }, config.jwtSecret)

      res.cookie("t", token, {
        expire: new Date() + 9999
      })

      return res.json({
        token,
        user: {_id: user._id, name: user.name, email: user.email, seller: user.seller, isAdmin: user.isAdmin}
      })
  } catch (err) {
    return res.status('401').json({
      error: "Could not sign in"
    })
  }
}

const signout = (req, res) => {
  res.clearCookie("t")
  return res.status('200').json({
    message: "signed out"
  })
}

const requireSignin = expressJwt({
  secret: config.jwtSecret,
  userProperty: 'auth'
})

const hasAuthorization = (req, res, next) => {
  const authorized = req.profile && req.auth && req.profile._id == req.auth._id
  if (!(authorized)) {
    return res.status('403').json({
      error: "User is not authorized"
    })
  }
  next()
}

const AdminSignin = async(req, res, next)=>{
  try {
    let user = await User.findOne({
        "email": req.body.email,
        "isAdmin":req.body.isAdmin
      })

      if (!user)
        return res.status('401').json({
          error: "User not found"
        })

      if (!user.authenticate(req.body.password)) {
        return res.status('401').send({
          error: "Email and password don't match."
        })
      }
      if(!user.authenticate(req.body.isAdmin)){
        return res.status('401').send({
          error:'Not authorized'
        })
      }

      const token = jwt.sign({
        _id: user._id
      }, config.jwtSecret)

      res.cookie("t", token, {
        expire: new Date() + 9999
      })

      return res.json({
        token,
        user: {_id: user._id, name: user.name, email: user.email,  isAdmin: user.isAdmin}
      })
  } catch (err) {
    return res.status('401').json({
      error: "Could not sign in"
    })
  }
}
export default {
  signin,
  signout,
  requireSignin,
  hasAuthorization,
  AdminSignin
}
