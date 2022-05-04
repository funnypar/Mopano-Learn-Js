"sue strict";

// The best way for creating map structure is that make them by new map() and then with methods handel them !!!

const maps = new Map();

// Use methods :
maps
  .set("palyer1", "ronaldo")
  .set("player2", "fred")
  .set("player3", "fernandes");

// maps.get(key names);
// maps.clear;
// maps.size;
// maps.delete(key names);

// Log the result
console.log([...maps]);
