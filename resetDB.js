var fs = require('fs');
const json = {
  todo: [],
};

const stringData = JSON.stringify(json);
fs.writeFile('todo.json', stringData, 'utf8', callback);

function callback() {
  console.log("DB Successfully Reset");
}
