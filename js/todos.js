function loadTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => displayTodos(data))
}


function displayTodos(todos) {
    const todoContainer = document.getElementById('todo-container')
    for (const todo of todos) {
        const todoDiv = document.createElement('div')
        todoDiv.innerHTML = `
        <p>User Id:  ${todo.userId}</p>
        <p>ID: ${todo.id}</p>
        <p>Title: ${todo.title}</p>
        <p>Completed: ${todo.complete === true ? 'Completed' : 'Not Complete'}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
}

loadTodos();