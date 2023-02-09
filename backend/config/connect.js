const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();
const username = process.env.MONGO_username;
const password = process.env.MONGO_password;

const connect =async()=>{
    const result = await mongoose.connect(`mongodb+srv://${username}:${password}@hotstar-mern.sd2cm4c.mongodb.net/?retryWrites=true&w=majority`);
}

module.exports = connect;