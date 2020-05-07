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

const TodoItemShow = () => {
  const div = element('DIV');
  div.setAttribute('id', 'show-content');
  const h4 = element('H4');
  h4.setAttribute('id','title')
  

  const p = element('P');
  p.setAttribute("id", "due-date")
 

  const pPriority = element('P');
  pPriority.setAttribute("id", "priority")
 

  const pDesc = element('P');
  pDesc.setAttribute("id", "desc")
  

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
