require("dotenv").config();
const {save, getAll, deleteWord, update, search} = require("./db.js").mongooseFuncs;
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
  deleteWord(wordToDelete, (err, glossary) => {
    if (err) {
      console.error(err);
    } else {
      res.send(glossary);
    }
  })
});

app.get('/home', (req, res) => {
  getAll((err, glossary) => {
    if (err) {
      console.error(err);
    } else {
      res.send(glossary)
    }
  })
})

app.get('/search/:query', (req, res) => {
  search(req.params.query, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  })
})

//This is for when the user submits an empty query
app.get('/search/', (req, res) => {
  res.send([]);
})

app.post('/home', (req, res, next) => {
  let word = req.body.word;
  let definition = req.body.definition;

  if (word.length === 0) {
    res.sendStatus(400)
  } else {
    save(word, definition, (err, glossary) => {
      if (err) {
        res.sendStatus(500)
      } else {
        res.send(glossary)
      }
    });
  }
});

app.put('/home', (req, res) => {
  let word = req.body.word;
  let definition = req.body.def;

  update(word, definition, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result);
    }
  });
})


app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
