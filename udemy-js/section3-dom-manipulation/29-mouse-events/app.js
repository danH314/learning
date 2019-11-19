const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// Click event
//clearBtn.addEventListener('click',runEvent);
//double click event
//clearBtn.addeventListener('dblclick', runEvent);
//Mouse
//clearBtn.addEventListener('mousedown', runEvent);
//clearBtn.addEventListener('mouseup', runEvent);
//clearBtn.addEventListener('mouseenter', runEvent);
//clearBtn.addEventListener('mouseleave', runEvent);
//clearBtn.addEventListener('mouseover', runEvent);
//clearBtn.addEventListener('mouseout', runEvent);

//Mousemove
card.addEventListener('mousemove', runEvent);





// event handler
function runEvent(e){
	console.log(`EVENT TYPE: ${e.type}`);
	
	heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
	
	document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}