const express = require('express')
const UserData = require('../models/userDataModel')

// create instance of express router
const router = express.Router()

// GET all user data
router.get('/', (req, res) => {
    res.json({mssg: 'GET all user data'})
})

// GET a single user data
router.get('/:id', (req, res) => {
    res.json({mssg: 'GET single user data'})
})

// POST new user data
router.post('/', async (req, res) => {
    const {id, scores} = req.body
    
    const newUserData = new UserData({
        id: id,
        scores: scores
    })

    try {
        await newUserData.save()
    } catch (error) {
        res.status(400).json({error: error.message})
    }

    console.log('POST:', newUserData)
    return res.status(201).json({user_data: newUserData})
})

// DELETE user data
router.delete('/:id', (req, res) => {
    res.json({mssg: 'DELETE user data'})
})

// UPDATE user data
router.patch('/:id', (req, res) => {
    res.json({mssg: 'UPDATE user data'})
})

module.exports = router