import { element, text } from './MakeElements';
import '../css/add_todo_item.css';

const addTodoForm = () => {
  const div = element('DIV');
  div.setAttribute('class', 'add-item');
  const form = element('FORM');
  const inputTitle = element('INPUT');
  inputTitle.setAttribute('placeholder', 'Title');
  const inputDate = element('INPUT');
  inputDate.setAttribute('placeholder', 'Due date');
  const priorityDiv = element('DIV');
  const highLabel = element('LABEL');
  highLabel.innerText = 'High';
  const lowLabel = element('LABEL');
  lowLabel.innerText = 'Low';
  const mediumlabel = element('LABEL');
  mediumlabel.innerText = 'Medium';

  const highCheck = element('INPUT');
  highCheck.setAttribute('type', 'radio');
  highCheck.setAttribute('name', 'priority');

  const mediumCheck = element('INPUT');
  mediumCheck.setAttribute('type', 'radio');
  mediumCheck.setAttribute('name', 'priority');

  const lowCheck = element('INPUT');
  lowCheck.setAttribute('type', 'radio');
  lowCheck.setAttribute('name', 'priority');

  priorityDiv.append(
    highLabel,
    highCheck,
    mediumlabel,
    mediumCheck,
    lowLabel,
    lowCheck
  );
  const inputDesc = element('INPUT');
  inputDesc.setAttribute('placeholder', 'Description');

  const saveBtn = element('BUTTON');
  saveBtn.innerText = 'Create';

  form.append(inputTitle, inputDate, priorityDiv, inputDesc, saveBtn);
  div.append(form);
  div.classList.add('d-none');

  return div;
};

export default addTodoForm;
