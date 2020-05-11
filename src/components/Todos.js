import { element, text } from './MakeElements';

const projects = () => {
  const parentDiv = element('DIV');
  const ul = element('UL');
  ul.setAttribute('id', 'projects');
  parentDiv.append(ul);

  return parentDiv;
};

const projectName = (name, type = 'dynamic') => {
  const li = element('LI');
  const icon = element('I');
  const span = element('SPAN');
  span.classList.add('subject');
  const liText = text(name);
  span.append(liText);
  if (type !== 'fixed') {
    icon.setAttribute('class', 'fas fa-list-ul');
    const delIcon = element('I');
    delIcon.classList.add('fas', 'fa-trash-alt', 'delIcon');
    li.append(icon, span, delIcon);
  } else {
    icon.setAttribute('class', 'fas fa-list-ul');
    li.append(icon, span);
  }
  return li;
};

export { projects, projectName };
