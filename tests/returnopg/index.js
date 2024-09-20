"use strict";

function greeting(firstName) {
  return `Hello ${firstName}`;
}

// const result = greeting();
// const txt = `The dog said ${greeting("Marie")}`;

// console.log(txt);

function hvadSagdeHunden(greeting) {
  return `Hunden sagde ${greeting}`;
}

console.log(hvadSagdeHunden(greeting("Marie")));
