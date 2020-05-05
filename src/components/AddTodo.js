import { element, text } from './MakeElements';
import '../css/addTodo.css'
// import '@fortawesome/fontawesome-free/js/fontawesome'
// import '@fortawesome/fontawesome-free/js/solid'


const addTodoButton = () => {
  const addBtn = element("BUTTON");
  addBtn.setAttribute('id', 'addTodoBtn');
  const icon = element("I")
  icon.setAttribute('class', "fas fa-plus")
  
  addBtn.append(icon);

  return addBtn

};

const addTodoForm = () => {
  const div = element("DIV");
  div.setAttribute("class", "projectdiv")
  div.style.display = "none";
  const form = element("FORM");
  const input = element("INPUT");
  input.setAttribute('placeholder', 'Todo Name...');
  const save = element("BUTTON");
  const buttonName = text("save");
  save.setAttribute('type', 'submit');
  
  save.append(buttonName)


  form.append(input, save);
  div.append(form);

  return div
};

export {addTodoForm, addTodoButton};