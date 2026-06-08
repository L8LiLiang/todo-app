const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', event => {
  event.preventDefault();
  const todoText = todoInput.value.trim();
  if (!todoText) return;
  addTodo(todoText);
  todoInput.value = '';
  todoInput.focus();
});

function addTodo(text) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const textElement = document.createElement('p');
  textElement.className = 'todo-text';
  textElement.textContent = text;
  textElement.addEventListener('click', () => {
    textElement.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.type = 'button';
  deleteButton.className = 'delete-button';
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    listItem.remove();
  });

  listItem.append(textElement, deleteButton);
  todoList.appendChild(listItem);
}
