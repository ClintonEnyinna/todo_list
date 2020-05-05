import { element, text } from './MakeElements';
import {addTodoForm, addTodoButton }from './AddTodo';
import {projects }from './Todos'
import '../css/main.css';

const Main = () => {
  const main = element('MAIN');
  const aside = element('ASIDE');
  const mainDiv = element('DIV');
  mainDiv.setAttribute("id", "maincontent")

  aside.append(addTodoButton(), addTodoForm(), projects());
  





  main.append(aside, mainDiv);

  return main;
};

export default Main;
