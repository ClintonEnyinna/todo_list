import { element, text } from './MakeElements';
import '../css/todo_item.css';
import '../css/show_todo.css';

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

  const pPriority = element('P');
  const priorityTxt = text(priority);
  pPriority.append(priorityTxt);

  const pDesc = element('P');
  const descTxt = text(desc);
  pDesc.append(descTxt);

  //labels
  const plabelTxt = text('Date');
  const pLabel = element('LABEL');
  pLabel.append(plabelTxt);

  const priorityLabelTxt = text('Priority');
  const priorityLabel = element('LABEL');
  priorityLabel.append(priorityLabelTxt);

  const descLabelTxt = text('Description');
  const descLabel = element('LABEL');
  descLabel.append(descLabelTxt);

  div.append(h4, pLabel, p, priorityLabel, pPriority, descLabel, pDesc);
  div.style.display = 'none';

  return div;
};

export { TodoItem, TodoItemShow };
