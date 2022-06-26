"use strict";

//OOP constructor functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

const mopano = new Person("parsa", 2000);
console.log(mopano);
