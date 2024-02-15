const {mongoose}= require('mongoose');

const add_product=new mongoose.Schema({
    id:{type:String},
    title:{type:String},
    description:{type:String},
    price:{type:String},
    discountPercentage:{type:String},
    rating:{type:String},
    stock:{type:String},
    brand:{type:String},
    category:{type:String},
    thumbnail:{type:String},
    images:{type:Array}
})


var add_pro=mongoose.model('product',add_product);
module.exports={add_pro};