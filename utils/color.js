import { getRandomNumber } from "../utils/numbers.js";

function getRandomColor() {
  return `hsl( ${getRandomNumber(360)} 50% 50%)`;
}
