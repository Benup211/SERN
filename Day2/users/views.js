const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({"message":"Users View"});
});
router.get('/profile',(req,res)=>{
    res.status(200).json({"message":"Users Profile"});
});
router.get('/profile/:id',(req,res)=>{
    res.status(200).json({"message":"Users Profile with ID"});
});
module.exports=router;