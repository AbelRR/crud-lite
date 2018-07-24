$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready expected no error actual: ', $ );

const customerForm = document.querySelector('.add-client');
	const customers = []; 	
	const clientList = document.querySelector('.clients')
	
	
const orderForm = document.querySelector('.add-order');
	const orders = []; 
	const orderList = document.querySelector('.orders')	

//** ADDING CUSTOMERS **//
function addCustomer(ele){
	ele.preventDefault();

	const clientName = (this.querySelector('[name=clientName]')).value;
	const phoneNumber = (this.querySelector('[name=phoneNumber]')).value;
	const email = (this.querySelector('[name=email]')).value;
	const notes = (this.querySelector('[name=clientNotes]')).value;
	const customer = {
		clientName, 
		phoneNumber, 
		email, 
		notes, 
		rentalHistory: []
	}

	customers.push(customer);
	populateClients(customers, clientList);
	localStorage.setItem(name, JSON.stringify(customer))
		
	this.reset();
}

customerForm.addEventListener('submit', addCustomer);
	
//** ADDING ORDERS **//
function addOrder(ele){
	ele.preventDefault();

	const eventClientName = (this.querySelector('[name=eventClientName]')).value;
	const date = (this.querySelector('[name=eventDate]')).value;
	const address = (this.querySelector('[name=address]')).value;
	const tables = (this.querySelector('[name=tables]')).value;
	const chairs = (this.querySelector('[name=chairs]')).value;
	const eventNotes = (this.querySelector('[name=eventNotes]')).value;
	const order = {
		eventClientName, 
		date, 
		address,
		tables, 
		chairs,
		eventNotes
	}

	orders.push(order);
	populateOrders(orders, orderList);
	localStorage.setItem(eventClientName+", "+date, JSON.stringify(order))
	
	this.reset();
}

orderForm.addEventListener('submit', addOrder);
	

function populateOrders(itemsArr = [], itemsList){
	itemsList.innerHTML = itemsArr.map((order, index) => {
		return `
			<li>On ${order.date}, ${order.eventClientName} will want ${order.tables} tables and ${order.chairs} chairs at ${order.address}... Things to note: ${order.eventNotes}</label></li> 
		`
	})
}
function populateClients(itemsArr = [], itemsList){
	itemsList.innerHTML = itemsArr.map((customer, index) => {
		return `
			<li>Client Name: ${customer.clientName} || Phone Number: ${customer.phoneNumber} || Email: ${customer.email} || Rental History: ${customer.rentalHistory}</li> 
		`
	})
}

//
////attach event listener to buttons(input)
////create function stub for read/write/delete
//$('.store-button').on('click', function(event) {
//	// event.preventDefault();
//	// event.stopPropagation(); //stops event from leaking into other listeners
//	// console.log(event.target.classList);
//	let titleValue = $('.input-title-field').val();
//    let codeValue = $('.input-code-field').val();
//
//	localStorage.setItem('titleValue', titleValue);
//	localStorage.setItem('codeValue', codeValue);
//
//    
//});
//
//$('.get-button').on('click', function(event) {
//	// localStorage.getItem('booya');
//	let titleValue = localStorage.getItem('titleValue');
//	let codeValue = localStorage.getItem('codeValue'); 
//	$('.debug').html(`<p>${titleValue} ${codeValue}</p>`);
//});
//
//$('.delete-button').on('click', function(event) {
//	console.log(localStorage.clear()); 
//});
//


});



