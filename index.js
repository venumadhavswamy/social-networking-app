const express = require('express')
const app = express()
const port = 1300

app.listen(port, err =>{
    if(err){
        console.log('Error in running the server:',err)
    }
    else{
        console.log('Server is running on port:',port)
    }
})