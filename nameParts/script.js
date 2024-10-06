const fullName = "Sif Makane Hansen";

const firstName = fullName.substring(0, fullName.indexOf(" "));
console.log(firstName);

const middleName = fullName
  .substring(fullName.indexOf(" ") + 1, fullName.lastIndexOf(" "))
  .trim();
console.log(middleName);

const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);
console.log(lastName);
