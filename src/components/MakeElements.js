const element = (element) => {
  const el = document.createElement(element);
  return el;
};

const text = (text) => {
  const txt = document.createTextNode(text);
  return txt;
};

export { element, text };
