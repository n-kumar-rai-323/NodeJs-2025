const { EventEmitter } = require("events");

const orderTracker = new EventEmitter();

// Order details
const order = {
  id: 101,
  customer: "Nishan Kumar Rai",
  items: [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 50 },
  ],
  status: "Pending",
};

// Listener for when the order is placed
orderTracker.on("orderPlaced", (order) => {
  console.log(`Order ID: ${order.id} has been placed by ${order.customer}.`);
  console.log("Order details:");
  order.items.forEach((item, index) =>
    console.log(`${index + 1}. ${item.name} - $${item.price}`)
  );
  console.log("Order Status: Pending");
});

// Listener for when the order is shipped
orderTracker.on("orderShipped", (order) => {
  console.log(`Order ID: ${order.id} has been shipped.`);
  console.log("Order Status: Shipped");
});

// Listener for when the order is delivered
orderTracker.on("orderDelivered", (order) => {
  console.log(`Order ID: ${order.id} has been delivered to ${order.customer}.`);
  console.log("Order Status: Delivered");
});

// Simulate the order tracking process
console.log("Starting order tracking...");

orderTracker.emit("orderPlaced", order);

setTimeout(() => {
  order.status = "Shipped";
  orderTracker.emit("orderShipped", order);
}, 3000); // After 3 seconds, the order is shipped

setTimeout(() => {
  order.status = "Delivered";
  orderTracker.emit("orderDelivered", order);
}, 6000); // After 6 seconds, the order is delivered
