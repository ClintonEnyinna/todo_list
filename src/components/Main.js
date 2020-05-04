import { element, text } from './MakeElements';
import '../css/main.css';

const Main = () => {
  const main = element('MAIN');
  const aside = element('ASIDE');
  const div = element('DIV');

  main.append(aside, div);

  return main;
};

export default Main;
