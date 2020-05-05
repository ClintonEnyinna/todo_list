import { element, text } from './MakeElements';

const projects = () => {
  const parentDiv = element("DIV");
  const ul = element("UL")
  ul.setAttribute("id", "projects")
  parentDiv.append(ul)

  return parentDiv
  
}

const projectName = (name) => {
  const li = element("LI");
  const liText = text(name);
  li.append(liText)

  return li
}

export { projects, projectName}