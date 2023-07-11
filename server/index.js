const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const  authRoute = require('./route/authRoute');
const userRoute = require('./route/userRoute')

dotenv.config()


mongoose.connect(process.env.URL_MONGOOSE, () => {
    console.log('Connect Database Mongoose Successfully');
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())


app.use('/linhkiendientu', authRoute)

app.use('/linhkiendientu', userRoute)

app.listen(process.env.PORT, () => {
    console.log(`Connnection started on port ${process.env.PORT} successfully`);
})