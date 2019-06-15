const mongoose = require('mongoose');
const DB_URI = 'mongodb://mongo/toDoApp';

function connect() {
  return new Promise((resolve, reject) => {
    mongoose.connect(DB_URI,
      { useNewUrlParser: true, useCreateIndex: true })
      .then((res, err) => {
        if (err) return reject(err);
        resolve();
      });
  });
}

module.exports = { connect };
