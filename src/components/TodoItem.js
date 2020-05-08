import { element, text } from './MakeElements';
import '../css/todo_item.css';
import '../css/show_todo.css';

const TodoItem = (title, dueDate) => {
  const li = element('LI');
  const checkTodo = element('INPUT');
  checkTodo.setAttribute('type', 'checkbox');
  const leftDiv = element('DIV');
  const rightDiv = element('DIV');

  const h5 = element('H5');
  const h5Text = text(title);
  h5.append(h5Text);

  const p = element('P');
  const pTxt = text(dueDate);
  p.append(pTxt);

  leftDiv.append(h5, p);

  const delIcon = element('I');
  delIcon.classList.add('fas', 'fa-trash-alt', 'del-icon');
  rightDiv.append(delIcon);

  li.append(checkTodo, leftDiv, rightDiv);

  return li;
};

const TodoItemShow = () => {
  const div = element('DIV');
  const form = element('FORM');
  form.setAttribute('id', 'editItemForm');

  div.setAttribute('id', 'show-content');
  const h4 = element('H4');
  h4.setAttribute('id', 'title');

  const dueDate = element('INPUT');
  dueDate.setAttribute('type', 'text');
  dueDate.setAttribute('id', 'due-date');

  const radioDiv = element('DIV');

  const highCheck = element('INPUT');
  highCheck.setAttribute('type', 'radio');
  highCheck.setAttribute('value', 'high');
  highCheck.setAttribute('name', 'priority');
  highCheck.setAttribute('id', 'high');

  const mediumCheck = element('INPUT');
  mediumCheck.setAttribute('type', 'radio');
  mediumCheck.setAttribute('value', 'medium');
  mediumCheck.setAttribute('name', 'priority');
  mediumCheck.setAttribute('id', 'medium');

  const lowCheck = element('INPUT');
  lowCheck.setAttribute('type', 'radio');
  lowCheck.setAttribute('value', 'low');
  lowCheck.setAttribute('name', 'priority');
  lowCheck.setAttribute('id', 'low');

  const highLabel = element('SPAN');
  highLabel.innerText = 'High';
  const lowLabel = element('SPAN');
  lowLabel.innerText = 'Low';
  const mediumlabel = element('SPAN');
  mediumlabel.innerText = 'Medium';

  radioDiv.append(
    highLabel,
    highCheck,
    mediumlabel,
    mediumCheck,
    lowLabel,
    lowCheck,
  );

  const pDesc = element('TEXTAREA');
  // pDesc.setAttribute('type', 'text');
  pDesc.setAttribute('id', 'desc');

  const submitBtn = element('BUTTON');
  submitBtn.innerText = 'Edit';

  // labels
  const plabelTxt = text('Date');
  const pLabel = element('LABEL');
  pLabel.append(plabelTxt);

  const priorityLabelTxt = text('Priority');
  const priorityLabel = element('LABEL');
  priorityLabel.append(priorityLabelTxt);

  const descLabelTxt = text('Description');
  const descLabel = element('LABEL');
  descLabel.append(descLabelTxt);

  form.append(
    pLabel,
    dueDate,
    priorityLabel,
    radioDiv,
    descLabel,
    pDesc,
    submitBtn,
  );
  div.append(h4, form);

  div.style.display = 'none';

  return div;
};

export { TodoItem, TodoItemShow };
