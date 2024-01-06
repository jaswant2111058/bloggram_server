const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title:{
        type: String,
        required: true
    },
    datetime:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    imgId:{
        type: String,
        required: true
    },
    user:{
        sub: String,
        name: String,
        username: String,
        email: String,
        photo: String,
    }
})

module.exports = mongoose.model('blog_posts', postSchema);


