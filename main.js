// Bad example with lots of duplication

function greetUser1() {
  console.log("Hello, Alice!");
  console.log("Welcome to our website.");
  console.log("We hope you have a great experience here.");
}

function greetUser2() {
  console.log("Hello, Bob!");
  console.log("Welcome to our website.");
  console.log("We hope you have a great experience here.");
}

function greetUser3() {
  console.log("Hello, Charlie!");
  console.log("Welcome to our website.");
  console.log("We hope you have a great experience here.");
}

function calculateDiscount1(price) {
  const discount = price * 0.1;
  const finalPrice = price - discount;
  console.log("Original price: $" + price);
  console.log("Discount: $" + discount);
  console.log("Final price: $" + finalPrice);
}

function calculateDiscount2(price) {
  const discount = price * 0.1;
  const finalPrice = price - discount;
  console.log("Original price: $" + price);
  console.log("Discount: $" + discount);
  console.log("Final price: $" + finalPrice);
}

function calculateDiscount3(price) {
  const discount = price * 0.1;
  const finalPrice = price - discount;
  console.log("Original price: $" + price);
  console.log("Discount: $" + discount);
  console.log("Final price: $" + finalPrice);
}

function logError1() {
  console.error("An unexpected error occurred. Please try again later.");
  console.error("Contact support if the problem persists.");
}

function logError2() {
  console.error("An unexpected error occurred. Please try again later.");
  console.error("Contact support if the problem persists.");
}

function logError3() {
  console.error("An unexpected error occurred. Please try again later.");
  console.error("Contact support if the problem persists.");
}

// Using the functions
greetUser1();
greetUser2();
greetUser3();

calculateDiscount1(100);
calculateDiscount2(200);
calculateDiscount3(300);

logError1();
logError2();
logError3();
