const express = require('express')
const {
    getAllUserData,
    getUserData,
    createUserData,
    deleteUserData,
    updateUserData
} = require('../controllers/userDataController')

// create instance of express router
const router = express.Router()

// CRUD operations

// GET all user data
router.get('/', getAllUserData)

// GET a single user data
router.get('/:id', getUserData)

// POST new user data
router.post('/', createUserData)

// DELETE user data
router.delete('/:id', deleteUserData)

// UPDATE user data
router.patch('/:id', updateUserData)

module.exports = router