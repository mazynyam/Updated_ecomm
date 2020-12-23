import User from '../models/userModel'
import jwt from 'jsonwebtoken'
import config from '../../config/config'
import expressJwt from 'express-jwt'
import roles from '../roles/roles'
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

    const token = jwt.sign({
      id: user._id
    }, config.jwtSecret)

    res.cookie("t", token, {
      expiresIn: 86400
    })

    return res.json({
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
       
      }
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
// Grant user access
const grantAccess = function(action, resource){
    expressJwt({ secret: config.jwtSecret, algorithms: ['HS256'], })
    return async(req, res, next)=>{
      try{

            const user =  res.locals.user
            const permission = roles.can(req.roles)[action](resource)           
            if(!permission.granted){
                return res.status(401).json({
                    error: `You don't have enough permission to perform this action`
                })
            }
            next()
        }
        catch(error){
            next(error)
            // console.log(error)
        }
    }
}

const requireSignin = expressJwt({
    secret: config.jwtSecret,
    userProperty: 'auth',
    algorithms: ['HS256'],
    getToken: function fromHeaderOrQuerystring (req) {
      if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
          return req.headers.authorization.split(' ')[1];
      } else if (req.query && req.query.token) {
        return req.query.token;
      }
      return null;
    }
})
const allowIfLoggedIn = async(req, res)=>{
  var token = req.headers['x-access-token'];
  if (!token) return res.status(401).send({ auth: false, message: 'No token provided.' });
  
  jwt.verify(token, config.jwtSecret, function(err, decoded) {
    if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
    User.findById(decoded._id, function(err, user){
      if(err) return res.status(500).send('There was a problem finding user ')
      if(!err) return res.status(404).send('No user found')

      res.status(200).send(user)
    })
  });
}
  
const hasAuthorization = (req, res, next) => {
    const authorized = req.profile && req.auth && req.profile._id == req.auth._id
    if (!authorized) {
      return res.status('403').json({
        error: "User is not authorized"
      })
    }
    next()
    
    
  }

  // const hasAuthorization = (req, res, next)=>{
      // const authHeader = req.headers.authorization;
      //     if(authHeader){
      //       const token = authHeader.split(' ')[1]
      //       jwt.verify(token, config.jwtSecret, (err, user)=>{
      //         if(err){
      //           return res.sendStatus(403)
      //         }
      //         req.user = user
      //       } );
      //       next()
      //     }
      //     else{
      //       req.user = user
      //     }
  //     if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
  //       return req.headers.authorization.split(' ')[1];
  //     } else if (req.query && req.query.token) {
  //       return req.query.token;
  //     }
  //     return null;
  // }
  
 export default  {
    signin,
    signout,
    requireSignin,
    hasAuthorization,
    grantAccess,
    allowIfLoggedIn
  }
  
