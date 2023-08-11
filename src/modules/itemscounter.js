const countItems = () => {
  const itemCounter = document.getElementById('itemCounter');
  const items = document.querySelectorAll('.item');
  const arrFromSpread = [...items];
  const itemCount = items.length;
  itemCounter.textContent = `Total Cards: ${items.length}`;
};
export default countItems;
