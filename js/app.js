"use strict"

// ----------------------------------------- . -----------------------------------------
// VARIABLES AND DATA CONTAINERS - DATA TYPES

// JSON => Javascript Object Notation
var person = { name: 'Figueroa', email: 'figueroa@email.com' };

var people = [
    { name: 'Steven', email: 'steven@email.com' },
    { name: 'Andres', email: 'andres@email.com' },
    { name: 'Guaman', email: 'guaman@email.com' },
    person
];

var peopleJSON = JSON.stringify(person);
var newPeople = JSON.parse(peopleJSON);
var x = false;

// ----------------------------------------- . -----------------------------------------
// OPERATORS

// ******************************
// **** ARITHMETIC OPERATORS ****

var dataA = 10;
var dataB = 20;

// Addition
var addition = dataA + dataB;
console.log('The addition of ' + dataA + ' + ' + dataB + ' = ' + addition);

// Substraction
var substraction = dataA - dataB;
console.log('The substraction of ' + dataA + ' - ' + dataB + ' = ' + substraction);

// Multiplication
var multiplication = dataA * dataB;
console.log('The multiplication of ' + dataA + ' * ' + dataB + ' = ' + multiplication);

// Division
var division = dataA / dataB;
console.log('The division of ' + dataA + ' / ' + dataB + ' = ' + division);

// Module
var module = dataA % dataB;
console.log('The module of ' + dataA + ' % ' + dataB + ' = ' + module);

// Increment
var increment = dataA;
increment++;
console.log('The increment ++ of ' + dataA + ' = ' + increment);

// decrement
var decrement = dataA;
decrement--;
console.log('The decrement -- of ' + dataA + ' = ' + decrement);

// ******************************
// **** RELATIONAL OPERATORS ****

// Greater than >
var greaterThan = dataA > dataB;
console.log(dataA + ' > ' + dataB + ' = ' + greaterThan);

// Less than <
var lessThan = dataA < dataB;
console.log(dataA + ' < ' + dataB + ' = ' + lessThan);

// Greater or Equal than >=
var greaterOrEqual = dataA >= dataB;
console.log(dataA + ' >= ' + dataB + ' = ' + greaterOrEqual);

// Less or Equal than <=
var lessOrEqual = dataA <= dataB;
console.log(dataA + ' <= ' + dataB + ' = ' + lessOrEqual);

// Equal than ==
var equal = dataA == dataB;
console.log(dataA + ' == ' + dataB + ' = ' + equal);

// Not Equal !=
var notEqual = dataA != dataB;
console.log(dataA + ' != ' + dataB + ' = ' + notEqual);

// *****************************
// ***** LOGICAL OPERATORS *****

// AND - &&
var and = dataA > 10 && dataB > 10;
console.log(dataA + ' > ' + 10 + ' && ' + dataB + ' > ' + 10 + ' = ' + and);

// OR - || 
var or = dataA > 10 || dataB > 10;
console.log(dataA + ' > ' + 10 + ' || ' + dataB + ' > ' + 10 + ' = ' + or);

// NOT 
var not = !(dataA > 10);
console.log('!(' + dataA + ' > ' + 10 + ') = ' + not);

// ******************************
// **** ASSIGNMENT OPERATORS ****

// Simple
var equal = dataA;
console.log("Simple assignation: " + equal);

// Add and Assign
var addEqual = 10;
addEqual += dataA;
console.log("+= Assignation: " + addEqual);

// Substract and Assign
var substractEqual = 10;
substractEqual -= dataA;
console.log("-= Assignation: " + substractEqual);

// Multiplication and Assign
var multiplicationEqual = 10;
multiplicationEqual *= dataA;
console.log("*= Assignation: " + multiplicationEqual);

// Divition and Assign
var divitionEqual = 10;
divitionEqual /= dataA;
console.log("/= Assignation: " + divitionEqual);

// ******************************
// ***** NEGATIVE OPERATORS *****

var dataC = -dataA;
console.log('data A: ' + dataA + ', and his negative: ' + dataC);

