const express = require('express')
const app = express();
const PORT = process.env.PORT || 3500;
const cors = require('cors')
require('dotenv').config();
const mongoose = require('mongoose')


mongoose.set('strictQuery', true)
mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));


    
app.use(
    cors({
        origin: "*",
        exposedHeaders: 'Authorization'
    })
);


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/',require('./routes/api/post'))
app.use('/feedback', require('./routes/api/contact'))

mongoose.connection.once("open", () => {
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});