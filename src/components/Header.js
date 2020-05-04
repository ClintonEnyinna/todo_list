import { element, text } from './MakeElements';
import '../css/header.css';

const Header = () => {
  const header = element('HEADER');
  const nav = element('NAV');
  const div1 = element('DIV');
  const div2 = element('DIV');
  const p = element('P');
  const pTxt = text('2-do');
  const input = element('INPUT');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Search...');

  p.appendChild(pTxt);
  div1.appendChild(p);
  div2.appendChild(input);

  nav.append(div1, div2);

  header.append(nav);
  return header;
};

export default Header;
