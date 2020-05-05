import { element, text } from './MakeElements';
import AddTodoForm from './AddTodoItem';
import '../css/todo.css';

const todo = (todo) => {
  const headerDiv = element('DIV');
  const todoItemBtn = element('BUTTON');
  todoItemBtn.setAttribute('id', 'add-itm-btn');
  todoItemBtn.innerHTML = 'New';
  const h2 = element('H2');
  const h2Text = text(todo);
  const ul = element('UL');
  ul.setAttribute('id', 'todo-items');

  h2.append(h2Text);

  headerDiv.append(h2, todoItemBtn, ul, AddTodoForm());

  return headerDiv;
};

export { todo };
