const countItems = () => {
const items = document.querySelectorAll('.item');
const arrFromSpread = [...items];
console.log(arrFromSpread);
const itemCount = items.length;
console.log(items);
console.log(`Total number of elements with class 'item': ${itemCount}`);
};
export default countItems;
