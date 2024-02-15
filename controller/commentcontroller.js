var add_com=require('../model/commentmodel');

exports.add_com=async(req,res)=>
{
    var data = await add_com.create(req.body);
    res.status(200).json({
        status: "success",
        data
    })
}