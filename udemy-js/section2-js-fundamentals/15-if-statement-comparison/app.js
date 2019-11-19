const id = 100;

// EQUAL TO
if(id==100){
	 console.log('correct');
}

// NOT EQUAL TO !=

//EQUAL TO VALUE & TYPE
//if(id === '100'){
//	console.log('correct');
//} else {
//	console.log('incorrect');
//}

//TEST IF UNDEFINED
//if(typeof !== 'undefined'){
//	console.log('The ID is ${id}');
//} else {
//	console.log('no id');
//}

//AND &&
//if(age<16 && age <= 19)
//OR ||
//if (age < 16 || age > 67)

//TERNARY OPERATOR
//? (then) : (else) 
console.log(id === 100 ? 'correct' : 'incorrect');

// WITHOUT BRACES
// POSSIBLE BUT NOT RECOMMENDED
if(id === 100)
	console.log('CORRECT');
else
	console.log('incorrect');
