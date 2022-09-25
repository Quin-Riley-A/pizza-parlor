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

