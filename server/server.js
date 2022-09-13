const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get("/api", (req, res) => {
    res.json({"data": ["data1", "data2", "data3"]})
})

app.listen(5000, () => { console.log("Server started on port 5000, hi") })