const express = require('express');
const app = express();

app.use(express.json());


app.get('/',(req,res)=>{
    res.send('Learn Middlewares');
})


app.use((req,res,next)=>{
    console.log('Middleware working 🛰️');
    next();
})


app.listen(4000,()=>{
    console.log('Server is running on port 4000 💡');
})
