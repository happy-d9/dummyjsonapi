const {mongoose}=require('mongoose');

const post=new mongoose.Schema({
    title:{type:String},
    body:{type:String},
    userId:{type:String},
    tags:{type:Array},
    reactions:{type:String},
})

var add_post = mongoose.model('post', post)
module.exports = { add_post };