"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//function dec

const balance = movements.reduce(function (acc, cur, i) {
  return acc + cur;
}, 0);

//Arrow function

const balanceArrow = movements.reduce((acc, cur, i) => acc + cur, 0);

// Maximum

const max = movements.reduce(
  (acc, mov) => (acc > mov ? acc : mov),
  movements[0]
);
console.log(max);
