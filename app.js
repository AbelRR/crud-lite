$(document).ready(function() {
console.log('+++ filename: app.js: jquery.ready expected no error actual: ', $ );

window.streams = {}; 
streams.home = [];
streams.customers = []
streams.orders = [];
	
// customers
const customers = streams.customers;
const customerForm = document.querySelector('.addClient');
const customerList = document.querySelector('.clientList');
const parsedCustomerData = JSON.parse(localStorage.getItem("customerData"));
	
// orders
const orders = streams.orders; 
const orderForm = document.querySelector('.add-order');
const orderList = document.querySelector('.orderList')	
const parsedOrderData = JSON.parse(localStorage.getItem("orderData"));

////////////////////////////////** ADDING CUSTOMERS **////////////////////////////////////////
function addCustomer(ele){
	ele.preventDefault();

	const name = (this.querySelector('[name=clientName]')).value;
	const phoneNumber = (this.querySelector('[name=phoneNumber]')).value;
	const email = (this.querySelector('[name=email]')).value;
	const notes = (this.querySelector('[name=clientNotes]')).value;
	const customer = {name, phoneNumber, email, notes};

	customers.push(customer);
	localStorage.setItem("customerData", JSON.stringify(customers));
	(function (customers = [], customerList) {
	// update customers and orders 
		customerList.innerHTML = customers.map((customer) => {
			return `<li>Client Name: ${customer.name} || Phone Number: ${customer.phoneNumber} || Email: ${customer.email} || Notes: ${customer.notes}</li>`
		})
	})(customers,customerList);
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
	localStorage.setItem("orderData", JSON.stringify(orders));
	(function (orders = [], ordersList) {
	// update customers and orders 
		ordersList.innerHTML = orders.map((order) => {
			return `<li>On ${order.date}, ${order.customerName} will want ${order.tables} tables and ${order.chairs} chairs.<br> Address: ${order.address}...<br> Delivery at: ${order.deliveryTime} || Pickup at: ${order.pickupTime}</li>`
		})
	})(orders,orderList);
	this.reset();
}

orderForm.addEventListener('submit', addOrder);
////////////////////////////////////////////////////////////////////////////////////////////



//function populateData(itemsArr = [], itemsList, iterator){
////	itemsArr.forEach(customer => {
////		localStorage.setItem("customerData", JSON.stringify(customers))
////	});
//	itemsList.innerHTML = iterator(itemsArr);
//}
//	
//	populateData(customers, customerList, function(customers){
//		customerList.innerHTML = customers.map((customer) => {
//			return `<li>Client Name: ${customer.name} || Phone Number: ${customer.phoneNumber} || Email: ${customer.email} || Notes: ${customer.notes}</li> `
//		})
//	})
//	
//	populateData(orders, orderList, function(orders){
//		orderList.innerHTML = orders.map((order, index) => {
//			return `<li id="order${index}">On ${order.date}, ${order.customerName} will want ${order.tables} tables and ${order.chairs} chairs.<br> Address: ${order.address}...<br> Delivery at: ${order.deliveryTime} || Pickup at: ${order.pickupTime}</label></li>`
//		});
//	})


		


});



