import { $, $$ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";

function logRandomNumber() {
  // const RandomNumber = Math.round(Math.random() * 100);
  const RandomNumber = getRandomNumber(100);
  console.log(RandomNumber);

  $("#Randomtal").innerText = RandomNumber;
}

logRandomNumber();
