//object literals
const person = {
	firstName: 'Dan'
}

let val;
//shows as object
val = person;
//shows as firstName
val = person.firstName;
val = person['firstName'];


document.body.innerHTML = val;