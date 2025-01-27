console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// 1. Create a global variable named `basket` and set it to an empty array.
let basket = [];
console.log("1. basket array: ", basket);


//. Add a global const named maxItems and set it to 5. 
console.log("The maximum number of items that can go in the cart:")

const maxItems = 5;
console.log(maxItems);

// 2. Create a function called `addItem`. It should:
//- take an input parameter for a string `item`
//- add the new item to the global array `basket`. 
//- return `true` indicating the item was added

function addItem(item){
    basket.push(item);
    console.log('Added', item , 'to cart')
    return true
}
console.log("2. addItem")
console.log(addItem('milk'));
console.log(addItem('orange juice'));
console.log(addItem('cheese'));
console.log("these items were added to cart:", basket)

// 3. Create a function called `listItems`. It should:
 // - loop over the items in the `basket` array
  //- console.log each individual item on a new line

console.log("3. listItems")  
function listItems( ){
    for( let basketItem of basket ){
        console.log( basketItem )
    }
  }
listItems(); 

// 4. Create a function called `empty`. It should:
// - reset the `basket` to an empty array


function empty( ){
        basket.length = 0
    }

empty(); 
console.log("4. This is now what's in the cart (expect it to be empty):", basket);


console.log("-----Stretch Goals-----")
//Stretch Goals
//Remember that Stretch Goals are not required, but will help you to further develop concepts from the skills we have covered.

//Using functions in other functions!

//6. Create a function called isFull(). It should:
//return false if the basket contains less than max number of items
//return true otherwise (equal or more than maxItems)
console.log("6. Seeing if the cart isFull")


function isFull(){
    if(basket.length < maxItems){
        return false
    } //end false
    else if (basket.length >= maxItems){
        return true
    }
}
console.log("Is the cart full?", isFull(basket));

addItem("popcorn");
addItem("frozen pizza");
addItem("bananas");
addItem("mac & cheese");
addItem("eggs");

//when I haven't messed with question 7, this works, it returns true. after doing the question 7 stuff it returns false 
console.log("Is the cart full now?", isFull(basket));

//7. Update the required addItem function to:
//If an item was added to the array, return true
//If there was no room and the item could not be added return false

console.log("7. addItem");
function addItem(item){
//Use the isFull function to prevent more than maxItems from being added to the basket.
    if(isFull(basket) === false) {
        basket.push(item);
        console.log('Added', item , 'to cart');
        return true;
        } //end cart is not full yet
    else if(isFull(basket) === true){
        console.log("Item could not be added because cart is full");
        return false;
    } //end cart is full 
} //end addItem 


addItem("pancake mix"); 

console.log("Is the cart full now?", isFull(basket));
console.log("Removed this item:", basket.pop("eggs"));
console.log("Is the cart full now?", isFull(basket));
console.log("Can I add something else now?", addItem("pancake mix"));
console.log("Cart is now", basket);


//Using Array built-in functions!

//8. Create a function called removeItem. It should:
//Take an input parameter for a string item
//Use Array.indexOf to find the index of the first matching item in the basket.
//Use Array.splice to remove the first matching item from the basket.
//Return the item removed or null if the item was not found

console.log("8. removeItem");
function removeItem(item){
    if(basket.indexOf(item) < (basket.length - 1) && basket.indexOf(item) >= 0){
        basket.splice(basket.indexOf(item), 1);
        return item;
        }
    else {
        return null;
    }
}

console.log("Removed this item from cart:", removeItem("bananas"));
console.log("Cart now contains:", basket);
console.log(removeItem("cookie"));



