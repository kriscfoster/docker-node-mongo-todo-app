const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db/index.js');
const ToDo = require('./db/models/toDo.js').ToDo;

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));

db.connect().then(() => {
  console.log('Listening on port: ' + PORT);
  app.listen(PORT);
});

app.get('/todo', (req, res) => {
  ToDo.find()
    .then((toDos) => res.status(200).send(toDos))
    .catch((err) => res.status(400).send(err));
});

app.post('/todo', (req, res) => {
  const body = req.body;
  const toDo = new ToDo({
    text: body.text,
  });
  toDo.save(toDo)
    .then((savedToDo) => res.status(201).send(savedToDo))
    .catch((err) => res.status(400).send(err));
});

app.patch('/todo/:id', (req, res) => {
  const { id } = req.params;
  ToDo.findOneAndUpdate({ _id: id }, { done: true })
    .then((toDo) => res.status(200).send(toDo))
    .catch((err) => res.status(400).send(err));
});
