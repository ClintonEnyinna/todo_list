import { element, text } from './MakeElements';
import '../css/add_todo_item.css';

const addTodoForm = () => {
  const div = element('DIV');
  div.setAttribute('class', 'add-item');
  const form = element('FORM');
  const inputTitle = element('INPUT');
  inputTitle.setAttribute('placeholder', 'Title');
  inputTitle.setAttribute('type', 'text');

  const inputDate = element('INPUT');
  inputDate.setAttribute('placeholder', 'Due date');
  inputDate.setAttribute('type', 'text');
  inputDate.setAttribute('id', 'date');

  const priorityDiv = element('DIV');
  const highLabel = element('LABEL');
  highLabel.innerText = 'High';
  const lowLabel = element('LABEL');
  lowLabel.innerText = 'Low';
  const mediumlabel = element('LABEL');
  mediumlabel.innerText = 'Medium';

  const highCheck = element('INPUT');
  highCheck.setAttribute('type', 'radio');
  highCheck.setAttribute('value', 'high');
  highCheck.setAttribute('name', 'priority');

  const mediumCheck = element('INPUT');
  mediumCheck.setAttribute('type', 'radio');
  mediumCheck.setAttribute('value', 'medium');
  mediumCheck.setAttribute('name', 'priority');

  const lowCheck = element('INPUT');
  lowCheck.setAttribute('type', 'radio');
  lowCheck.setAttribute('value', 'low');
  lowCheck.setAttribute('name', 'priority');

  priorityDiv.append(
    highLabel,
    highCheck,
    mediumlabel,
    mediumCheck,
    lowLabel,
    lowCheck
  );
  const inputDesc = element('TEXTAREA');
  inputDesc.setAttribute('placeholder', 'Description');

  const saveBtn = element('BUTTON');
  saveBtn.innerText = 'Create';

  form.append(inputTitle, inputDate, priorityDiv, inputDesc, saveBtn);
  div.append(form);
  div.style.display = 'none';

  return div;
};

export default addTodoForm;