// *******************************
// *** CONCATENATION OPERATORS ***

var data1 = '1';
var data2 = '2';
var name = 'Steven';
var lastName = 'Guamán';

// Number Concatenation

var numberConcat = dataA + dataB;
console.log('Concat ' + dataA + ' and ' + dataB + ' = ' + numberConcat);

// String Concatenation
var stringConcat = name + " " + lastName;
console.log('Concat ' + name + ' and ' + lastName + ' = ' + stringConcat);

// Concat Number as Text
var numAsTextConcat = data1 + data2;
console.log('Concat ' + data1 + ' and ' + data2 + ' = ' + numAsTextConcat);

// Concat Text and Number
var textNumConcat = dataA + data2;
console.log('Concat ' + dataA + ' and ' + data2 + ' = ' + textNumConcat);

// *****************************
// *** CONDITIONAL OPERATORS ***

// Condition = ? TRUE : FALSE
var result = dataA > dataB ? "It's greater than" : "It's not greater than";
console.log('The conditional result: ' + result);

// *****************************
// **** DATA TYPE OPERATORS ****

var active = true;

console.log(dataA + ' is ' + typeof (dataA));
console.log(name + ' is ' + typeof (name));
console.log(active + ' is ' + typeof (active));
console.log(person + ' is ' + typeof (person));
console.log(person.email + ' is ' + typeof (person.email));


var a, b, c;
a = b = c = 5;
a += b *= c /= 5;

console.log("a = " + a);
console.log("b = " + b);
console.log("c = " + c);

// ----------------------------------------- . -----------------------------------------
// CONDITIONS OR DETITIONS

// ****************************
// ************ IF ************

if (dataA > dataB) {
    console.log("Success");
}

// ***************************
// ********* IF ELSE *********

if (dataA > dataB) {
    console.log(dataA + ' > ' + dataB);
} else if (dataB == dataA) {
    console.log(dataA + ' = ' + dataB);
} else {
    console.log("Error");
}

// ****************************
// ***** NESTED STRUCTURE *****

if (dataA > dataB) {
    if (dataB == dataA) {
        console.log(dataA + ' >= ' + dataB);
    } else {
        console.log(dataB + ' < ' + dataB)
    }
} else if (dataB < dataA) {
    console.log(dataA + ' < ' + dataB);
} else {
    console.log("Error");
}


// **************************
// ********* SWITCH *********

var age = 30;
switch (age) {
    case 10:
        console.log('Your age is 10');
        break;
    case 20:
        console.log('Your age is 20');
        break;
    case 30:
        console.log('Your age is 30');
        break;
    case 40:
        console.log('Your age is 40');
        break;
    default:
        break;
}

// ----------------------------------------- . -----------------------------------------
// LOOPS

// ***************************
// *********** FOR ***********

var products = 5;
for (let i = 0; i < products; i++) {
    console.log("Product: " + i);
}

// ***************************
// ********** WHILE **********

while (products > 0) {
    console.log("Product " + products + " sold");
    products--;
}

// ****************************
// ********* DO WHILE *********

products = 5;
do {
    console.log("Product " + products + " sold");
    products--;
}
while (products >= 1);

// ****************************
// ***** CONTINUE - BREAK *****

var account = 0;
for (let i = 0; i <= 20; i++) {
    if (i == 5) {
        break;
    }
    if (i % 2 == 0) {
        continue;
    }
    account++;
}
console.log("There are " + account + " odd numbers")

// ----------------------------------------- . -----------------------------------------
// FUNCTIONS

// *****************************
// ****** BASIC STRUCTURE ******

function hello_world() {
    var hi = "Hello World";
}

hello_world();

// **********************************
// **** PARAMETERS IN A FUNCTION ****

function hello(name, age) {
    var result = name + " is " + age + " old";
    return result;
}

var message = hello("Steven", 28);
console.log(message);

// ****************************
// ***** INIT PARAMETERS ******

function count(value = 20) {
    console.log("Total: " + value);
}

count();

