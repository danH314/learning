// document.getElementById()

//console.log(document.getElementById('task-title'));

//get things from element
//console.log(document.getElementById('task-title').id);
//document.getElementById('task-title').className;

//const taskTitle = document.getElementById('task-title');


// Change Styles
//taskTitle.style.background = '#333';
// HIDE ELEMENT
//taskTitle.style.display = 'none'; 

// CHANGE CONTENT

//taskTitle.textContent = 'THIS CHANGED';
//taskTitle.innerText = 'Changed again';
//taskTitle.innerHTML = '<span style="color:red">NEW RED Task List</span>';

// document.querySelector()

console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.color = 'blue';

document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'purple';
document.querySelector('li:nth-child(4)').textContent = 'New text ';
document.querySelector('li:nth-child(odd)').style.background = '#ccc';
document.querySelector('li:nth-child(odd)').style.background = '#000';

