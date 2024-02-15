const { add_pro } = require("../model/indexmodel");

exports.add_pro=async(req,res)=>
{
    var data =await add_pro.create(req.body);
    res.status(200).json({
        status :"success",
        data 
    })
}
exports.add_pro_find=async(req,res)=>
{
    var data =await add_pro.find(req.body);
    res.status(200).json({
        status :"success",
        data 
    })
}
exports.single_pro=async(req,res)=>
{
    var id=req.params.id;
    var data=await add_pro.findById(id);
    res.status(200).json({
        status:"success",
        data
    })
}
exports.search_pro=async(req,res)=>
{
    var data=await add_pro.find({title:req.body.title});
    res.status(200).json({
        status:"success",
        data
    })
}
exports.limit=async(req,res)=>
{
    var data=await add_pro.find().limit(10).skip(5);
    res.status(200).json({
        status:"success",
        data
    })
}
exports.category=async(req,res)=>
{
    
    var data=await add_pro.find(req.params.category);
    res.status(200).json({
        status:"success",
        data
    })
}
exports.single_cat=async(req,res)=>
{
    var name=req.params.name;
    var data=await add_pro.find({category:name});
    res.status(200).json({
        status:"success",
        data
    })
}
exports.update=async(req,res)=>
{
    var id=req.params.id;
    var data=await add_pro.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"success",
        data
    })
}
exports.delete_pro=async(req,res)=>
{
    var id=req.params.id;
    await add_pro.findByIdAndDelete(id);
    var data=await add_pro.findById(id);
    res.status(200).json({
        status:"success",
        data
    })
}
