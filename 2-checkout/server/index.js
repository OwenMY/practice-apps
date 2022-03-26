require("dotenv").config();
const express = require("express");
const path = require("path");
const sessionHandler = require("./middleware/session-handler");
const logger = require("./middleware/logger");

// Establishes connection to the database on server start
const {save, getSession, deletePurchase} = require("./dbProcessor.js").sqlFuncs

const app = express();

// Adds `req.session_id` based on the incoming cookie value.
// Generates a new session if one does not exist.
app.use(sessionHandler);

// Logs the time, session_id, method, and url of incoming requests.
app.use(logger);

// Serves up all static and generated assets in ../client/dist.
app.use(express.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.post('/purchase', (req, res) => {
  let purchaseInfo = req.body;
  save(req.body, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      console.log(result[0], 'this is line 29')
      let session = { purchased: true };
      res.status(201).send(session);
    }
  })
})

app.get('/purchase', (req, res) => {
  let sessionId = req.query.session_id;
  getSession(sessionId, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      res.send(result)
    }
  })
})

app.delete('/purchase', (req, res) => {
  deletePurchase('poop', (err, result) => {
    if (err) {
      res.status(400);
    } else {
      res.send(result);
    }
  })
})

app.listen(process.env.PORT);
console.log(`Listening at http://localhost:${process.env.PORT}`);
