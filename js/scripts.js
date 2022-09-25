function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = NaN;
}

Pizza.prototype.getPrice = function() {
  const taxRate = 1.085;
  let basePrice = 11.99;
  let toppingCount = this.toppings.length;
  this.price = basePrice * (toppingCount*1.15) * taxRate;
}