const express =require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello from express');
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000 🧑🏼‍💻');
});

app.get('/login',(req,res)=>{
    res.send('Login page');
});

app.get('/register',(req,res)=>{
    res.send('Register page');
}); 

app.get('/dashboard',(req,res)=>{
    res.send('Dashboard page');
}); 

app.get('/profile',(req,res)=>{
    res.send('Profile page');
});  

app.get('/settings',(req,res)=>{
    res.send('Settings page');
});  
    





