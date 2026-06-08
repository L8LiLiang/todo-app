const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');
const themeToggle = document.getElementById('theme-toggle');

// Initialize theme from localStorage or system preference
function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
  updateThemeToggleIcon(theme);
}

function updateThemeToggleIcon(theme) {
  themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeToggleIcon(newTheme);
}

themeToggle.addEventListener('click', toggleTheme);
initializeTheme();

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
