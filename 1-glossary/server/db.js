const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/glossary')

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

const wordSchema = new mongoose.Schema({
  word: String,
  definition: String,
  editView: Boolean
});

const wordEntry = mongoose.model('wordEntry', wordSchema);

const save = function(word, definition, callback) {
  let entry = {
    word: word,
    definition: definition,
    editView: false
  };

  wordEntry.find({ word: word }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      let newEntry = new wordEntry(entry);
      newEntry.save((err, doc) => getAll(callback));
    }
  })
};

const getAll = function(callback) {
  wordEntry.find({}, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  })
};

const update = function(word, definition, callback) {
  wordEntry.findOneAndUpdate({ word: word }, { definition: definition }, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      getAll(callback);
    }
  })
};

const deleteWord = function(word, callback) {
  wordEntry.deleteOne({ word: word }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      getAll(callback);
    }
  })
};

const search = function(query, callback) {
  wordEntry.find({ word: { $regex: query } }, (err, entry) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, entry);
    }
  })
};

const mongooseFuncs = {
  save: save,
  getAll: getAll,
  update: update,
  deleteWord: deleteWord,
  search: search,
  wordEntry: wordEntry
};

module.exports.mongooseFuncs = mongooseFuncs;