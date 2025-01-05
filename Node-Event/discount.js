const { EventEmitter } = require("events");

const calculateDiscount = new EventEmitter();
const product = {
  name: "apple",
  price: 200,
  discount: 10,
};

const calculatediscountAmount = (item) => {
  setTimeout(() => {
    const TotalPrice = item.price;
    console.log(`Original price of the product Rs,${TotalPrice}`);
    const discount = (item?.discount / 100) * item?.price;
    console.log(`Discount Amount is Rs,${discount}`);
    const finalPrice = item.price - discount;
    console.log(`The final price Rs,${finalPrice}`);
  }, 2000);
};

// calculatediscount(product);

calculateDiscount.on("DiscountBtn", (item) => {
  console.log(`Calculating the discounted price for ${item.name}`);
});
calculateDiscount.addListener("DiscountBtn", (item) =>
  calculatediscountAmount(item)
);
calculateDiscount.emit("DiscountBtn", product);
