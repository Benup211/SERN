const express=require('express');
const app=express();
const setupMiddleware=require('./core/middleware');
setupMiddleware(app);

app.get('/',(req,res)=>{
    res.status(200).json({message:'Hello World'});
});
app.get('/hello',(req,res)=>{
    res.status(200).json({message:'Hello BiG'});
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});