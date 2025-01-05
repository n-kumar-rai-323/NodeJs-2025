const store = {
  name: "Iphone 14 Pro Max",
  price: 223000,
  shipingCharge: 10000,
};

const { time } = require("console");
const { EventEmitter } = require("events");

const calculateShipingCharge = new EventEmitter();
const totalCalculate = (item) => {
  setTimeout(() => {
    const total = item?.price + item?.shipingCharge;
    console.log(`Total price including shipping: ${total}`);
  }, 2000);
};

calculateShipingCharge.on("Charge", (item) => {
  console.log(`Calculating  ${item.name} item Shiping Charge.`);
});

calculateShipingCharge.addListener("Charge", (item) => totalCalculate(item));
calculateShipingCharge.emit("Charge", store);
