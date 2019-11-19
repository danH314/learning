// Replace element


//create element
const newHeading = document.createElement('h2');
//add id
newHeading.id = 'task-title';
//add new textnode
newHeading.appendChild(document.createTextNode('new Task List'));


//get the old heading
const oldHeading = document.getElementById('task-title');
// Parent
const cardAction = document.querySelector('.card-action');
//replace
cardAction.replaceChild(newHeading, oldHeading);


// REMOVE ELEMENT
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove;

// Remove Child
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;
// CLASSES
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');


// ATTRIBUTES
val = link.getAttribute('href');
val = link.setAttribute('href', 'http://google.com');
link.setAttribute('title', 'mr.title');
val = link;
console.log(val);