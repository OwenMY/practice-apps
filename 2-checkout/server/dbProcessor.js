const db = require('./db');

const save = function(data, callback) {
  let values = Object.values(data);
  let keys = Object.keys(data);
  let columns = keys.reduce((prevValue, currValue) => prevValue += ', ' + currValue);
  let questionMarks = keys.fill('?').reduce((prevValue, currValue) => prevValue + ', ' + currValue);
  // const questionMarks = `?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?`;

  db.queryAsync(`INSERT INTO responses (` + columns + `) values(${questionMarks})`,
   [...values])
    .then((res) => callback(null, res))
    .catch((err) => callback(err, null))
};

const getSession = function(id, callback) {
  db.queryAsync(`Select session_id from responses
    WHERE session_id=${JSON.stringify(id)}`)
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null))
};

//Optional function to use
const deletePurchase = function(query, callback) {
  db.queryAsync(`DELETE FROM responses WHERE session_id=${JSON.stringify('s_id=a0b36879-dbc4-4a4f-99e1-05fa12e688b0')}`)
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null))
};

const sqlFuncs = {
  save: save,
  getSession: getSession,
  deletePurchase: deletePurchase
};

module.exports.sqlFuncs = sqlFuncs;