//Utility Logic
function basePriceBySize(pizzaSize) {
  let basePrice = NaN;
  switch (pizzaSize) {
    case '9-inch small':
      basePrice = 8.99;
      break;
    case '12-inch medium':
      basePrice = 10.99;
      break;
    case '16-inch large':
      basePrice = 13.99;
      break;
    case '20-inch xl':
      basePrice = 17.99;
      break;
    default:
      console.log("An error has occured while determining the price of a pizza. Perhaps the size value contains an error. Please send any log or user input information to the developer");
  }
  return basePrice;
}

//Business Logic
function Order(){
  this.pizzas = {};
  this.currentId = 0;
  this.totalPrice = 0;
}

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.removePizza = function(id) {
  if (this.pizzas[id] === undefined) {
    return false;
  } else {
  delete this.pizzas[id];
  return true;
  }
}; 

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] === undefined) {
    return false
  } else {
    return this.pizzas[id];
  }
};

Order.prototype.getTotalPrice = function() {
  order.totalPrice = 0;
  Object.keys(order.pizzas).forEach(function(key) {
    const pizza = order.findPizza(key);
    order.totalPrice += pizza.price;
  });
}

function Pizza(toppings, sauce, cheese, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
  this.cheese = cheese;
  this.sauce = sauce;
}

Pizza.prototype.getPrice = function() {
  const taxRate = 1.085;
  let basePrice = basePriceBySize(this.size);
  let toppingCount = this.toppings.length;
  let taxPrice = (Math.ceil(100*(basePrice * (taxRate - 1))))/100;
  this.price = basePrice + taxPrice + toppingCount*1.15;
};



//UI Logic
function submitPizza(event) {
  event.preventDefault();
  let userToppings = this.querySelectorAll('input[type="checkbox"]:checked');
  let toppingList = [];
  for (let n = 0; n < userToppings.length; n++) {
    toppingList.push(userToppings[n].value);
  }
  let sauceSelected = document.getElementById('sauce');
  let cheeseSelected = document.getElementById('cheese');
  let sizeSelected = document.getElementById('size');
  let pizzaSauce = sauceSelected.options[sauceSelected.selectedIndex].value;
  let pizzaCheese = cheeseSelected.options[cheeseSelected.selectedIndex].value;
  let pizzaSize = sizeSelected.options[sizeSelected.selectedIndex].value;
  let pizza = new Pizza(toppingList, pizzaSauce, pizzaCheese, pizzaSize);
  pizza.getPrice();
  order.addPizza(pizza);
  order.getTotalPrice();
  displayOrder(order);
}

function displayOrder(order) {
  let orderDisplay = document.querySelector("div#order");
  orderDisplay.innerText = null;
  let pizzaCount = 1;
  Object.keys(order.pizzas).forEach(function(key) {
    const h4 = document.createElement("h4");
    h4.append("Pizza #" + pizzaCount);
    pizzaCount += 1;
    const pToppings = document.createElement("p");
    pToppings.append("Toppings: ")
    const pSauce = document.createElement("p");
    const pCheese = document.createElement("p");
    const pPrice = document.createElement("p");
    const ol = document.createElement("ol");
    const pizza = order.findPizza(key);
    (pizza.toppings).forEach( function(element){
      const liPizzaToppings = document.createElement("li");
      liPizzaToppings.append(element);
      ol.append(liPizzaToppings);
    });
    pSauce.append("Sauce: " + pizza.sauce);
    pCheese.append("Cheese: " + pizza.cheese);
    pPrice.append("Unit Price: $" + pizza.price);
    orderDisplay.append(h4);
    orderDisplay.append(pToppings);
    orderDisplay.append(ol);
    orderDisplay.append(pSauce, pCheese, pPrice);
  })
  let taxTotal = calcTax();
  const h5Subtotal = document.createElement("h5");
  h5Subtotal.innerText = "Subtotal: $" + parseFloat(order.totalPrice - taxTotal);
  const h5Tax = document.createElement("h5");
  h5Tax.innerText = "Tax: $" + taxTotal;
  const h5OrderTotal = document.createElement("h5");
  h5OrderTotal.innerText = "Total: $" + order.totalPrice;
  orderDisplay.append(h5Subtotal, h5Tax, h5OrderTotal)
}

function calcTax() {
  const taxRate = 1.085;
  let taxAmount = (((order.totalPrice)/taxRate)*(taxRate-1));
  taxAmount = (Math.ceil(100*taxAmount))/100;
  return taxAmount;
}

let order = new Order();
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", submitPizza);
});