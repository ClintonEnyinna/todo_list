import { element } from './MakeElements';
import '../css/addTodo.css';

const addTodoButton = () => {
  const addBtn = element('BUTTON');
  addBtn.setAttribute('id', 'addTodoBtn');
  const icon = element('I');
  icon.setAttribute('class', 'fas fa-plus');

  addBtn.append(icon);

  return addBtn;
};

const addTodoForm = () => {
  const div = element('DIV');
  div.setAttribute('class', 'projectdiv');
  div.style.display = 'none';
  const form = element('FORM');
  const input = element('INPUT');
  input.setAttribute('placeholder', 'new activity...');

  form.append(input);
  div.append(form);

  return div;
};

const AddTodo = () => {
  const addTodo = element('DIV');

  addTodo.append(addTodoForm(), addTodoButton());
  return addTodo;
};

export default AddTodo;
