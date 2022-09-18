const UserData = require('../models/userDataModel')
const mongoose = require('mongoose')

// get all user data
const getAllUserData = async (req, res) => {
    const all_user_data = await UserData.find({}).sort({createdAt: -1})

    res.status(200).json(all_user_data)
}

// get single user data
const getUserData = async (req, res) => {
    // getting requested id using parameter
    const { id } = req.params

    // check if req complies with mongoose 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user data'})
    }

    const user_data = await UserData.findById(id)

    // if requested user data does not exist
    if (!user_data) {
        return res.status(404).json({error: 'No such user data'})
    }

    res.status(200).json(user_data)
}


// create new user data
const createUserData = async (req, res) => {
    const {id, scores} = req.body
    
    const newUserData = new UserData({
        id: id,
        scores: scores
    })

    // add doc to db
    try {
        await newUserData.save()
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    console.log('POST:', newUserData)
    return res.status(201).json({user_data: newUserData})
}

// delete user data
const deleteUserData = async (req, res) => {
    const { id } = req.params

    // check if req complies with mongoose 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user data'})
    }

    const user_data = await UserData.findOneAndDelete({_id: id})

    if (!user_data) {
        return res.status(404).json({error: 'No such user data'})
    }

    res.status(200).json(user_data)
}

// update user data
const updateUserData = async (req, res) => {
    const { id } = req.params

    // check if req complies with mongoose 
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such user data'})
    }

    // updating user data by updating requested properties by body
    const user_data = await UserData.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if (!user_data) {
        return res.status(404).json({error: 'No such user data'})
    }

    res.status(200).json(user_data)
}


module.exports = {
    getAllUserData,
    getUserData,
    createUserData,
    deleteUserData,
    updateUserData
}