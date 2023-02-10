const express = require('express');
const userRoutes = express.Router();
const User = require("../schema/user")
userRoutes.post('/getuser',async(req,res)=>{
    if(req.body.name && req.body.mobile){
        try{
            const result = await User.findOne(req.body);
        if(result){
            res.send(result);
        }
        else{
            var data = { "user" :"not found"}
            res.send(data);
        }
        }catch{
            console.log(err);
        }
    }
})

userRoutes.post('/',async(req,res)=>{
    try{
        let user = await User.create(req.body);
        res.send(user);
    } catch(err){
        console.log(err);
    }
})

userRoutes.patch('/:id/wishlist', async(req,res)=>{
    try{
        let user = await User.updateOne(
            {_id:req.params.id},
            {$push:{
                wishlist:req.body.wishlist
            }})
        res.send(user);
    }catch{
        console.log(err);
    }
})

module.exports = userRoutes;