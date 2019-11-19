const name = 'Dan';
const age = 37;
const job = 'New Balance';
const city = 'Saint Louis';
let html;

//Without template strings (es5)
html = '<ul>' + 
	'<li>Name: ' + name + '</li>' +
	'<li>Age: ' + age + '</li>' +
	'<li>Job: ' + job + '</li>' +
	'<li>City: '+ city + '</li>' +
	'</ul>';

function hello(){
	return "hello";
}

//With template literals (strings) (es6)
//last LI is conditions, you can do age {IF AGE IS GREATER THAN 30 THEN "OVER 30" ELSE (:) "UNDER 30"}
html = `
  <ul>
		<li>Name: ${name}</li>
		<li>Age: ${age}</li>
		<li>Job: ${job}</li>
		<li>City: ${city}</li>
		<li>${2+4}</li>
		<li>${hello()}</li>
		<li>${age > 30 ? 'Over 30' : 'Under 30'}
  </ul>		
`;


document.body.innerHTML = html;