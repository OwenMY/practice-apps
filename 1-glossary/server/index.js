require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "../client/dist")));


//Methods & Routes
app.delete('/home', (req, res) => {
  let wordToDelete = req.body.word;
  res.send('Success!!')
})

app.get('/home', (req, res) => {
  res.send('Success!!')
})

app.get('/search/:query', (req, res) => {
  let searchInput = req.params.query;
  //Need to invoke search data base function
  res.send('Success!!')
})

app.post('/home', (req, res) => {
  let word = req.body.word;
  let definition = req.body.definition;

  if (word.length === 0) {
    res.sendStatus(400)
  } else {
    res.send('Success!!')
  }
})

app.put('/home', (req, res) => {
  let update = req.body.data;

  res.send('Success!!')
})




app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
