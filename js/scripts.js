//Business Logic
function Order(){

}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
  this.price = NaN;
}

Pizza.prototype.getPrice = function() {
  const taxRate = 1.085;
  let basePrice = 11.99;
  let toppingCount = this.toppings.length;
  let taxPrice = (Math.ceil(100*(basePrice * (taxRate - 1))))/100;
  this.price = basePrice + toppingCount*1.15 + taxPrice;
}



//UI Logic

function submitPizza(event) {
  event.preventDefault();
  let userToppings = this.querySelectorAll('input[type="checkbox"]:checked');
  let toppingList = [];
  for (let n = 0; n < userToppings.length; n++) {
    toppingList.push(userToppings[n].value);
  }
  console.log(toppingList);
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", submitPizza);
//  let chosentoppings = 0
});