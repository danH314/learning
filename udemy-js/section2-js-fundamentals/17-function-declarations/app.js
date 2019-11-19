//FUNCTION DECLARATIONS
//ES6 make default values for param 
function greet(firstName = 'Dan', lastName = 'Hoff'){
//ES5	if(typeof firstName === 'undefined'){firstName = 'John'}
//ES5	if(typeof lastName === 'undefined'){lastName = 'Doe'}
//	console.log('Hello');
	return 'Hello ' + firstName + ' ' + lastName;
}

//console.log(greet());


//FUNCTION EXPRESSIONS
// param can be defaulted ex: (x = 3)
//const square = function(x){
//	return x*x;
//};
//
//console.log(square(8));

//IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs
//
//(function(){
//	console.log('IFFE ran..');
//})();

//(function(name){
//	console.log('Hello '+ name);
//})('Dan');

//PROPERTY METHODS

const todo = {
	add: function(){
		console.log('Add todo...');
	},
	edit: function(id){
		console.log(`Edit todo ${id}`);
	}
	
}

todo.add();
todo.edit(22);
