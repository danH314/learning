const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

//run after form is submitted to clear out input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

//keydown/up
//taskInput.addEventListener('keydown', runEvent);
//taskInput.addEventListener('keyup', runEvent);
//taskInput.addEventListener('keypress', runEvent);

// FOCUS
//taskInput.addEventListener('focus',runEvent);
// BLUR
//taskInput.addEventListener('blur', runEvent);
// CUT
//taskInput.addEventListener('cut', runEvent);
// PASTE
//taskInput.addEventListener('paste', runEvent);
//Input
//taskInput.addEventListener('input', runEvent);
//CHANGE
select.addEventListener('change', runEvent);

function runEvent(e){
	console.log(`Event type: ${e.type}`);
	
	console.log(e.target.value);
	
//	heading.innerText = e.target.value;
	//get input value
//	console.log(taskInput.value);
//	
//	e.preventDefault(); //use when you use a submit event
}