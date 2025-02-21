const express=require('express');
const app=express();
const connection = require('./connection');
const {AirplanesModel , Review} = require ('./Schema')
require("dotenv").config();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.post('/airplanes', async (req, res) => {
    try {
        const { name, year } = req.body;
        const airplane = new Airplanes({ name, year });
        await airplane.save();
        res.send(airplane);
        console.log(airplane);
    } catch (error) {
        
        console.log(error);
        res.status(500).send(error);
    }
});



app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log('Server is running at http://localhost:3000');
    } catch (error) {
        console.log(error);
    }
    
})