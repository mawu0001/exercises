import { $, $$ } from "../utils/dom.js";
import { getRandomNumber } from "../utils/numbers.js";

function logRandomNumber() {
  const RandomNumber = getRandomNumber(100);

  $(".Randomtal").innerText = RandomNumber;
}

logRandomNumber();
