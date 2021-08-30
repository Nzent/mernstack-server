// Express main config file

import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import usersRoutes from './routes/users.js'
// initialize expressjs
const app = express()

app.use(express.urlencoded());
app.use(express.json());
app.use(cors())

// initialize routers
app.use('/users', usersRoutes)


// env variables
const DB_URL = 'mongodb+srv://Nirvan:Nirvan123@nirvan.1ywho.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000


// Initialize mongodb connection
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT}`)))
    .catch((err) => console.log(err.message))