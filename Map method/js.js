"use strict";

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

//Function dec

const movementsUsd = movements.map(function (mov) {
  return mov * eurToUsd;
});

//Arrow function

const movementsUsdArrow = movements.map((mov) => mov * eurToUsd);

//with if statements

const movementsUsdDescription = movements.map((mov, i) => {
  if (mov > 0) {
    return `Movement ${i + 1} : You deposited ${mov}`;
  } else {
    return `Movement ${i + 1} : You withdraw ${mov}`;
  }
});

//with tarnary

const movementsUsdDescriptionT = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? "deposited" : "withdraw"} ${mov}`
);

console.log(movementsUsdDescriptionT);

console.log(movements);
console.log(movementsUsdArrow);
