"use strict";

//OOP constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mopano = new Person("parsa", 2000);
console.log(mopano);

// Add methods ( prototype:) )
Person.prototype.calcAge = function () {
  console.log(`${this.firstName} is ${2022 - this.birthYear} years old :)`);
};

mopano.calcAge();

//Add property to prototype
Person.prototype.language = "Persich";

console.log(mopano.language);

//Prototype chain
console.log(mopano.__proto__);
console.log(mopano.__proto__.__proto__);
console.log(mopano.__proto__.__proto__.__proto__);

//You can add some methods to prototype of Arrays or ...
console.log(Array.prototype);
Array.prototype.unique = function () {
  // You added method in array prototype
  return [...new Set(this)];
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11];
console.log(arr.unique());
