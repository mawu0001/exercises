import { $, $$ } from "../utils/dom.js";
const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theText =
  " Programmering er sjovt! Men husk altid at bruge var, float og marquee i moderne kodning.";

const btn = $("button");

logText();

function logText() {
  $("p").innerText = theText;
}

btn.addEventListener("mousedown", replaceWords());

function replaceWords() {}

// replaceWords()
