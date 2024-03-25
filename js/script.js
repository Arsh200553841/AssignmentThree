// Set student information on the page
document.getElementById('student-info').innerText =  "Name: Arshpreet Singh Guray, Student ID: 200553841";

// Add event listener to the order button
document.getElementById('order-btn').addEventListener('click', function() {
    // Get form values
    var name = document.getElementById('name').value; // Get name input value
    var address = document.getElementById('address').value; // Get address input value
    var email = document.getElementById('email').value; // Get email input value
    var delivery = document.getElementById('delivery').checked; // Check if delivery option is selected
    var deliveryTime = document.getElementById('delivery-time').value; // Get delivery time input value
    var size = document.getElementById('size').value; // Get pizza size input value
    var toppings = document.getElementById('toppings').value; // Get pizza toppings input value
    var quantity = document.getElementById('quantity').value; // Get quantity input value

    // Create Pizza object with the provided information
    var pizza = new Pizza(name, address, email, delivery, deliveryTime, size, toppings, quantity);

    // Output pizza description on the page
    document.getElementById('pizza-description').innerHTML = pizza.getDescription();
});

// Define the Pizza class
class Pizza {
    constructor(name, address, email, delivery, deliveryTime, size, toppings, quantity) {
        this.name = name; // Store customer name
        this.address = address; // Store customer address
        this.email = email; // Store customer email
        this.delivery = delivery; // Store delivery option (true for delivery, false for pickup)
        this.deliveryTime = deliveryTime; // Store delivery time
        this.size = size; // Store pizza size
        this.toppings = toppings; // Store pizza toppings
        this.quantity = quantity; // Store pizza quantity
    }

    // Method to generate pizza description
    getDescription() {
        var deliveryStatus = this.delivery ? "Delivery" : "Pickup"; // Determine delivery status based on delivery option
        var deliveryInfo = this.delivery ? `<p>Delivery Time: ${this.deliveryTime}</p>` : ""; // Include delivery time if delivery option is selected
        return `<p>Name: ${this.name}</p>
                <p>Address: ${this.address}</p>
                <p>Email: ${this.email}</p>
                <p>${deliveryStatus}</p>
                ${deliveryInfo}
                <p>Pizza: ${this.size} size with ${this.toppings}, Quantity: ${this.quantity}</p>`; // Generate pizza description
    }
}
