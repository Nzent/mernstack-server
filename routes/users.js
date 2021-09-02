// Users routes
import express from "express";
// initialize router 
const router = express.Router()

// import users controllers
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/users.js'// controllers imports

// Users routes
router.get('/', getUsers)//get all users
router.post('/', createUser)//create new user
router.patch('/:id', updateUser)//update user byid
router.delete('/:id', deleteUser)//delete user by id

export default router;