const express=require("express");

const {connection}=require("./config/db");
const{todorouter}=require("./routes/todo.route");

const app=express();

app.use(express.json());
app.use("/todos",todorouter);

app.get("/",(req,res)=>{
    res.send("hello");
})

app.listen(7500,async()=>{
    try{
        await connection
        console.log("connected to the server");
    }
    catch(err){
        console.log("not connected");
        console.log(err);
    }
    
})