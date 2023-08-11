const countItems = () => {
  const itemCounter = document.getElementById('itemCounter');
  const items = document.querySelectorAll('.item');
  itemCounter.textContent = `Total Cards: ${items.length}`;
};
export default countItems;
