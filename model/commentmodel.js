const {mongoose}=require('mongoose');

const add_com=new mongoose.Schema({
      body:{type:String},  
      postId:{type:String},  
      user:{type:Array,
        id:{type:String},
        username:{type:String}
    }
})

module.exports = mongoose.model('comments', add_com)