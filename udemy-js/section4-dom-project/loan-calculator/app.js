// list for submit event
document.getElementById('loan-form').addEventListener('submit', calculateResults);


// calculate results
function calculateResults(e) {
	console.log('Calculating...');
	//UI VARS
	const amount = document.getElementById('amount');
	const interest = document.getElementById('interest');
	const years = document.getElementById('years');
	const monthlyPayment = document.getElementById('monthly-payment');
	const totalPayment = document.getElementById('total-payment');
	const totalinterest = document.getElementById('total-interest');
	//parseFLoat() will turn value into decimal
	const principal = parseFloat(amount.value);
	//equations looked up on google
	const calculatedInterest = parseFloat(interest.value) / 100 / 12;
	const calculatedPayments = parseFloat(years.value) * 12;
	
	//compute monthly payments
	const x = Math.pow(1 + calculatedInterest, calculatedPayments);
	const monthly = (principal * x * calculateInterest)/(x-1);
	
	if(isFinite(monthly)){
	  monthlyPayment.value = monthly.toFixed(2);
		totalPayment.value = (monthly * calculatedPayments).toFixed(2);
		totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
	} else {
	  console.log('please check the numbers');
	}
	
	e.preventDefault();
}