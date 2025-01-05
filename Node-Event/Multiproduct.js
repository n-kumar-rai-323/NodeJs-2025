const { EventEmitter } = require("events");
const products = [
  { name: "T-shirt", price: 100, shippingRate: 10 },
  { name: "Sneakers", price: 150, shippingRate: 15 },
  { name: "Jacket", price: 200, shippingRate: 20 },
];

const CalculatingTotal = new EventEmitter();
const calculateShippingCharge = (item) => {
  const shippingCost = (item.shippingRate / 100) * item.price;
  const totalCost = item.price + shippingCost;
  return totalCost;
};
CalculatingTotal.on("ShippingCharge", (item) => {
  console.log("Starting total cost calculation for all products...");
});
CalculatingTotal.on("ShippingCharge", (item) => {
  setTimeout(() => {
    let grandTotal = 0;
    item.forEach((product) => {
      const total = calculateShippingCharge(product);
      console.log(
        `Product : ${product.name}, Price:${product.price}, Shipping:${product.shippingRate}%, Total:${total}`
      );
      grandTotal += total;
    });
    console.log(`Grand Total Cost: ${grandTotal}`);
  }, 2000);
});
CalculatingTotal.addListener("ShippingCharge", (item) =>
  calculateShippingCharge(item)
);
CalculatingTotal.emit("ShippingCharge", products);
