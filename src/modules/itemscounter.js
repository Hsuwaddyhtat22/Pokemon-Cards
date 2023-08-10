// Count dom elements with class name "item"
const countItems = () => {
  const items = document.getElementsByClassName('item');
  return items.length;
};

export default countItems;
