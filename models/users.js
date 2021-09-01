// Users model
import mongoose from 'mongoose'

// Users schema
const userSchems = mongoose.Schema({
    first_name: String,
    last_name: String,
    dob: Date,
    department: String,
    email: { type: String, required: [true, 'Email required'], unique: true },
    phone: Number,
    address: String,
    role: [String],
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
})

const UserSchema = mongoose.model('users', userSchems);

export default UserSchema;