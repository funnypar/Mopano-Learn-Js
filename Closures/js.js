"use strict";

const closure = function () {
  let counter = 0;
  return function () {
    counter++;
    console.log(`${counter} Closures happend`);
  };
};

const func = closure();

func();
func();
func();

console.dir(func); // With this method of console we can see the properties of functions !!!
// More examples of closures :
