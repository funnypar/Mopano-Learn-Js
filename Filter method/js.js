"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// With function dec

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

// With Arrow function

const withdraw = movements.filter((mov) => mov < 0);

console.log(withdraw);
console.log(deposits);
