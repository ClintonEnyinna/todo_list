import { element, text } from './MakeElements';

const todo = (todo) => {
  const h2 = element("H2");
  const h2Text = text(todo);

  h2.append(h2Text)

  return h2
}

export {todo}