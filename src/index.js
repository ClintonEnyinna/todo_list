import Header from "./components/Header";
import Main from "./components/Main";
import { projectName } from "./components/Todos";
import { todo } from "./components/Todo";
import { TodoItem, TodoItemShow } from "./components/TodoItem";
import {
  data,
  getAllItemData,
  getGroupItems,
  getGroup,
  addGroup,
  addGroupItems,
} from "./components/data";
// import flatpickr from 'flatpickr';
import "./css/style.css";

const page = document.querySelector("#content");

page.append(Header(), Main());

const projectBtn = document.getElementById("addTodoBtn");

const projectDiv = document.querySelector(".projectdiv");

const plusIcon = document.querySelector(".fas");
projectBtn.addEventListener("click", (e) => {
  if (projectDiv.style.display === "none") {
    projectDiv.style.display = "block";
    plusIcon.classList.replace("fa-plus", "fa-times");
  } else {
    projectDiv.style.display = "none";
    plusIcon.classList.replace("fa-times", "fa-plus");
  }
});

const openTodo = (e) => {
  const mainContent = document.querySelector("#maincontent");
  const todoShowDiv = document.querySelector("#show-content");
  mainContent.innerHTML = "";
  mainContent.appendChild(todo(e.target.innerText));

  const addTodoItmBtn = document.querySelector("#add-itm-btn");
  const addItem = document.querySelector(".add-item");

  addTodoItmBtn.addEventListener("click", () => {
    if (addItem.style.display === "none") {
      addItem.style.display = "flex";
    } else {
      addItem.style.display = "none";
    }
  });

  flatpickr("#date", { dateFormat: "F j, Y" });

  const addItemForm = document.querySelector(".add-item form");
  const groupName = document
    .querySelector("#header-div h2")
    .innerHTML.toLowerCase();
  const todoItems = document.querySelector("#todo-items");

  let li;

  const loadGroupItems = () => {
    const showMore = (e) => {
      const itemTitle = e.currentTarget.children[1].children[0].innerHTML;
      const itemData = getAllItemData(data, groupName, itemTitle);
      document.querySelector("#title").innerText = itemData.title;
      document.querySelector("#due-date").innerText = itemData.date;
      document.querySelector("#priority").innerText = itemData.priority;
      document.querySelector("#desc").innerText = itemData.desc;
      
      if (todoShowDiv.style.display === "none") {
        todoShowDiv.style.display = "block";
      } else {
        todoShowDiv.style.display = "none";
      }
    };
    const groupItems = getGroupItems(data, groupName);
    for (let index = 0; index < groupItems.items.length; index++) {
      const element = groupItems.items[index];
      li = TodoItem(element.title, element.date);
      todoItems.append(li);
      li.addEventListener("click", showMore);
    }
  };
  loadGroupItems();

  addItemForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let elements = e.target.elements;

    const checkedPriority = document.querySelector(
      'input[name="priority"]:checked'
    ).value;

    addGroupItems(
      data,
      groupName,
      elements[0].value,
      elements[1].value,
      checkedPriority,
      elements[5].value
    );

    todoItems.innerHTML = "";
    loadGroupItems();

    if (addItem.style.display === "none") {
      addItem.style.display = "flex";
    } else {
      addItem.style.display = "none";
    }
    addItemForm.reset();
  });
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == addItem) {
      addItem.style.display = "none";
    }else if (event.target == mainContent){
      todoShowDiv.style.display = "none";
    }
  };
};

document.querySelector(".projectdiv form").addEventListener("submit", (e) => {
  e.preventDefault();
  addGroup(data, e.target.elements[0].value);
  projects.innerHTML = "";

  loadGroups();
  projectDiv.style.display = "none";
  plusIcon.classList.replace("fa-times", "fa-plus");
  e.target.elements[0].value = "";
});

const projects = document.getElementById("projects");

const loadGroups = () => {
  for (let index = 0; index < data.length; index++) {
    const element = data[index].group;
    const li = projectName(element);
    projects.append(li);
    li.addEventListener("click", openTodo);
  }
};
loadGroups();
