"use strict"

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

// ******************************
// **** Arithmetic Operators ****

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
// **** Relational Operators ****

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
// ***** Logical Operators *****

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
// **** Assignment Operators ****

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
// ***** Negative Operators *****

var dataC = -dataA;
console.log('data A: ' + dataA + ', and his negative: ' + dataC);

// *******************************
// *** Concatenation Operators ***

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
// *** Conditional Operators ***

// Condition = ? TRUE : FALSE
var result = dataA > dataB ? "It's greater than" : "It's not greater than";
console.log('The conditional result: ' + result);

// *****************************
// **** Data Type Operators ****

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