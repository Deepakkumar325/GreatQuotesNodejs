const mongoose = require('mongoose');

const Greatqoutes = new mongoose.Schema({
    author:{
     type:String,
     required : true,
    },
    quote:{
        type:String,
        required:true,
    }
})

module.exports =  mongoose.model('qoutes',Greatqoutes);