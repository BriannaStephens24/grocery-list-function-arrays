// copy down the array to run through the function

const groceryList = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];



/*logNames => Takes in an array of items 
console.logs the name of each item in the given array. 
Hint: use .forEach*/

const logNames = (array) => {
  // use forEach, pass in array, log the value of name
  array.forEach((array) => console.log(array.name))
//                             dot notation of what you want logged

}

// .forEach doesn't return anything - have to call the function to see in console
logNames(groceryList);



/* getUpperCaseNames => Takes in an array of items. 
Returns an array of item names in all uppercase. 
Hint: use .map */

const getUpperCaseNames = (array) => {
  
  const upperArray = array.map((array) => array.name.toUpperCase());
  return upperArray;

  

}

const capitalArray = getUpperCaseNames(groceryList);

console.log(capitalArray);

///////////////////////////////////////////

/* getItemById => Takes in an array of items and an id. 
Returns the item in the array with the given id. 
Hint: use .find */

const getItemById = (array, idNum) => {
  // assign const, use find and pass in array, you dot notation to find an id number
  const foundId = array.find((array) => array.id === idNum);
  console.log(foundId);
}
//                       passing in a random number for testing
getItemById(groceryList, Math.ceil(Math.random() * 8));

//////////////////////////////////////////////

/* getItemPriceByName => Takes in an array of items and a name string. 
Returns the price of the item that matches the name that was passed in. 
Hint: use a loop */

const getItemPriceByName = (array, foodName) => {
  
  for (let i = 0; i < array.length; i++) {
   
    if (array[i].name === foodName) {
   
      return array[i].price;
    }
  }

  return `Item not found`;
}
//                                                example grocery
const itemPrice = getItemPriceByName(groceryList, `cheddar`);
console.log(itemPrice);



/* getItemsByCategory => Takes in an array of items and a category string. 
Returns an array of items that belong to the given `category`. 
Hint: use .filter  */

const getItemsByCategory = (array, categoryName) => {
  const categoryArray = array.filter((array) => array.category === categoryName);
  return categoryArray;
}

const filteredByCategory = getItemsByCategory(groceryList, "dairy");
console.log(filteredByCategory);



/* countItems => Takes in an array of items. 
Returns the total quantity of all items. 
Hint: use .reduce */

const countItems = (array) => {
 
  const quanityArray = [];

  for (let i = 0; i < array.length; i++) {
   
    quanityArray.push(array[i].quantity);
  }
  
  const quanityCount = quanityArray.reduce((acc, cur) => acc + cur, 0)
  return quanityCount;
}

const totalItems = countItems(groceryList);
console.log(totalItems);



/* calculateTotalPrice => Takes in an array of items.
Returns the cost of all given items. 
Hint: use .reduce */

const calculateTotalPrice = (array) => {
  
  const priceArray = [];
 
  for (let i = 0; i < array.length; i++) {
    
    priceArray.push(array[i].price * array[i].quantity);
  }
 
  const totalPrice = priceArray.reduce((acc, cur) => acc + cur, 0);
  return totalPrice;
}

const totalBill = calculateTotalPrice(groceryList);
console.log(totalBill);