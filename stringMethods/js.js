"use strict";

const player = "cristiano ronaldo";

// console.log(player[0]);
// console.log(player[1]);
// console.log(player[2]);
// console.log(player[3]);
// console.log(player[4]);

console.log("mopano"[2]);

console.log(player.length); // Showing the length of strings

console.log(player.indexOf("r")); //Showing the first time find 'r' in string
console.log(player.lastIndexOf("r")); //Showing the last time find 'r' in string
console.log(player.indexOf("ronaldo"));

console.log(player.slice(10)); //Showing the slice from this point to the end
console.log(player.slice(0, 9)); //Showimg the slice from this point until last point but doesn't include 9 !!!

console.log(player.slice(0, player.indexOf(" ")));
console.log(player.slice(player.lastIndexOf("r")));

console.log(player.toLowerCase()); //Convert strings into lowerCase
console.log(player.toUpperCase()); //Convert strings into upperCase

//Correct Player Name is :

const correctPlayer =
  player[0].toUpperCase() +
  player.slice(1, player.indexOf(" ")) +
  " " +
  player[10].toUpperCase() +
  player.slice(11);
console.log(correctPlayer);

//

const email = "  p.r.7.norouzi@gmail.com  \n";
console.log(email.trim());

//

const geld = "299,45!";
console.log(geld.replace(",", ".").replace("!", "$"));

//

console.log(player.includes("ronaldo"));
console.log(player.startsWith("crist"));
console.log(player.endsWith("ronaldo"));
