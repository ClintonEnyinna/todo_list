import { element, text } from './MakeElements';

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

export default TodoItem;
