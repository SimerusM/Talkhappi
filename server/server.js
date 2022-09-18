require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
var cors = require('cors')
const userDataRoutes = require('./routes/user-data')

// express app with cors
const app = express()
app.use(cors())

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/userData', userDataRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
            console.log("connected to db & listening on port", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

app.get("/api", (req, res) => {
    res.json({"data": ["data1", "data2", "data3"]})
})
