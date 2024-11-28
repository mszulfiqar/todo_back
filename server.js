const express = require('express');
const app = express();
const cors = require('cors');
const TodoModel = require('./modals/Todos')
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
}
app.use(cors(corsOptions));

app.use(express.json())

mongoose.connect(process.env.MONGO)

app.get('/get',(req,res)=>{
    TodoModel.find().then(result=>res.json(result))
})

app.post('/add',(req,res)=>{
    const task = req.body.task;
    TodoModel.create({
        task:task
    }).then(result=>res.json(result))

})

app.put('/update/:id',async (req,res)=>{
    const {id} = req.params;
   await TodoModel.findByIdAndUpdate({_id: id},{done: true})
})


app.delete('/delete/:id',async (req,res)=>{
    const {id} = req.params;
    await TodoModel.findByIdAndDelete({_id: id})
})
app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})