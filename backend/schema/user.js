const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : String,
    mobile : String,
    wishlist : {
        type : Array,
        default : []
    }
})

module.exports = mongoose.model("User", userSchema);