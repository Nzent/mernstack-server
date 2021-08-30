// Users model
import mongoose from 'mongoose'

// Users schema
const userSchems = mongoose.Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const UserSchema = mongoose.model('UserSchema', userSchems);

export default UserSchema;