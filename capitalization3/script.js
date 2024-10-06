const aName = "Peter";

const thirdUpper = aName
  .substring(0, 2)
  .toLowerCase()
  .concat(aName[2].toUpperCase(), aName.substring(3).toLowerCase());

console.log(thirdUpper);
