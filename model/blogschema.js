const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({

    title:{
        type:String
    },
    image:{
        type:String
    },
    description:{
        type:String
    }

});

const blog = mongoose.model('blog',blogSchema);

module.exports = blog;