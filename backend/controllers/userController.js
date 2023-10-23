const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
   return jwt.sign({_id}, process.env.SECRET, {expiresIn: '3d'})
}

//login user
const loginUser = async (req, res) => {
    const {email, password} = req.body
    try{
        //accessing the database email and password
        const user = await User.logIn(email, password) 

        //creating the token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

//signup user
const signupUser = async (req, res) => {

    const {email, password} = req.body
    try{
        //saving in database
        const user = await User.signUp(email, password) 

        //creating the token
        const token = createToken(user._id)

        res.status(200).json({email, token})
    } catch (error){
        res.status(400).json({error: error.message})
    }
}

module.exports = { signupUser, loginUser }