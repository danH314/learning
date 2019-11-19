const color = 'red';

// Good to use instead of IF ELSE statements
switch(color){
		case 'red';
			console.log('Color is red');
			break;
		case 'blue';
			console.log('Color is blue');
		  break;
	default:
		console.log('color is not red OR blue');
		break;
}

let day;

switch(new Date().getDay()){
	case 0:
		day = 'Sunday';
		break;
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
}

console.log(`Today is ${day}`);