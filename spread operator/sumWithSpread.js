"use strict";

const addieren = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(`Sum of your numbers is ${sum}`);
};

const numbs = [2, 3, 5, 10];
// addieren(10, 1, 2, 20, 25);
// addieren(numbs);                  : This does'nt work because that is []
addieren(...numbs);
