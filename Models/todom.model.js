const mongoose=require("mongoose");


const todoschema=mongoose.Schema({
    name:String,
    status:Boolean
})
const Todomodel=mongoose.model("ytodo",todoschema);

module.exports={Todomodel}