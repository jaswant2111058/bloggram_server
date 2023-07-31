const express = require('express')
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors')
const corsOption = require('./config/corsOption')
const mongoose = require('mongoose')
const connectDB = require("./config/dbCon")
require('dotenv').config();

connectDB();

app.use(cors(corsOption))
app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/',require('./routes/api/post'))

mongoose.connection.once("open", () => {
    console.log("Connected to mongoDB");
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});