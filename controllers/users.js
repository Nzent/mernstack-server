// Users controller

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

// creaye new users controller
export const createUser = async (req, res) => {
    const user = req.body;
    const newUser = new UsersModel(user);

    try {
        await newUser.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}