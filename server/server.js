const express = require('express');
const cors = require('cors');
const data = require('./budgetdetails.json');
const app = express();
const port = 3000;

app.use(cors());




app.get('/budget' , (req,res) => {

    res.json(data);

});

app.listen (port, () =>
{
  console.log('Example app listening at http://localhost: ${port}');
});
