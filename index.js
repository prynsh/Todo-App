const express = require("express");
const { createTodo } = require("./types");
const app=express();
const port=3000;

app.use(express.json());

app.post("todo",async (req,res)=>{
    const payLoad= req.body;
    const parsedPayLoad = createTodo.safeParse(payLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.create({
        title:payLoad.title,
        description:payLoad.description,
        completed: false,
    })
    res.json({
        msg:"Todo Created"
    })


})
app.get("todos",async (req,res)=>{
    const todos= await todos.find({});
    res.json({
        todos
    })
})

app.put("completed",async (req,res)=>{

    const updatePayLoad= req.body;
    const parsedUpdatePayLoad = createTodo.safeParse(updatePayLoad);
    if(!parsedUpdatePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
    await todo.update({
        _id:req.body.id,
    },{
        completed:true
    })
    res.json({
        msg:"Marked as completed"
    })
})


app.listen({port},()=>{
    `Server is running  at http://localhost:${port}`
})