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

// Second Example

const boerdingPassengers = function (n, wait) {
  const preGroup = n / 3;

  setTimeout(() => {
    console.log(`Boarding all ${n} passengers`);
    console.log(
      `There are 3 group passengers that divided and there are ${preGroup} in each !!!`
    );
  }, wait * 1000);
  console.log(`Boarding will start in ${wait} seconds`);
};

boerdingPassengers(180, 3);
