// Creat some arrays
const numbers = [100,200,17,4,77,39];

let val;

//get array length
val = numbers.length;

//sorting arrays
val = fruit.sort();
val = numbers.sort();

//use the compare function
val = numbers.sort(function(x,y){
	return x - y;
});

//reverse order
val = numbers.sort(function(x,y){
	return y - x;
});

//find numbers less than 50
function under50(num){
	return num < 50;
}
//this will find the first number in the array under 50
val = numbers.find(under50);