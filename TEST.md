This document will serve a location for TDD psuedocode detailing production of Javascript Business Logic for this project. Further information on the function and production of this project can be found in README.md

### **Describe:** Pizza() ###
#### **Test 1** ####
*It will return a object of the type Pizza with 2 properties. Namely an array of toppings and string for size*

**Code:**
```javascript
let pizza = new Pizza(["extra cheese", "pickles", "dill"], "12-inch medium");
console.log(pizza);
```

**Expected Output**
```javascript
Object {toppings: ["extra cheese", "pickles", "dill"], size: "12-inch medium"}
```
