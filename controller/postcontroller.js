var {add_post}=require('../model/postmodel');

exports.add_post = async (req, res) => {
    var data = await add_post.create(req.body);
    res.status(200).json({
        status: "success",
        data
    })
}
exports.all_post = async (req, res) => {
    var data = await add_post.find();
    res.status(200).json({
        status: "success",
        data
    })
}
exports.single_post = async (req, res) => {
    var id = req.params.id;
    var data = await add_post.findById(id);
    res.status(200).json({
        status: "success",
        data
    })
}
exports.search_post = async (req, res) => {
    var name = req.params.name;
    var data = await add_post.find({ tags: name });
    res.status(200).json({
        status: "success",
        data
    })
}
exports.limit = async (req, res) => {
    // var id=req.params.id;
    var data = await add_post.find().limit(2).skip(1);
    res.status(200).json({
        status: "success",
        data
    })
}
exports.userId = async (req, res) => {
    var id=req.params.id;
    var data = await add_post.find({userId:id});
    res.status(200).json({
        status: "success",
        data
    })
}
exports.update = async (req, res) => {
    var id = req.params.id;
    var data = await add_post.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        status: "success",
        data
    })
}
exports.delete_post = async (req, res) => {
    var id = req.params.id;
    await add_post.findByIdAndDelete(id);
    var data = await add_post.findById(id);
    res.status(200).json({
        status: "success",
        data
    })
}