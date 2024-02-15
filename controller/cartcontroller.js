var {add_cart}=require('../model/cartmodel');

exports.add_cart=async(req,res)=>
{
    var data =await add_cart.create(req.body);
    res.status(200).json({
        status :"success",
        data 
    })
}
exports.find_cart=async(req,res)=>
{
    var data =await add_cart.find();
    res.status(200).json({
        status :"success",
        data 
    })
}
exports.single_cart=async(req,res)=>
{
    var id=req.params.id;
    var data=await add_cart.findById(id);
    res.status(200).json({
        status:"success",
        data
    })
}
exports.user=async(req,res)=>
{
    var id=req.params.id;
    var data=await add_cart.findOne({userId:id});
    res.status(200).json({
        status:"success",
        data
    })
}
exports.update=async(req,res)=>
{
    var id=req.params.id;
    var data=await add_cart.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"success",
        data
    })
}
exports.delete_cart=async(req,res)=>
{
    var id=req.params.id;
    await add_cart.findByIdAndDelete(id);
    var data=await add_cart.findById(id);
    res.status(200).json({
        status:"success",
        data
    })
}