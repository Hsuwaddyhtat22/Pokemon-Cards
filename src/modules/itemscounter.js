const countItems = () => {
  const itemCounter = document.getElementById('itemCounter');
  const items = document.querySelectorAll('.item');
<<<<<<< HEAD
=======
  const arrFromSpread = [...items];
  const itemCount = items.length;
>>>>>>> de09f303d07f76760798466e2ea3358ebded167c
  itemCounter.textContent = `Total Cards: ${items.length}`;
};
export default countItems;
