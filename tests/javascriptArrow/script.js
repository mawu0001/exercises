// function greeting(firstName) {
//   return `Hello ${firstName}`;
// }

// const sayHi = greeting;

// console.log(sayHi("harry"));
// console.log(greeting("Harry"));

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: true,
};
const person4 = {
  firstName: "Fred",
  lastName: "Weasly",
  hired: false,
};

console.log(person4);
hire(person4);
console.log(person4);

function fireOrHire(action, person) {
  action(person);
}

fireOrHire(fire, person3);
console.log(person3);
