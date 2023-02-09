const express = require('express');
const userRoutes = express.Router();
const User = require("../schema/user")
userRoutes.get('/',async(req,res)=>{

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