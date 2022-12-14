This document will serve a location for TDD psuedocode detailing production of Javascript Business Logic for this project. Further information on the function and production of this project can be found in README.md

### **Describe:** Order() ###
#### **Test 1** ####
*It will return an object of the type Order with 2 properties. Namely an empty set of pizza objects and an ID numerator starting at 1.*

**Code:**
```javascript
let order = new Order();
console.log(order);
```

**Expected Output**
```javascript
Object {pizzas: {}, currentId: 1}
```

#### **Test 2** ####
*It will return a similar object with an additional property, totalprice initially set to NaN*

**Code:**
```javascript
let order = new Order();
console.log(order);
```

**Expected Output**
```javascript
Object {pizzas: {}, currentId: 1, totalprice: NaN}
```


### **Describe:** Order.prototype.assignId() ###
#### **Test 1** ####
*It will return an integer that increments up from 1*

**Code:**
```javascript
let order = new Order();
order.assignId;
```

**Expected Output**
```javascript
0
```

### **Describe:** Order.prototype.addPizza() ###
#### **Test 1** ####
*It will take a Pizza object as an argument and add it to an existing order object*

**Code:**
```javascript
let order = new Order();
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
order.addPizza(pizza);
console.log(order);
```

**Expected Output**
```javascript
Object {pizzas: Object {toppings: ["extra cheese", "pickles", "dill"], , size: "12-inch medium"}, currentId: 1}
```

### **Describe:** Order.prototype.removePizza() ###
#### **Test 1** ####
*It will remove a selected pizza from the parent order object*

**Code:**
```javascript
let order = new Order();
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
order.addPizza(pizza);
order.removePizza(1);
console.log(order)
```

**Expected Output**
```javascript
true
Object {pizzas: Object {}, currentId: 1}
```

#### **Test 2** ####
*It will return false if a provided order ID number is not assigned to an existing pizza*

**Code:**
```javascript
let order = new Order();
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
order.addPizza(pizza);
order.removePizza(2);
console.log(order)
```

**Expected Output**
```javascript
false
Object {pizzas: Object {toppings: ["extra cheese", "pickles", "dill"], , size: "12-inch medium"}, currentId: 1}
```

### **Describe:** Order.prototype.findPizza() ###
#### **Test 1** ####
*It will take an integer as an argument and return the pizza child object with the corresponding ID.*

**Code:**
```javascript
let order = new Order();
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
order.addPizza(pizza);
order.findPizza(1);
```

**Expected Output**
```javascript
Object {toppings: ["extra cheese", "pickles", "dill"], , size: "12-inch medium", price: NaN, id: 1}
```

#### **Test 2** ####
*It will return false if the id argument does not correspond to an existing ID for an instantiated pizza object.*

**Code:**
```javascript
let order = new Order();
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
order.addPizza(pizza);
order.findPizza(2);
```

**Expected Output**
```javascript
false
```

### **Describe:** Order.prototype.getTotalPrice() ###
#### **Test 1** ####
*It assigns a totalPrice value within the order object*

**Code:**
```javascript
let order = new Order();
let pizza = new Pizza(["sausage"], "tomato", "regular", "12-inch medium");
pizza.getPrice();
order.addPizza(pizza);
order.getTotalPrice();
order.totalPrice;
```

**Expected Output**
```javascript
14.16
```

### **Describe:** Pizza() ###
#### **Test 1** ####
*It will return an object of the type Pizza with 2 properties. Namely an array of toppings and string for size*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
console.log(pizza);
```

**Expected Output**
```javascript
Object {toppings: ["extra cheese", "pickles", "dill"], size: "12-inch medium"}
```

#### **Test 2** ####
*It will return a object of the type Pizza with a third property. Namely a price value set to NaN.*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
console.log(pizza);
```

**Expected Output**
```javascript
Object {toppings: ["extra cheese", "pickles", "dill"], size: "12-inch medium", price: NaN}
```

#### **Test 3** ####
*It will add new properties to the constructor*

**Code:**
```javascript
let pizza = new Pizza(["sausage"], "tomato", "regular", "12-inch medium");
console.log(pizza);
```

**Expected Output**
```javascript
Object {toppings: ["sausage"], sauce: tomato
price: 0, cheese: "regular", size: "12-inch medium"}
```


### **Describe:** Pizza.prototype.getPrice() ###
#### **Test 1** ####
*It will assign an floating point value to the price key in the targetted pizza object*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
pizza.getPrice();
console.log(pizza.price);
```

**Expected Output**
```javascript
11.99
```

#### **Test 2** ####
*It will scale a portion of the value for toppings and add tax. Display to the hundredths place*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
pizza.getPrice();
console.log(pizza.price);
```

**Expected Output**
```javascript
16.45
```

#### **Test 3** ####
*The price will round up to the next cent on tax lest an avalanching fraction of a cents accrue.*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
pizza.getPrice();
console.log(pizza.price);
```

**Expected Output**
```javascript
16.46
```

#### **Test 4** ####
*The price scale the price of the pizza with its size as well as its toppings*

**Code:**
```javascript
let pizza = new Pizza(["sausage"], "tomato", "regular", "9-inch small");
pizza.getPrice();
console.log(pizza.price);
```

**Expected Output**
```javascript
10.91
```

