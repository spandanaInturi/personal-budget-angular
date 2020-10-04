const express = require('express');
const data = require('./budgetdetails.json');
const app = express();
const port = 3000;


app.use('/', express.static('public'));


app.get('/hello' , (req,res) => {
    
    res.send("Hello world");

});
app.get('/budget' , (req,res) => {

    res.json(data);

});

app.listen (port, () =>
{
  console.log('Example app listening at http://localhost: ${port}');
});
