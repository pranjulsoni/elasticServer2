const express = require('express')
var app = express()
const bodyparser=require('body-parser')
var axios = require('axios')
app.use(bodyparser())

app.post('/logout',function (req,res) {
    console.log("we are at login");
    res.send("we are at logout")
    
})
app.get('/login',function (req,res) {
    res.send("hello")
})

app.listen(5000,console.log("server----2 is running"))