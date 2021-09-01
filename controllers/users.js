// Users controller

import mongoose from 'mongoose';
import UsersModel from '../models/users.js'

// getall users controller
export const getUsers = async (req, res) => {
    try {
        const Users = await UsersModel.find()
        res.status(200).json(Users);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
}

// create new users controller
export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new UsersModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);// create new user
    } catch (err) {
        res.status(409).json({ message: err.message })// return error if something went wrong
    }
}


// update existing user by id
export const updateUser = async (req, res) => {
    const { id: _id } = req.params// get user by id
    const user = req.body//get new user data
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('User not exist this id') // before update check user existance
    const updatedUser = await UsersModel.findByIdAndUpdate(_id, user, { new: true }) // add new data to existing user
    res.json(updateUser) // send updated use data
}