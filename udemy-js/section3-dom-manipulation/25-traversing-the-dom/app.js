let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item');

val = listItem;
val = list;

// GET CHILD NODES - nodes lists
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - ATTRIBUTE (deprecated)
// 3 - text node
// 8 - comment
// 9 - document itself
// 10 - Doctype


// GET CHILDREN element nodes - HTML collection
val = list.children;
val = list.children[1];
val = list.children[1].textContent = 'hello children';
// CHILDREN OF CHILDREN
val = list.children[3].children[0].id = 'buttface';
val = list.children[3].children[0];

val = list.firstChild;
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

// Count all child elements
val = list .childElementCount;


// Get parent node
//const listItem = document.querySelector('li.collection-item');

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// GET next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// GET PREV sibling
//val = listItem.previousSibling;
//val = listItem.previousElementSibling;

console.log(val);
