//THIS SCRIPT adds tasks to a ul after the "add task" button is submitted.
//The tasks are printed to the ul

//Define UI Vars
// form with id of task-form
const form = document.querySelector('#task-form');
// ul with class of collection
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
//label tag with id of filter, where tasks will print
const filter = document.querySelector('#filter');
//input field name with id of task
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

//Load all event listeners
function loadEventListeners() {
	// DOM LOAD EVENT
	document.addEventListener('DOMContentLoaded', getTasks);
	// Add task event
	form.addEventListener('submit',addTask);
	// remove task event
	taskList.addEventListener('click',removeTask);
	// clear task event
	clearBtn.addEventListener('click',clearTasks);
	//filter tasks event
	filter.addEventListener('keyup',filterTasks);
}

// GET TASKS FROM LS
function getTasks() {
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	
	tasks.forEach(function(task){
		// Create li element
		const li = document.createElement('li');
		// Add class
		li.className = 'collection-item';
		// Create text node and append to li
		li.appendChild(document.createTextNode(task));
		// Create new link element
		const link = document.createElement('a');
		// Add class
		link.className = 'delete-item secondary-content';
		// Add icon html
		link.innerHTML = '<i class="fa fa-remove"></i>';
		//Append the link to li
		li.appendChild(link);

		//Append li to ul

		taskList.appendChild(li);
	});
}

// Add Task
function addTask(e){
	//if new task value is empty box will pop up with "add a task"
	if(taskInput.value === ''){
		alert('Add a task');
	}
	
	// Create li element
	const li = document.createElement('li');
	// Add class
	li.className = 'collection-item';
	// Create text node and append to li
	li.appendChild(document.createTextNode(taskInput.value));
	// Create new link element
	const link = document.createElement('a');
	// Add class
	link.className = 'delete-item secondary-content';
	// Add icon html
	link.innerHTML = '<i class="fa fa-remove"></i>';
	//Append the link to li
	li.appendChild(link);
	
	//Append li to ul
	
	taskList.appendChild(li);
	
	
	//STORE IN LOCAL STORAGE
	storeTaskInLocalStorage(taskInput.value);
	
	
	//Clear input
	taskInput.value = '';
	e.preventDefault();
}

//store task
function storeTaskInLocalStorage(task) {
	let tasks;
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	
	tasks.push(task);
	
	localStorage.setItem('tasks', JSON.stringify(tasks));
}


//REMOVE TASK
function removeTask(e){
	if(e.target.parentElement.classList.contains('delete-item')){
		if(confirm('Are you sure?')){
		  e.target.parentElement.parentElement.remove();
			
			// remove for LS
			removeTaskFromLocalStorage(e.target.parentElement.parentElement);
	 	}	
	}
}

// REMOVE from Local Storage (LS)
function removeTaskFromLocalStorage(taskItem) {
	if(localStorage.getItem('tasks') === null){
		tasks = [];
	} else {
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	
	tasks.forEach(function(task, index){
		if(taskItem.textContent === task) {
			tasks.splice(index, 1);
	  }
	});
	
	localStorage.setItem('tasks', JSON.stringify(tasks));
}

// clear tasks
function clearTasks() {
	//taskList.innerHTML = '';
	
	//FASTER -- removechild
	while(taskList.firstChild) {
		taskList.removeChild(taskList.firstChild);
	}
	
	//clear from LS
	clearTasksFromLocalStorage();
	
}

// clear tasks from LS
function clearTasksFromLocalStorage() {
	localStorage.clear();
}

// filter tasks
function filterTasks(e) {
	const text = e.target.value.toLowerCase();
	
	document.querySelectorAll('.collection-item').forEach(function(task){
		const item = task.firstChild.textContent;
		if(item.toLowerCase().indexOf(text) != -1){
		  task.style.display = 'block';
		} else {
			 task.style.display = 'none';
	  }
	});
}