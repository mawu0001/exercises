"use strict";

// bliver kaldt inden function + med en variable
// const myName = "Sif";
// sayHello(myName);
// function sayHello(firstName) {
//   console.log(`Hello ${firstName}`);
// }

// kaldt med et string
//sayHello("marie");

//kaldt uden parameter
// sayHello();

// kald med variabler
// const firstName = "Daniella";
// const lastName = "Rezai";

// kan kun kalde det første paramter
// sayHello(firstName, lastName);

// function kaldet med 2 parametrer
const firstName = "Soto";
const animalType = "cat";
const animalName = "Neko";

// kaldet kun med variabler
presentPet(firstName, animalType, animalName);
// indsat med parametrer
function presentPet(firstName, animalType, animalName) {
  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}
//kaldet kun med strings
presentPet("Marie", "dog", "Svend");

// kaldet med strings og variabler
presentPet("Sif", animalType, "svend");
