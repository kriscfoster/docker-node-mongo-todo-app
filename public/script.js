window.onload = function() {
  fetch('/todo', {
    method: 'GET'
  })
  .then((res) => res.json())
  .then((body) => {
    const todoBody = document.getElementById('todo-body');
    const doneBody = document.getElementById('done-body');
    body.forEach((todo, index) => {
      if (todo.done) {
        // add to done
        const row = document.createElement('tr');
        row.innerHTML = `<td>${todo.text}</td>`;
        doneBody.appendChild(row);
      } else {
        // add to todo table
        const row = document.createElement('tr');
        row.id = `todo-${index}`;
        row.innerHTML = `
          <td scope="row" class="text-left">${todo.text}</td>
          <td>
            <button
              class="btn btn-outline-success btn-sm"
              id=${todo._id}
              cy-data=${'todo-' + index}
              onClick="doneTODO(event)"
            >
              Done
            </button>
          </td>`

        todoBody.appendChild(row);
      }
    })
  })
}

function createTODO() {
  const todo = document.querySelector('input').value;
  fetch('/todo', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: todo, done: false })
  })
  .then(() => window.location.reload());
}

function doneTODO(event) {
  const { id } = event.target;
  fetch(`/todo/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ done: true })
  })
  .then(() => window.location.reload());
}
