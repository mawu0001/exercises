function logRandomNumber() {
  const RandomNumber = Math.round(Math.random() * 100);
  console.log(RandomNumber);

  document.querySelector("#Randomtal").innerText = RandomNumber;
}

logRandomNumber();
