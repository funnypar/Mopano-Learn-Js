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

let f;

const firstFunc = function () {
  const a = 55;
  f = function () {
    console.log(a * 2);
  };
};

const secondFunc = function () {
  const b = 100;
  f = function () {
    console.log(b * 2);
  };
};

firstFunc();
f();
secondFunc();
f();
