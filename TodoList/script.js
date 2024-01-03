document.getElementById('todo-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    if (todoInput.value.trim() === '') {
        alert('Please enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = todoInput.value.trim();
    todoList.appendChild(li);

    todoInput.value = '';
});