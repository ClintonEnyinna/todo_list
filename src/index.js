import Header from './components/Header';
import Main from './components/Main';
import { projectName } from './components/Todos';
import todo from './components/Todo';
import { TodoItem } from './components/TodoItem';
import {
  getAllItemData,
  getGroupItems,
  addGroup,
  addGroupItems,
  delTodoItem,
} from './components/data';
// import flatpickr from 'flatpickr';
import './css/style.css';

let data = [
  {
    group: 'projects',
    items: [],
  },
  {
    group: 'work',
    items: [],
  },
  {
    group: 'music',
    items: [],
  },
];

const myData = JSON.parse(localStorage.getItem('data'));

if (myData) {
  data = myData;
}


const page = document.querySelector('#content');

page.append(Header(), Main());

const projectBtn = document.getElementById('addTodoBtn');
const projects = document.getElementById('projects');

const projectDiv = document.querySelector('.projectdiv');

const plusIcon = document.querySelector('.fas');
projectBtn.addEventListener('click', () => {
  if (projectDiv.style.display === 'none') {
    projectDiv.style.display = 'block';
    plusIcon.classList.replace('fa-plus', 'fa-times');
  } else {
    projectDiv.style.display = 'none';
    plusIcon.classList.replace('fa-times', 'fa-plus');
  }
});
const loadGroups = () => {
  for (let index = 0; index < data.length; index += 1) {
    const element = data[index].group;
    let li;
    if (element === 'projects' || element === 'work' || element === 'music') {
      li = projectName(element, 'fixed');
    } else {
      li = projectName(element);
    }

    projects.append(li);
    // eslint-disable-next-line no-use-before-define
    li.addEventListener('click', openTodo);
  }
};

const openTodo = (e) => {
  const mainContent = document.querySelector('#maincontent');
  const todoShowDiv = document.querySelector('#show-content');
  const groupName = e.target.innerText.toLowerCase();
  document.querySelector('#search').value = '';
  mainContent.innerHTML = '';
  mainContent.appendChild(todo(groupName));

  const addTodoItmBtn = document.querySelector('#add-itm-btn');
  const addItem = document.querySelector('.add-item');

  if (e.target.tagName === 'I') {
    const gName = e.currentTarget.innerText.toLowerCase();

    const getGroupIndex = data.findIndex(
      ({ group }) => group.toLowerCase() === gName.toLowerCase(),
    );
    data.splice(getGroupIndex, 1);
    localStorage.setItem('data', JSON.stringify(data));
    projects.innerHTML = '';
    loadGroups();
  }

  addTodoItmBtn.addEventListener('click', () => {
    if (addItem.style.display === 'none') {
      addItem.style.display = 'flex';
    } else {
      addItem.style.display = 'none';
    }
  });


  // eslint-disable-next-line no-undef
  flatpickr('#date', { dateFormat: 'F j, Y' });

  const addItemForm = document.querySelector('.add-item form');

  const todoItems = document.querySelector('#todo-items');

  const loadGroupItems = () => {
    const showMore = (e) => {
      const itemTitle = e.currentTarget.children[1].children[0].innerHTML;
      const itemData = getAllItemData(data, groupName, itemTitle);

      document.querySelector('#title').innerText = itemData.title;
      document.querySelector('#due-date').value = itemData.date;

      const radio = itemData.priority;

      document.querySelector(`#${radio}`).checked = true;
      document.querySelector('#desc').value = itemData.desc;

      if (e.target.tagName === 'I') {
        const showItemTitle = document
          .querySelector('#title')
          .innerText.toLowerCase();

        delTodoItem(data, groupName, showItemTitle);
        localStorage.setItem('data', JSON.stringify(data));
        todoItems.innerHTML = '';
        loadGroupItems();
      } else if (e.target.tagName === 'INPUT') {
        const todoItem = e.target.nextSibling;
        if (todoItem.style.textDecoration === 'line-through') {
          todoItem.style.textDecoration = 'none';
          itemData.status = false;
          localStorage.setItem('data', JSON.stringify(data));
        } else {
          todoItem.style.textDecoration = 'line-through';
          itemData.status = true;
          localStorage.setItem('data', JSON.stringify(data));
        }
      } else if (todoShowDiv.style.display === 'none') {
        todoShowDiv.style.display = 'block';
      } else {
        todoShowDiv.style.display = 'none';
      }
    };
    const groupItems = getGroupItems(data, groupName);
    if (groupItems) {
      for (let index = 0; index < groupItems.items.length; index += 1) {
        const element = groupItems.items[index];
        const li = TodoItem(element.title, element.date);
        if (element.status === true) {
          li.firstChild.checked = true;
          li.firstChild.nextSibling.style.textDecoration = 'line-through';
        }
        todoItems.append(li);
        li.addEventListener('click', showMore);
      }
    }

    document.querySelector('#search').addEventListener('keyup', (e) => {
      const todoGroup = data.find(
        ({ group }) => group.toLowerCase() === groupName.toLowerCase(),
      );
      todoItems.innerHTML = '';
      for (let i = 0; i < todoGroup.items.length; i += 1) {
        const str = todoGroup.items[i].title.toLowerCase();
        if (str.search(e.target.value) > -1) {
          const li = TodoItem(
            todoGroup.items[i].title,
            todoGroup.items[i].date,
          );
          if (todoGroup.items[i].title.status === true) {
            li.firstChild.checked = true;
            li.firstChild.nextSibling.style.textDecoration = 'line-through';
          }
          todoItems.append(li);
          li.addEventListener('click', showMore);
        }
      }
    });
  };
  loadGroupItems();
  // eslint-disable-next-line no-undef
  flatpickr('#due-date', { dateFormat: 'F j, Y' });

  addItemForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const { elements } = e.target;
    const checkedPriority = document.querySelector(
      'input[name="priority"]:checked',
    ).value;

    addGroupItems(
      data,
      groupName,
      elements[0].value,
      elements[1].value,
      checkedPriority,
      elements[5].value,
    );

    todoItems.innerHTML = '';
    loadGroupItems();

    if (addItem.style.display === 'none') {
      addItem.style.display = 'flex';
    } else {
      addItem.style.display = 'none';
    }
    addItemForm.reset();
  });

  document.querySelector('#editItemForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const showItemTitle = document
      .querySelector('#title')
      .innerText.toLowerCase();
    const todoTitle = document
      .querySelector('#header-div h2')
      .innerText.toLowerCase();

    const todoItem = getAllItemData(data, todoTitle, showItemTitle);
    todoItem.date = e.target.elements[0].value;

    const radioBtn = document.querySelector('input[name="priority"]:checked')
      .value;
    todoItem.priority = radioBtn;
    todoItem.desc = e.target.elements[4].value;

    localStorage.setItem('data', JSON.stringify(data));
    todoItems.innerHTML = '';
    loadGroupItems();
    todoShowDiv.style.display = 'none';
  });

  // eslint-disable-next-line func-names
  window.onclick = function (event) {
    if (event.target === addItem) {
      addItem.style.display = 'none';
    } else if (event.target === mainContent) {
      todoShowDiv.style.display = 'none';
    }
  };
};

document.querySelector('.projectdiv form').addEventListener('submit', (e) => {
  e.preventDefault();
  addGroup(data, e.target.elements[0].value);
  projects.innerHTML = '';

  loadGroups();
  projectDiv.style.display = 'none';
  plusIcon.classList.replace('fa-times', 'fa-plus');
  e.target.elements[0].value = '';
});


loadGroups();
