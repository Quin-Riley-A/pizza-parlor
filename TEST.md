This document will serve a location for TDD psuedocode detailing production of Javascript Business Logic for this project. Further information on the function and production of this project can be found in README.md

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

### **Describe:** Pizza.prototype.getPrice() ###
#### **Test 2** ####
*It will scale a portion of the value for toppings and add tax.*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
pizza.getPrice();
console.log(pizza.price);
```

**Expected Output**
```javascript
16.7524
```
