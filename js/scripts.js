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
  Object.keys(order.pizzas).forEach(function(key) {
    const pizza = order.findPizza(key);
    this.totalPrice += pizza.price
  })
}

function Pizza(toppings, sauce, cheese, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = 0;
  this.cheese = cheese;
  this.sauce = sauce;
}

Pizza.prototype.getPrice = function() {
  console.log(this);
  const taxRate = 1.085;
  let basePrice = 11.99;
  let toppingCount = this.toppings.length;
  let taxPrice = (Math.ceil(100*(basePrice * (taxRate - 1))))/100;
  this.price = basePrice + toppingCount*1.15 + taxPrice;
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
  console.log(pizzaSauce);
  let pizzaCheese = cheeseSelected.options[cheeseSelected.selectedIndex].value;
  console.log(pizzaCheese);
  let pizzaSize = sizeSelected.options[sizeSelected.selectedIndex].value;
  let pizza = new Pizza(toppingList, pizzaSauce, pizzaCheese, pizzaSize);
  pizza.getPrice();
  order.addPizza(pizza);
  order.getTotalPrice();
}

let order = new Order();
window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", submitPizza);
});