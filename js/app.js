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

// ----------------------------------------- . -----------------------------------------
// ALERT WINDOWS

// ****************************
// ******* ALERT WINDOW *******

const videoAlert = document.querySelector('.buttonVideo');

videoAlert.addEventListener("ended", function () {
    alert("Message\nVideo finished");
});

// *****************************
// **** CONFIRMATION WINDOW ****

const videoConfirmation = document.querySelector('.buttonVideo');

videoConfirmation.addEventListener("ended", function () {
    let result = confirm("Do you want to watch again?");
    console.log(result);
    if (result) {
        videoAlert.play();
    } else {
        window.location = "http://www.google.com";
    }
});

// *****************************
// ******** DATA WINDOW ********

const videoData = document.querySelector('.buttonVideo');

videoData.addEventListener("ended", function () {
    let email = prompt("Email: ", "example@example.com");

    if (email == null || email == "") {
        console.log("No data");
    } else {
        console.log(email);
    }
});

// ----------------------------------------- . -----------------------------------------
// NUMBERS

// *****************************
// ***** NUMBER PROPERTIES *****

console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("NaN", Number.NaN);

// *****************************
// ****** NUMBER METHODS ******

var numberMethods = "10.30";

console.log("Number: ", typeof numberMethods, typeof Number(numberMethods));
console.log("parseInt: ", parseInt(numberMethods));
console.log("parseFloat: ", Number.parseFloat(numberMethods));
console.log("isNan", isNaN(numberMethods));
console.log("isInteger", Number.isInteger(numberMethods));

// *****************************
// ****** INSTANCE METHOD ******

var numberInstance = 2.5

console.log("toExponential: ", numberInstance.toExponential());
console.log("toFixed: ", numberInstance.toFixed(4));
console.log("toPrecision: ", numberInstance.toPrecision(2));
console.log("toString: ", numberInstance.toString());

// ----------------------------------------- . -----------------------------------------
// STRINGS

// ******************************
// ****** CREATING STRINGS ******

var country = "Ecuador";
var food = new String("Pizza");

// ******************************
// *********** LENGTH ***********

var messageString = "Hi this is a test";
console.log("The string has " + messageString.length + " characters");

// ****************************
// ***** TEXT SEARCH - P1 *****

var messageSearch = "Learning javascript is interesting. I like javascript";
var resutl;

// indexOf -> get the position where it finds the text
result = messageSearch.indexOf("javascript");

// lastIndexOf -> get the last position where it finds the text
result = messageSearch.lastIndexOf("javascript");

// search -> get the position where it finds the text
result = messageSearch.search("javascript");

// search | Regular expression -> get the position where it finds the expression
result = messageSearch.search(/ja/i); // i -> in case sensitive 

// ****************************
// ***** TEXT SEARCH - P2 *****

// match -> Returns an array with the regular expression 
result = messageSearch.match(/learning/gi); //get all the results

// substr -> Cut the string with the position. The second parameter starts in the finish of the first parameter
result = messageSearch.substr(6, 11);

// substring -> Similar to substr, but the second parameter starts at the begining of the string
result = messageSearch.substring(6, 11);

// charAt -> Get the character at the position of the parameter (starts in 0)
result = messageSearch.charAt(3);

// ****************************
// ***** TEXT SEARCH - P3 *****

// startsWith 
result = messageSearch.startsWith("ja");
result = messageSearch.startsWith("ja", 5); // the second parameter specify where start the method

// endsWith 
result = messageSearch.endsWith("ja");

// includes
result = messageSearch.includes("ja");

// *********************************
// GENERATION - REPLACE - SEPARATION 

// repeat
result = messageSearch.repeat(4);

// replace
result = messageSearch.replace("javascript, python");

// slice
result = messageSearch.slice(6);
result = messageSearch.slice(6, messageString.length - 5);

// split -> Separate the string into array
result = messageSearch.split("-");

// trim -> detele blankspaces at the begining and at the end of the string
result = messageSearch.trim();

// ****************************
// ** TRANSFORMATION METHODS **

// toString
var total = 12356
result = total.toString();

// toLowerCase
result = messageSearch.toLowerCase();

// toUpperCase
result = messageSearch.toUpperCase();

// concat
var messageSearch2 = ". I know another things";
result = messageSearch.concat(messageSearch2, "123", "456");

// *****************************
// ***** TEMPLATES METHODS *****

var languageString = "javascript";
var languageString2 = "python";
var messageString = `I like this languages: ${languageString} - ${languageString2}`
console.log(messageString);

