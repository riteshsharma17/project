const routes = require("express").Router();
const Category = require("../models/Category");


routes.get("/", async(req, res)=>{
    let result = await Category.find();
    res.send({success : true ,result : result})
 })

 routes.get("/:id", async(req, res)=>{
    let result = await Category.find({ _id : req.params.id});
    res.send({success : true ,result : result[0]})
 })

routes.post("/", async(req, res)=>{
    await Category.create(req.body);
    res.send({ success : true });
})

routes.put("/:id", async(req, res)=>{
    await Category.updateMany({_id : req.params.id}, req.body);
    res.send({ success : true });
})

routes.delete("/:id", async(req, res)=>{
    await Category.deleteMany({_id : req.params.id});
    res.send({ success : true });
})


module.exports = routes;