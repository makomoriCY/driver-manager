const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

// ตั้งค่า project
const app = express()
// ดึงค่า port จาก file env
const port = process.env.PORT || 8080

// ตั้งค่าฐานข้อมูล
const uri = process.env.ATLAS_URI

mongoose.connect(uri, {
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const connection = mongoose.connection
connection.once('open', () => console.log('DB connect'))

// Middleware
app.use(express.json())
app.use(cors())

// Route
const scheduleRouter = require('./routes/ScheduleRoute')
app.use('/schedule', scheduleRouter)


app.listen(port, () => console.log(`Running on port:${port}`))