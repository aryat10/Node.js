const express = require('express');
const app = express();
const movies = require('./MOCK_DATA (1).json');

app.get('/', (req, res) => {
    res.send('<h1>Learning Rest API 🔗</h1>');
});

app.get('/api/movies', (req, res) => {
   return res.json(movies);
});

app.get('/movies',(req,res)=>{
    const html = 
    `<h3>Movies</h3>
    <ul>
        ${movies.map(movie=>`<li>${movie.movie_titles}</li>`).join('')}
    </ul>
    `
    res.send(html);
})


app.post('/api/movies',(req,res)=>{
    return res.json({
        message:"Work in progress ♻️🖥️"
    })
})


app.listen(3000, () => {
    console.log('Server is running on port 3000 ');
});

