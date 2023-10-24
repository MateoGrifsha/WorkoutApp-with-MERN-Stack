 const jwt  = require('jsonwebtoken')
 const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

    //verify if the user is authenticated or not
    const { authorization } =  req.headers

    if(!authorization) {
        return res.status(401).json({error: 'Authorization token required'})
    }
     
    //on the req header the authorization comes in the form of Bearer token123jaskhfasdfksahdfklasf so we split the auth to get the token
    const token = authorization.split(' ')[1]

    try{
    const {_id} = jwt.verify(token, process.env.SECRET)

    req.user = await User.findOne({ _id }).select('_id')
    next()

    } catch(error){
        console.log(error)
        res.status(404).json({error: 'Request is not authorized'})
    }
}

module.exports = requireAuth