// *****************************
// ****** REST PARAMETERS ******

function cook(...ingredients) {
    console.log("Ingredients: ", ingredients)
}
cook("Chicken", "Tomato", "Rice", "Beans");

// ******************************
// ***** SPREAD PARAMETERS ******

function cookSpread(ingredient1, ingredient2, ingredient3, ...others) {
    console.log("Ingredient 1: ", ingredient1);
    console.log("Ingredient 2: ", ingredient2);
    console.log("Ingredient 3: ", ingredient3);
    console.log("Others: ", others);
}
baseIngredients = ["Chicken", "Tomato"]
cookSpread(...baseIngredients, "Sugar", "Fish", "Rice");

// ******************************
// ***** ANONYMOUS FUNCTION *****

/*
(
    function(){
        var message = "Hello World again";
        console.log(message);
    }
)()
*/

var anonymousHello = function (name) {
    var message = "Hello " + name;
    return message;
}

// *****************************
// ********* CALLBACKS *********

function calculate(dataA, dataB, additionCB, substractionCB) {
    var addition = dataA + dataB;
    var substraction = dataA - dataB;
    additionCB(addition);
    substractionCB(substraction);
}

calculate(2, 3, function (result) {
    console.log('Addition', result);
}, function (result) {
    console.log('Substraction', result);
})

// **********************************************
// **** ARROW FUNCTIONS | FAT ARROW | LAMBDA ****

var helloArrow = name => "Hello" + name;
console.log(helloArrow("Steven"));

var additionArrow = amount => amount + 10
console.log(additionArrow(10));

var calculateArrow = (dataA, dataB) => dataA + dataB
console.log(calculateArrow(10, 15));

var generateArrow = (dataA, dataB) => {
    var dataC = 5;
    return dataA + dataB + dataC;
}
console.log(generateArrow(10, 15));

var validateArrow = () => {
    return "Correct";
}
console.log(validateArrow());

// *****************************
// ******* OPERATOR THIS *******

const buttonThisOperator = document.querySelector('.button');

/*buttonThisOperator.addEventListener('click', function () {
    //console.log('Push button');
    console.log(this.innerHTML);
})*/

buttonThisOperator.addEventListener('click', () => {
    console.log(this);
    this.location = "http://www.google.com";
});

// ----------------------------------------- . -----------------------------------------
// EVENTS

// ****************************
// ******* MOUSE EVENTS *******

const buttonMouseEvent = document.querySelector(".button");

buttonMouseEvent.addEventListenerI("click", function () {
    console.log("You push the button");
});

buttonMouseEvent.addEventListenerI("mouseover", function () {
    console.log("The mouse is over the button");
});

buttonMouseEvent.addEventListenerI("mouseout", function () {
    console.log("The mouse is out the button");
});

// *****************************
// ****** KEYBOARD EVENTS ******

window.addEventListener("keydown", function (event) {
    console.log("keydow");
    console.log(String.fromCharCode(event.keyCode));
});

window.addEventListener("keypress", function (event) {
    console.log("keypress");
});

window.addEventListener("keyup", function (event) {
    console.log("keyup");
});

// *****************************
// ******* LOAD DOCUMENT *******

window.addEventListener("load", function () {
    console.log("The document have been loaded");
});

// *****************************
// ***** MULTIMEDIA EVENTS *****

const videoEvent = document.querySelector('.eventVideo');

videoEvent.addEventListener("play", function () {
    console.log("Init video");
});

videoEvent.addEventListener("seeking", function () {
    console.log("Finding in the video ", this.currentTime);
});

videoEvent.addEventListener("ended", function () {
    console.log("End video");
});

// ****************************
// ********** TIMERS **********

/*var timer = setInterval(function () {
    setColor();
}, 2000);*/

setTimeout(function () {
    setColor();
}, 3000);

function setColor() {
    var page = document.body;
    page.style.backgroundColor = page.style.backgroundColor == "blue" ? "green" : "blue";
}

function stopChangeColor() {
    clearInterval(timer);
}