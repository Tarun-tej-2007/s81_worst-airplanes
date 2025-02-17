const express=require('express');
const app=express();
const connection = require('./connection');
require("dotenv").config();

app.get('/',(req,res)=>{
    res.send('Hello World');
});



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Server is running on port 3030');
    } catch (error) {
        console.log(error);
    }
    
})