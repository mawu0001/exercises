const curseWords = [
  { bad: "var", good: "const" },
  { bad: "float", good: "grid" },
  { bad: "marquee", good: "just don't" },
];

let theSentIsSafe = false;
let theText = document.querySelector("p").textContent;
document.querySelector("button").addEventListener("click", replaceBadWords);

function replaceBadWords() {
  if (theSentIsSafe === false) {
    curseWords.forEach((curseWord) => {
      theText = theText.replaceAll(
        curseWord.bad,
        `<span>${curseWord.good}</span>`
      );
    });
    document.querySelector("p").innerHTML = theText;
    theSentIsSafe = true;
  } else {
    document.querySelector("dialog").showModal();
  }
}
