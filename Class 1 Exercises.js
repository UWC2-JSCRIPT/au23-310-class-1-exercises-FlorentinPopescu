/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

// get area for 13" pizza
let diameterPizza13 = 13;
let radiusPizza13 = diameterPizza13 / 2;
let areaPizza13 = Math.PI * Math.pow(radiusPizza13, 2);    

// get area for 17" pizza
let diameterPizza17 = 17;
let radiusPizza17 = diameterPizza17 / 2;
let areaPizza17 = Math.PI * Math.pow(radiusPizza17, 2);    

// write results of area to HTML
document.getElementById("area_P13").innerHTML = areaPizza13.toFixed(2).toString();
document.getElementById("area_P17").innerHTML = areaPizza17.toFixed(2).toString();


// 2. What is the cost per square inch of each pizza?

// cost of square inch for 13" piza
let costSquareInchPizza13 = 16.99/areaPizza13;

// cost of square inch for 17" piza
let costSquareInchPizza17 = 19.99/areaPizza17;

// write results of cost per square inch to HTML
document.getElementById("cost_square_inch_P13").innerHTML = costSquareInchPizza13.toFixed(2).toString();
document.getElementById("cost_square_inch_P17").innerHTML = costSquareInchPizza17.toFixed(2).toString();


// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

// generate a randm number between 1 and 13, inclusive
let randomCard = Math.floor(Math.random() * 13) + 1;

// write results of random card to HTML
document.getElementById("random_card").innerHTML = randomCard.toString();


// 4. Draw 3 cards and use Math to determine the highest
// card

let firstRandomCard = Math.floor(Math.random() * 13) + 1;
let secondRandomCard = Math.floor(Math.random() * 13) + 1;
let thirdRandomCard = Math.floor(Math.random() * 13) + 1;

let highestCard = Math.max(firstRandomCard, secondRandomCard, thirdRandomCard);

// write the result for highest card to HTML
document.getElementById("random_cards").innerHTML = `<li>${firstRandomCard}</li>\
                                                     <li>${secondRandomCard}</li>\
                                                     <li>${thirdRandomCard}</li>`;
document.getElementById("highest_card").innerHTML = highestCard;


/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

// personal information
const FIRST_NAME = "Florentin";
const LAST_NAME = "Popescu";
const STREET_ADDRESS = "Developers Corner Street"
const CITY = "Chicago";
const STATE = "IL";
const ZIP_CODE = "60606";

// generate formated address from personal information
let formatedAddress = `${FIRST_NAME} ${LAST_NAME}, <br> ${STREET_ADDRESS}, <br> ${CITY}, ${STATE} ${ZIP_CODE}`;

// write person information in HTML
document.getElementById("infos").innerHTML = `<li>${FIRST_NAME}</li>\
                                              <li>${LAST_NAME}</li>\
                                              <li>${STREET_ADDRESS}</li>\
                                              <li>${CITY}</li>\
                                              <li>${STATE}</li>\
                                              <li>${ZIP_CODE}</li>`;

// write formatted address in HTML
document.getElementById("address").innerHTML = formatedAddress.toString();


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

// full address
let fullAddress = `Florentin Popescu, Developers Corner Street, Chicago, IL 60606`;

// extract first name
let firstName = fullAddress.split(" ").at(0);

// write full address and first name in HTML
document.getElementById("full").innerHTML = fullAddress.toString();
document.getElementById("first").innerHTML = firstName.toString();

/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

const START_DATE = new Date(2020, 1, 1);
const END_DATE = new Date(2020, 4, 1);

// compute midd date
let midDate = new Date((START_DATE.getTime() + END_DATE.getTime()) / 2);

// write start and end dates and midd date in HTML
document.getElementById("dates").innerHTML = `<li>${START_DATE}</li>\
                                              <li>${END_DATE}</li>`;
document.getElementById("mid").innerHTML = midDate.toString();
