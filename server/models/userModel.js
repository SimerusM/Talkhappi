const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

// static method for signup
userSchema.statics.signup = async function(email, password) {

    // validation to check emails and passwords
    if (!email || !password) {
        throw Error('All fields must be filled')
    }
    if (!validator.isEmail(email)) {
        throw Error('Email is not valid')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }

    // checking if email already exists
    const exists = await this.findOne({ email })
    if (exists) {
        throw Error('Email already in use')
    }

    // generating salt to add onto password
    const salt = await bcrypt.genSalt(10)

    // hashing password and adding salt to the end of the hash for security
    const hash = await bcrypt.hash(password, salt)

    // creating document 
    const user = await this.create({ email, password: hash })

    return user
}

module.exports = mongoose.model('User', userSchema)