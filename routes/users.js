// Users routes
import express from "express";
// initialize router 
const router = express.Router()

// import users controllers
import { getUsers, createUser } from '../controllers/users.js'

// Users routes
router.get('/', getUsers)//get all users
router.post('/', createUser)//create new user

export default router;