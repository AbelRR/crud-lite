$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready expected no error actual: ', $ );

window.streams = {}; 
streams.home = [];
streams.customers = []
	var parsedCustomerData = JSON.parse(localStorage.getItem("customerData"));
streams.orders = []; 
	var parsedOrdersData = JSON.parse(localStorage.getItem("ordersData"));

	
const customers = streams.customers;
const orders = streams.orders; 
const customerForm = document.querySelector('.add-client');
const customerList = document.querySelector('.clientList')
	
const orderForm = document.querySelector('.add-order');
const orderList = document.querySelector('.orderList')	

////////////////////////////////** ADDING CUSTOMERS **////////////////////////////////////////
function addCustomer(ele){
	ele.preventDefault();

	const name = (this.querySelector('[name=clientName]')).value;
	const phoneNumber = (this.querySelector('[name=phoneNumber]')).value;
	const email = (this.querySelector('[name=email]')).value;
	const notes = (this.querySelector('[name=clientNotes]')).value;
	const customer = {name, phoneNumber, email, notes};

	customers.push(customer);
	localStorage.setItem("customerData", JSON.stringify(customers))
	this.reset();
}

customerForm.addEventListener('submit', addCustomer);
/////////////////////////////////////** ADDING ORDERS **//////////////////////////////////////////
function addOrder(ele){
	ele.preventDefault();

	const customerName = (this.querySelector('[name=customerName]')).value;
	const date = (this.querySelector('[name=eventDate]')).value;
	const address = (this.querySelector('[name=address]')).value;
	const tables = (this.querySelector('[name=tables]')).value;
	const chairs = (this.querySelector('[name=chairs]')).value;
	const deliveryTime = (this.querySelector('[name=delivery]')).value;
	const pickupTime = (this.querySelector('[name=pickup]')).value;
	const order = {customerName, date, address, tables, chairs, deliveryTime, pickupTime}

	orders.push(order);
	localStorage.setItem("ordersData", JSON.stringify(orders))
	this.reset();
}

orderForm.addEventListener('submit', addOrder);
////////////////////////////////////////////////////////////////////////////////////////////

function populateClients(itemsArr = [], itemsList){
	itemsArr.forEach(customer => {
		localStorage.setItem("customerData", JSON.stringify(customers))
	});
//	itemsList.innerHTML = itemsArr.map((customer, index) => {
	
//	**ORDER STRING**	return `<li id="order${index}">On ${order.date}, ${order.customerName} will want ${order.tables} tables and ${order.chairs} chairs.<br> Address: ${order.address}...<br> Delivery at: ${order.deliveryTime} || Pickup at: ${order.pickupTime}</label></li>`
//	**CUSTOMER STRING**	return `<li id="customer${index}">Client Name: ${customer.name} || Phone Number: ${customer.phoneNumber} || Email: ${customer.email} || Notes: ${customer.notes}</li> `
//	})
}



});