// multiline message
var multilineMessage = `
    Hello world,
    I'm learning:
    ${languageString} - ${languageString2}
    and it's funny
`
console.log(multilineMessage);

// ----------------------------------------- . -----------------------------------------
// ARRAYS

// *****************************
// ***** TEMPLATES METHODS *****

var plates = ["pizza", "pasta", "rice"];

var drinks = new Array("soda", "water", "wine");

console.log(Array.isArray(plates), plates, drinks);

// ****************************
// ********** LENGTH **********

console.log(`There are ${plates.length} plates on the menu`);

var plate = plates[1];

console.log("The plate is ", plate);

// *****************************
// ** MULTIDIMENTIONAL ARRAYS **

var menu = [plates, drinks];

console.log(menu, menu[0][2]);

// ****************************
// ***** BASIC OPERATIONS *****

// push -> add element

plates.push("chicken");
console.log(plates);

// pop -> extract the last element

plates.pop(plates);
console.log(plates);

// join -> concat the elemnts into array

var messageArray = plates.join();
console.log(messageArray);

// ****************************
// ***** OTHER OPERATIONS *****

var messageArrayOperations = "pizza, rice, pasta";

// split -> separate string into array

plates = messageArrayOperations.split(", ");
console.log(plates);

// from -> take array from html

var platesHTML = Array.from(document.querySelectorAll(".plates p"));
plates = platesHTML.map(plate => plate.textContent);

// off -> convert into array

plates = Array.of("pizza", "rice", "pasta");
console.log(plates);

// ****************************
// *********** SORT ***********

plates.sort();
console.log(plates);

// reverse -> the order
plates.reverse();
console.log(plates);

plates.reverse();
console.log(plates);

// *****************************
// ******* DESTRUCTURING *******

/*
// Option 1

var plate1 = plates[0];
var plate2 = plates[1];
var plate3 = plates[2];

console.log(plate1, plate2, plate3);
*/

/*
// Option 2
var plate1 = null;
var plate2 = null;
var plate3 = null;

[plate1, plate2, plate3] = plates;
console.log(plate1, plate2, plate3);
*/

// Option 3
var [plate1, plate2, plate3] = plates;
console.log(plate1, plate2, plate3);

// ----------------------------------------- . -----------------------------------------
// FINDING IN ARRAYS

// *****************************
// ************ FOR ************

plates = ["pizza", "pasta", "tacos"];

for (let plate in plates) {
    console.log(plate);
}

// *****************************
// ********** FOREACH **********

plates.forEach(plate => {
    console.log(plate);
});

plates.forEach((plate, index) => {
    console.log(index, plate);
});

// ****************************
// *********** FIND ***********

var plateSelected = plates.find(plate => plate === "pizza");
console.log(plateSelected);

var menuArray = [
    { name: "Pizza", price: 10, country: "Italy" },
    { name: "Paella", price: 20, country: "Spain" },
    { name: "Tacos", price: 5, country: "Mexico" },
    { name: "Burritos", price: 5, country: "Mexico" }
];

plateSelected = plates.find(plate => plate.name === "Pizza");
console.log(plateSelected);

// *****************************
// ****** FIND WITH INDEX ******

var numPlate = plates.findIndex(plate => plate === "Pizza");
var numMenu = menuArray.findIndex(plate => plate.name === "Pizza");
console.log("Plate number: ", numPlate, numMenu);

// ******************************
// ****** FILTERING ARRAYS ******

var resultMenu = menuArray.filter(plate => plate.country === "Mexico");
console.log(resultMenu);

// *****************************
// ****** VALIDATE ARRAYS ******

resultMenu = menuArray.some(plate => plate.price < 20);
console.log("Is there plates < 20", resultMenu);

// ----------------------------------------- . -----------------------------------------
// DOM AND BOM

// *******************************
// ** UNDERSTANDING DOM AND BOM **

var buttonDOM = document.getElementById("button");

buttonDOM.addEventListener("click", function () {
    console.log(window.location.href);
    window.location.href = "http://github.com";
});

// ********************************
// ** DOM PROPERTIES AND METHODS **

var allParagraphs = document.getElementById("p");
var paragraphsByClass = document.getElementsByClassName("principal")[0].textContent;
var picture = document.createElement("img");
picture.src = "picture1.jpg";
picture.name = "picture1";
picture.width = 400;
document.body.appendChild(picture);


