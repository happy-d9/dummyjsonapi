const {mongoose}=require('mongoose');

const cart=new mongoose.Schema({

    id:{type:String},
    products:{ type:Array,
        id:{type:String},
        title:{type:String},
        price:{type:String},
        quantity:{type:String},
        total:{type:String},
        discountPercentage:{type:String},
        discountedPrice:{type:String}, 
},
    total:{type:String},
    discountedTotal:{type:String},
    userId:{type:String},
    totalProducts:{type:String},
    totalQuality:{type:String}
})

var add_cart=mongoose.model('cart',cart)
module.exports={add_cart};