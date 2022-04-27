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

// ******************************
// ***** Logical Operators ******

// AND - &&
var and = dataA > 10 && dataB > 10;
console.log(dataA + ' > ' + 10 + ' && ' + dataB + ' > ' + 10 + ' = ' + and);

// OR - || 
var or = dataA > 10 || dataB > 10;
console.log(dataA + ' > ' + 10 + ' || ' + dataB + ' > ' + 10 + ' = ' + or);

// NOT 
var not = !(dataA > 10);
console.log('!(' + dataA + ' > ' + 10 + ') = ' + not);

// *******************************
// **** Assignment Operators *****

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

// *******************************
// ***** Negative Operators ******

var dataC = -dataA;
console.log('data A: ' + dataA + ', and his negative: ' + dataC);