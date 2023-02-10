const express = require('express');
const cors = require('cors')
const connect = require('./config/connect')
require('dotenv').config();
const port = process.env.port;
const app = express();
const userRoutes = require('./routes/userRoutes');
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
});
app.use('/user', userRoutes);

connect()
.then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((e)=>{
    console.log("unexpected error occured", e);
});

