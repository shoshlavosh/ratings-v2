"use strict";

//Takes an item and appends it to the cart-items object 
//in a table format
const addItemToCart = (itemName) => {
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

//defines a function resetCart without parameters
//Replaces dollar amount with zero and removes everything in 
//cart-items object
const resetCart = () => {
  $('#cart-total').html('0.00');
  $('#cart-items').empty();
};

//defines a function incrementCartTotal takes in parameter "price"
//creates a new variable cartTotal and sets it to 
//the object #cart-total
//total = the Number version of the cart total
//then adds the argument to the (cart) total
//.toFixed(2) changes it so it has 2 decimal places, 
//aka dollar format
const incrementCartTotal = (price) => {
  const cartTotal = $('#cart-total');

  let total = Number(cartTotal.html());
  total += price;

  cartTotal.html(total.toFixed(2));
};

//new variable that holds the number of coffees sold
//variable coffeeSold is incremented by the argument amountSold
const incrementCoffeeSold = (amountSold) => {
  let coffeeSold = Number($('#coffee-sold-counter').html());
  coffeeSold += amountSold;

  //changes the previous coffee-sold-counter number to the new 
  //coffee sold number
  $('#coffee-sold-counter').html(coffeeSold);
};

//targets 'value' and changes the attribute to progressVal
//replaces the previous order-status-message with statusMsg argument
const setProgressAndStatus = (progressVal, statusMsg) => {
  $('#order-progress').attr('value', progressVal);
  $('#order-status-message').html(statusMsg);
};


//
// Add your event handlers below.

//selects an object with the class ".add-to-order"
$('.add-to-order').on('click', () => {
  addItemToCart("Coffee");
  incrementCartTotal(1.50);
});
//selects an object with id place-order (happens to be a button)
//upon the click event, anonymous function calls the next two functions,
//incrementCoffeeSold and resetCart
//incrementCoffeeSold takes an argument object with id cart-items
$('#place-order').on('click', () => {
  incrementCoffeeSold($('#cart-items').children().length);
  resetCart();
});
