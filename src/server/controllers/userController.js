const User = require('../models/userModel')
const ObjectId = require('mongodb').ObjectId;
// const jwt = require('jsonwebtoken')
const errorHandler = require('./../helpers/dbErrorHandler')

const isStrongPassword = pass => {
    return pass.length > 5;
}
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const userController = {
    newUserSchema: userObject =>{
        if(!userObject.name){
            throw new Error('Please enter your name')
        }
        if(!userObject.password){
            throw new Error('Please enter password')
        }
        if(!isStrongPassword(userObject.password)){
            throw new Error('Please enter strong password')
        }
        if(!emailRegex.test(userObject.email)){
            throw new Error('No or invalid email provided')
        }
        if(userObject.role && !['basic','manufacturer',
        'supervisor', 'admin',
        'finance', 'customer service',
        'business analyst', 'inventory manager',
        'logistics', 'retail' , 'delivery', 'marketing ', 'internships',
        'IT Technician' ,'Digital Operations'].includes(userObject.role)){
            throw new Error('Not a valid role')
        }
        if(!userObject.phone && phone.length == 10){
            throw new Error('Please enter a phone number')
        }

        let email = userObject.email 
        email = email.toLowerCase();
        return {
            _id: userObject._id,
            name: userObject.name,
            email: userObject.email,
            password: userObject.password,
            role: userObject.role || 'basic'
        }
    }, 
    getUser : async(req, res, next)=>{
        try{
            const userId = req.params.userId
            const user = await User.findById(userId)
            if(!user) return next(new Error('User does not exist'))
            res.status(200).json({
                data: user
            })
        }catch(error){
            next(error)
        }
    },
    getUsers : async(req, res, next)=>{
        const users = await User.find({})
        res.status(200).json({
            data: users
        })
    },
    updateUser : async(req, res, next)=>{
        try{
            const update = req.body
            const userId = req.params.userId
            const user = await User.findByIdAndUpdate(userId, update)
            res.status(200).json({
                data: user,
                message: 'User has been updated'
            })
        }
        catch(error){
            next(error)
        }
    },
    deleteUser : async(req, res, next)=>{
        try {
            const userId = req.params.userId
            await User.findByIdAndDelete(userId)
            res.status(200).json({
                data: null,
                message: 'User has been deleted'
            })
        } catch (error) {
            next(error)
        }
    },
    signUp: async (req, res) =>{
        const user = new User(req.body)
        try {
            
            await user.save()
            return res.json({
                message: 'Signed up Successfully!'
            })
        } catch (error) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(error)
            })
            
        }
    },
    getUserByToken: token =>{
        return new Promise((resolve, reject) =>{
            let user = token;
            User.findOne(
                {
                    _id: new ObjectId(user._id)
                },
                {__v: 0,
                created:0,
                modified:0,
                password:0
                },
                function(err, doc){
                    if(err || doc === null){
                        return reject(new Error('Error getting user'))
                    }
    
                    let access_key = user.meta.token_auth_key;
                    let stored_key = doc.toJSON().meta.token_auth_key
    
                    if(access_key !== stored_key){
                        return reject(new Error('Authorization key invalid'))
                    }
    
                    let last_logout = doc.toJSON().meta.last_logout
                    let now = Date.now()
                    if(last_logout === now){
                        return reject(new Error('Authorization key timeout '))
                    }
    
                    resolve(doc.toJSON())
                }
    
            )
        })
    },
    signOut :(req, res)=>{
        res.clearCookie('t')
        return res.status(200).json({
            message:'Logged out'
        })
    }   
}

module.exports = userController