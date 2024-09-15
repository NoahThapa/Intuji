// Creating the model of the Blog with title, description and category

const mongoose = require('mongoose');
const blogSchema =  new mongoose.Schema({
    title: { type:String, 
    required:true},


    description:{type:String, 
    required:true},

    category:{type:String,
    required:true,
    unique:true
}
})
const Blog = mongoose.model('Blog',blogSchema)
module.exports = Blog