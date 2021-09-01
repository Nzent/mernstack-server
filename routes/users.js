// Users routes
import express from "express";
// initialize router 
const router = express.Router()

// import users controllers
import { getUsers, createUser, updateUser } from '../controllers/users.js'

// Users routes
router.get('/', getUsers)//get all users
router.post('/', createUser)//create new user
router.patch('/:id', updateUser)//update existing user

export default router;