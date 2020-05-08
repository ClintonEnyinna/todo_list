import { element, text } from './MakeElements';
import AddTodoForm from './AddTodoItem';
import '../css/todo.css';

const todo = (todo) => {
  const div = element('DIV');
  const headerDiv = element('DIV');
  headerDiv.setAttribute('id', 'header-div');
  const todoItemBtn = element('BUTTON');
  todoItemBtn.setAttribute('id', 'add-itm-btn');
  const i = element('I');
  todoItemBtn.appendChild(i);
  i.classList.add('fas', 'fa-plus');
  const h2 = element('H2');
  const h2Text = text(todo);
  const ul = element('UL');
  ul.setAttribute('id', 'todo-items');

  h2.append(h2Text);

  headerDiv.append(h2, todoItemBtn);

  div.append(headerDiv, ul, AddTodoForm());

  return div;
};

export default todo;
