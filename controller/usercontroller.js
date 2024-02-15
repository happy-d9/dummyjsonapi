var { add_user } = require('../model/usermodel')
var { add_cart } = require('../model/cartmodel');
const { add_post } = require('../model/postmodel');
exports.add_user = async (req, res) => {
    var data = await add_user.create(req.body);
    res.status(200).json({
        status: "success",
        data
    })
}
exports.all_user = async (req, res) => {
    var data = await add_user.find();
    res.status(200).json({
        status: "success",
        data
    })
}
exports.single_user = async (req, res) => {
    var id = req.params.id;
    var data = await add_user.findById(id);
    res.status(200).json({
        status: "success",
        data
    })
}
exports.search_user = async (req, res) => {
    var name = req.params.name;
    var data = await add_user.find({ firstName: name });
    res.status(200).json({
        status: "success",
        data
    })
}
exports.filter_user = async (req, res) => {
    var name = req.params.name;
    var data = await add_user.find({ color: name });
    res.status(200).json({
        status: "success",
        data
    })
}
exports.limit = async (req, res) => {
    // var id=req.params.id;
    var data = await add_user.find(req.params.firstName,req.params.age).limit(2);
    res.status(200).json({
        status: "success",
        data
    })
}
exports.user_id = async (req, res) => {
    var id = req.params.id;
    var data = await add_cart.findOne({ userId: id });
    res.status(200).json({
        status: "success",
        data
    })
}
exports.user_post = async (req, res) => {
    var id = req.params.id;
    var data = await add_post.findOne({ userId: id });
    res.status(200).json({
        status: "success",
        data
    })
}
exports.update = async (req, res) => {
    var id = req.params.id;
    var data = await add_user.findByIdAndUpdate(id, req.body)
    res.status(200).json({
        status: "success",
        data
    })
}
exports.delete_user = async (req, res) => {
    var id = req.params.id;
    await add_user.findByIdAndDelete(id);
    var data = await add_user.findById(id);
    res.status(200).json({
        status: "success",
        data
    })
}