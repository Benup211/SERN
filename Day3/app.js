const express=require('express');
const app=express();
const {sequelize,User}=require('./models');

app.use(express.json());
app.get('/users',async(req,res)=>{
    try{
        const users=await User.findAll();
        return res.json(users);
    }catch(err){
        console.error(err);
        return res.status(500).json(err);
    }
});
app.post('/users',async(req,res)=>{
    const {firstName,lastName,email,password,address,phoneNo,desc,hooby,age}=req.body;
    console.log(req.body);
    try{
        const user=await User.create({firstName,lastName,email,password,address,phoneNo,desc,hooby,age});
        return res.json(user);
    }catch(err){
        console.error(err);
        return res.status(500).json(err);
    }
});

app.listen(3000,async()=>{
    console.log('Server is running on http://localhost:3000');
    try{
        await sequelize.authenticate();
        console.log('Database connected!');
        console.log('Database Synced!');
    }catch(err){
        console.error('Database connection failed!');
        console.error(err);
    }
});
