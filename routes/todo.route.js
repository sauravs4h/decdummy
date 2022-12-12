const express=require("express");

const todorouter=express.Router();

const {Todomodel}=require("../Models/todom.model")

todorouter.post("/create",async(req,res)=>{
    const payload=req.body;
    try{
        await Todomodel.insertMany([payload]);
        console.log("posted")
        res.send("post successfully")

    }
    catch(err){
        console.log("not posted");
        console.log(err);
    }
})

todorouter.get("/",async(req,res)=>{
    try{
        let data=await Todomodel.find()
        res.send(data);
        console.log("get successfully")

    }
    catch(err){
        console.log("not getting");
        console.log(err);
    }
})

todorouter.patch("/:todoId",async(req,res)=>{
    let tid=req.params.todoId;
    let payload=req.body;
    try{
        await Todomodel.findByIdAndUpdate({_id:tid},payload);
        console.log("update success");
        res.send("update success");
    }
    catch(err){
        console.log("not updated")
    }

})

todorouter.delete("/:todoId",async(req,res)=>{
    let tid=req.params.todoId;
    try{
        await Todomodel.findByIdAndDelete({_id:tid})
        console.log("delete successfully");
        res.send("delete successfully")
    }
    catch(err){
        console.log("not delete");
        console.log(err);
    }
})


module.exports={todorouter}