const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'));
app.listen(PORT);

const todoArr = [];

app.get('/todo', (req, res) => {
  res.send({
    body: todoArr
  })
})

app.post('/todo', (req, res) => {
  const todo = req.body;
  const date = new Date();
  todo.id = date.getTime().toString();
  todoArr.push(todo);
  res.send({ ok: true });
});

app.patch('/todo/:id', (req, res) => {
  const { id } = req.params;
  todoArr.forEach((todo) => {
    if (todo.id === id) {
      todo.done = true;
    }
  });

  res.send({ ok: true });
});
