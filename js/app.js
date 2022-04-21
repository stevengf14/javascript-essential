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