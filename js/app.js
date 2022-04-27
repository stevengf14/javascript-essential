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

