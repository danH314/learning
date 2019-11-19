// FOR LOOP - know how many times

//for(let i = 0; i < 10; i++){
//	if(i === 2){
//	  console.log('2 is my fav');
//		//continue will continue to the next operation
//		continue;
//	}
//	
//	if(i === 5){
//		console.log('Stop the madness');
//		//break will stop the loop when the condition is met
//		break;
//	}
//
//  console.log('number ' + i);
//}


// WHILE LOOP - when you are unclear of the amount of times it will run

//let i = 0;
//
//while(i < 10){
//	console.log('Number ' + i);
//	i++;
//}

// DO WHILE LOOP - THE DO will always run once

//let i = 0;
//
//do {
//	console.log('Number ' + i);
//	i++;
//}
//
//while(i < 10);

// ARRAY LOOPING

const cars = ['ford', 'chevy', 'honda', 'toyota'];
//
//for(let i = 0; i < cars.length; i++){
//	console.log(cars[i]);
//}

// FOR EACH ARRAY LOOP
// preferred method
// 
// cars.forEach(function(car){
//	console.log(car);
// });
//
// cars.forEach(function(car, index, array){
//	console.log(`${index} : ${car}`);
//  console.log(array);
//});

// MAP

//const users = [
//	{id:1, name: 'jon'},
//	{id: 2, name: 'connor'},
//	{id: 3, name: 'lins'},
//	{id: 4, name: 'sara'}
//];
//
//const ids = users.map(function(user){
//	return user.id;
//});
//
//console.log(ids);

// FOR IN LOOP

const user = {
	firstName: 'dan',
	lastName: 'hoff',
	age: 40
}

for(let x in user){
	console.log(`${x} : ${user[x]}`);
}