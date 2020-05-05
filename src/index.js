import Header from "./components/Header";
import Main from "./components/Main";
import { projectName } from "./components/Todos";
import {todo} from "./components/Todo"
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
  mainContent.innerHTML = "";
  mainContent.appendChild(todo(e.target.innerText))
}

document.querySelector(".projectdiv form").addEventListener("submit", (e) => {
  e.preventDefault();
  const projects = document.getElementById("projects");
  const li = projectName(e.target.elements[0].value)
  projects.append(li);
  li.addEventListener("click", openTodo)

  projectDiv.style.display = "none";
  plusIcon.classList.replace("fa-times", "fa-plus");
  e.target.elements[0].value = "";
});
