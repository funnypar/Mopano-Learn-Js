"use strict";

const smaller = function (strings) {
  const string = strings.trim().replaceAll(" ", "").toLowerCase();
  console.log(string);
};

const transform = function (str, trans) {
  trans(str);
};

// transform("I am a programmer!", smaller);

// Returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHay = greet("Hey");
greeterHay("parsa");

greet("hello")("Mopano");

// Arrow function challenge

const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);

greetArr("hi")("Mopano");
