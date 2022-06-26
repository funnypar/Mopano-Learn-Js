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
