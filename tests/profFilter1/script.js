let theText =
  "Jeg er en tekst hvor nogle ord skal skiftes ud med nogle andre ord";

const modText1 = theText.replaceAll("ord", "ting");
console.log(modText1);

const modText2 = theText.split("ord").join("ting");

console.log(modText2);
