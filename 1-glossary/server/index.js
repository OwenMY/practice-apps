require("dotenv").config();
const express = require("express");
const bodyParser = require('body-parser');
const path = require("path");

const app = express();

// Serves up all static and generated assets in ../client/dist.
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, "../client/dist")));

app.delete('/home', (req, res) => {
  let wordToDelete = req.body.word;
  res.send('Success!!')
})

app.get('/home', (req, res) => {
  if (req.body.query) {
    //invoke the search database function
  } else {
    //invoke the getall function
  }
  res.send('Success!!')
})

app.post('/home', (req, res) => {
  let word = req.body.word;
  let definition = req.body.definition;
  if (word.length === 0) {
    res.send(400)
  } else {
    res.send('Success!!')
  }
})

app.put('/home', (req, res) => {
  res.send('Success!!')
})




app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
