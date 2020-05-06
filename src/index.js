import Header from './components/Header';
import Main from './components/Main';
import { projectName } from './components/Todos';
import { todo } from './components/Todo';
import { TodoItem, TodoItemShow } from './components/TodoItem';
// import flatpickr from 'flatpickr';
import './css/style.css';

const page = document.querySelector('#content');

page.append(Header(), Main());

const projectBtn = document.getElementById('addTodoBtn');

const projectDiv = document.querySelector('.projectdiv');
const plusIcon = document.querySelector('.fas');
projectBtn.addEventListener('click', (e) => {
  if (projectDiv.style.display === 'none') {
    projectDiv.style.display = 'block';
    plusIcon.classList.replace('fa-plus', 'fa-times');
  } else {
    projectDiv.style.display = 'none';
    plusIcon.classList.replace('fa-times', 'fa-plus');
  }
});

const openTodo = (e) => {
  const mainContent = document.querySelector('#maincontent');
  mainContent.innerHTML = '';
  mainContent.appendChild(todo(e.target.innerText));

  const addTodoItmBtn = document.querySelector('#add-itm-btn');
  const addItem = document.querySelector('.add-item');

  addTodoItmBtn.addEventListener('click', () => {
    if (addItem.style.display === 'none') {
      addItem.style.display = 'flex';
    } else {
      addItem.style.display = 'none';
    }
  });

  flatpickr('#date', { dateFormat: 'F j, Y' });

  const addItemForm = document.querySelector('.add-item form');

  addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoItems = document.querySelector('#todo-items');
    let elements = e.target.elements;

    const checkedPriority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;

    const li = TodoItem(elements[0].value, elements[1].value);
    const todoShowDiv = TodoItemShow(
      elements[0].value,
      elements[1].value,
      checkedPriority,
      elements[5].value
    );
    todoItems.append(li);
    mainContent.append(todoShowDiv);

    if (addItem.style.display === 'none') {
      addItem.style.display = 'flex';
    } else {
      addItem.style.display = 'none';
    }
    addItemForm.reset();

    const showMore = (e) => {
      console.log(e.target);
      if (todoShowDiv.style.display === 'none') {
        todoShowDiv.style.display = 'block';
      } else {
        todoShowDiv.style.display = 'none';
      }
    };

    li.addEventListener('click', showMore);
  });
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == addItem) {
      addItem.style.display = 'none';
    }
  };
};

document.querySelector('.projectdiv form').addEventListener('submit', (e) => {
  e.preventDefault();
  const projects = document.getElementById('projects');
  const li = projectName(e.target.elements[0].value);
  projects.append(li);
  li.addEventListener('click', openTodo);

  projectDiv.style.display = 'none';
  plusIcon.classList.replace('fa-times', 'fa-plus');
  e.target.elements[0].value = '';
});
