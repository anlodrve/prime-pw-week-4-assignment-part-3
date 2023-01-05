console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//- Create a global variable named `basket` and set it to an empty array.
let basket = [];

//Create a function called `addItem`. It should:
//- take an input parameter for a string `item`
//- add the new item to the global array `basket`. 
//- return `true` indicating the item was added

function addItem(item){
    basket.push(item);
    console.log('Added', item , 'to cart')
    return true
}
console.log(addItem('milk'));
console.log(addItem('orange juice'));
console.log(addItem('cheese'));
console.log(basket)

//- Create a function called `listItems`. It should:
 // - loop over the items in the `basket` array
  //- console.log each individual item on a new line

function listItems( ){
    for( let basketItem of basket ){
        console.log( basketItem )
    }
  }
listItems(); 

//Create a function called `empty`. It should:
// - reset the `basket` to an empty array

function empty( ){
        basket.length = 0
    }

empty(); 
console.log(basket);