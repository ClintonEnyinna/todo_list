import Header from './components/Header';
import Main from './components/Main';
import './css/style.css';

const page = document.querySelector('#content');

page.append(Header(), Main());
