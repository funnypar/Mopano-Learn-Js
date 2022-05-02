"use strict";

//Creating Restaurant's menue

const restaurant = {
  days: {
    sat: "close",
    son: "close",
    mon: "open",
    tue: "open",
    wed: "open",
  },
};

const days = ["sat", "son", "mon", "tue", "wed", "thue", "fri"];

const opens = [];

for (const day of days) {
  opens.push(restaurant.days?.[day]);
}

console.log(opens);
