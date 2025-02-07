const express = require( 'express' );
const bcrypt = reqiure( 'bcryptjs' );
const jwt = require ( 'jsonwebtokens');
const User = require ('../modules/User');

const router = express.Router();

router.post('/register', async(req,res)=>{
    const {name,email,password}=req.body;
    const hashedPassword = bcrypt.hashedPassword(password,10);
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });
    await newUser.save();
    res.json({message:"User registerted succsesfully!,now you can use the app"});
 });

 router.post ('/.login' , async( req,res)=>{
 })
