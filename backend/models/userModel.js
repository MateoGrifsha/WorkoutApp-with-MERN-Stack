const mongoose = require('mongoose')
const bcrypt = require ('bcrypt')
const validator = require ('validator')

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    }
})

//static signup method
userSchema.statics.signUp = async function(email, password) {

    if(!email || !password){
        throw Error('All fields must be filled!')
    }
    if(!validator.isEmail(email)){
        throw Error ('Email is not valid!')
    }
    if(!validator.isStrongPassword(password)){
        throw Error ('Password is not strong enough!')
    }

    const exists = await this.findOne( {email} )

    if(exists){
        throw Error('Email already exists!')
    }
    
    //salting
    const salt = await bcrypt.genSalt(10)
    //hashing
    const hash = await bcrypt.hash(password, salt)


    const user = await this.create({
        email,
        password : hash
    })

    return user
}

//static login method
userSchema.statics.logIn = async function(email, password) {
    if(!email || !password){
        throw Error('All fields must be filled!')
    }
    const user = await this.findOne( {email} )

    if(!user){
        throw Error('Incorrect email!')
    }
    
    //checking if the passwords match (between the given password and the actual sign up hashed password)
    const match = await bcrypt.compare(password, user.password)

    if(!match){
        throw Error('Incorrect password!')
    }

    return user
}

module.exports = mongoose.model('User', userSchema)
