import { element, text } from './MakeElements';
import '../css/todo_item.css';

const TodoItem = (title, dueDate) => {
  const li = element('LI');
  const checkTodo = element('SPAN');
  const leftDiv = element('DIV');
  const rightDiv = element('DIV');

  const h5 = element('H5');
  const h5Text = text(title);
  h5.append(h5Text);

  const p = element('P');
  const pTxt = text(dueDate);
  p.append(pTxt);

  leftDiv.append(h5, p);

  const span = element('SPAN');
  rightDiv.append(span);

  li.append(checkTodo, leftDiv, rightDiv);

  return li;
};

const TodoItemShow = (title, dueDate, priority, desc) => {
  const div = element('DIV');
  div.setAttribute('id', 'show-content');
  const h4 = element('H4');
  const h4Txt = text(title);
  h4.append(h4Txt);

  const p = element('P');
  const pTxt = text(dueDate);
  p.append(pTxt);

  const divPriority = element('DIV');
  const priorityTxt = text(priority);
  divPriority.append(priorityTxt);

  const pDesc = element('P');
  const descTxt = text(desc);
  pDesc.append(descTxt);

  div.append(h4, p, divPriority, pDesc);
  div.style.display = 'none';

  return div;
};

export { TodoItem, TodoItemShow };