buttonDOM.addEventListener("click", function () {
    console.log(allParagraphs);
    // console.log(paragraphsByClass);
    buttonDOM.style.backgroundColor = "green";
    buttonDOM.style.width = "200px"
});

picture.addEventListener("click", function () {
    if (this.name === "picture1") {
        this.src = "picture2.jpg";
        this.name = "picture2";
    } else {
        this.src = "picture1.jpg";
        this.name = "picture1";
    }
});

// ********************************
// ** BOM PROPERTIES AND METHODS **

var principalBOM = document.getElementsByClassName("principal")[0];
console.log("innerHeight: ", window.innerHeight);
console.log("innerWidth: ", window.innerWidth);
localStorage.setItem("content", "Coding and Coffee is good");

buttonDOM.addEventListener("mouseover", function () {
    var contentBOM = this.localStorage.getItem("content");
    principalBOM.innerHTML = contentBOM;
    window.history.forward();
    window.history.back();
    window.history.go(3);
});

// ----------------------------------------- . -----------------------------------------
// REMOTE DATA

// *****************************
// *********** FETCH ***********

var buttonFetch = document.getElementById("button");
var containerFetch = document.getElementById("container");
var posts = null;

buttonFetch.addEventListener("click", function () {
    fetch("http://jsonplaceholder.typicode.com/posts")
        .then(data => data.json())
        .then(data => {
            posts = data;
            showData(posts);
        });
});

function showData(posts) {
    posts.map((post, i) => {
        let title = document.createElement("h1");
        let content = document.createElement("p");

        title.innerHTML = (i + 1) + " - " + post.title;
        content.innerHTML = post.body;

        containerFetch.appendChild(title);
        containerFetch.appendChild(content);
    });
}

// ******************************
// ********** PROMISES **********
// *********** ERRORS ***********

var buttonPromise = document.getElementById("button");
var containerPromise = document.getElementById("container");
var contFlags = document.getElementById("flags");
var messagesError = document.getElementById("messages");

buttonPromise.addEventListener("click", function () {
    getPosts()
        .then(data => data.json())
        .then(posts => {
            showData(posts);
            return getCountries();
        })
        .then(data => data.json())
        .then(countries => {
            showFlags(countries);
        })
        .catch(error => {
            messagesError.classList.toggle("hide");
            messagesError.innerHTML = error;
            setTimeout(() => messagesError.classList.toggle("hide"), 3000);
        });
});

function getPosts() {
    return fetch("http://jsonplaceholder.typicode.com/posts");
}

function getCountries() {
    return fetch("http://restcountries.eu/rest/v2/all");
}

function showFlags(countries) {
    contFlags.innerHTML = "";
    countries.map((country, i) => {
        let flag = document.getElementById("img");
        flag.src = country.flag;
        flag.width = "20";
        flag.height = "20";
        contFlags.appendChild(flag);
    });
}

// ----------------------------------------- . -----------------------------------------
// OOP

// *****************************
// ********** CLASSES **********
// ********** METHODS **********
// ******** INHERITANCE ********


// Using classes

class Product {
    constructor(serialNumber) {
        this.serialNumber = serialNumber;
        this.warrantyTime = warrantyTime;
    }

    static get infoShop() {
        console.log(`Products of the Steven Shop`);
    }

    set warranty(value) {
        this.warrantyTime -= value;
    }

    get warranty() {
        return this.warrantyTime;
    }
}

class Screen extends Product {
    constructor(serialNumber, brand, model, size) {
        super(serialNumber);
        this.brand = brand;
        this.model = model;
        this.size = size;
    }

    on() {
        this.warranty = 1;
        console.log(`Screen ${this.brand} turned on`);
    }

    volume() {
        console.log(`Volume modified`);
    }
    info() {
        console.log(`Screen ${this.brand} with model ${this.model} with size ${this.size}`);
    }

    set weight(value) {
        this.kgs = value.trim();
    }

    get weight() {
        return this.kgs;
    }
}

/*
// Old Way - with no classes

function Screen(brand, model, size) {
    this.brand = brand;
    this.model = model;
    this.size = size;
}

Screen.prototype.on = function () {
    console.log(`Screen ${this.brand} turned on`);
}

Screen.prototype.volume = function () {
    console.log(`Volume modified`);
}

Screen.prototype.info = function () {
    console.log(`Screen ${this.brand} with model ${this.model} with size ${this.size}`);
}
*/

const tv1 = new Screen("13578 ", "Samsung", "Oasis", 55);
const tv2 = new Screen("24680", "TCL", "Artemis", 80);