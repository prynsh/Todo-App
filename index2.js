const express = require("express");
const { createTodo } = require("./types");
const app=express();
const port=3000;

app.use(express.json());

app.post("todo",(req,res)=>{
    const payLoad= req.body;
    const parsedPayLoad = createTodo.safeParse(payLoad);
    if(!parsedPayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }


})
app.get("todos",(req,res)=>{

})

app.put("completed",(req,res)=>{

    const updatePayLoad= req.body;
    const parsedUpdatePayLoad = createTodo.safeParse(updatePayLoad);
    if(!parsedUpdatePayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        })
        return;
    }
})


app.listen({port},()=>{
    `Server is running  at http://localhost:${port}`
})