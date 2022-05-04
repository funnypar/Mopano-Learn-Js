"use strict";

// The beeter way for add some keys and values to a Map structure :

const maps = new Map([
  ["player1", "ronaldo"],
  ["player2", "fred"],
  ["player3", "cavani"],
]);

//Convert objects to map :

const obj = {
  sat: "20 pm",
  son: "21 pm",
  mon: "22 pm",
};

const objMap = new Map(Object.entries(obj));

// console.log(objMap);

// Convert object to array :

console.log([...maps]);
