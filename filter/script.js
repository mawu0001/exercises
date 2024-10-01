const vehicles = [
  {
    type: "Bus",
    fuel: "Diesel",
    passengers: 45,
    stops: ["Nørrebrogade", "Elmegade"],
  },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 0,
    ownedBy: "Jonas",
    isElectric: true,
  },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  {
    type: "Cykel",
    fuel: "Rugbrød",
    passengers: 2,
    ownedBy: "Vingegård",
    isTandem: true,
  },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

// henter knapper ind
const tbodyPointer = document.querySelector("tbody");
const btnAll = document.querySelector(".all");
const btnElectric = document.querySelector(".electric");
const btnTwoPlus = document.querySelector(".twoPlus");
const btnElectricJ = document.querySelector(".electricJ");
const btnOnePlus = document.querySelector(".onePlus");

// kalder funktion
showTheseVehicles(vehicles);

// lytter på klik, og sender derefter videre til korrekte funktion
btnElectric.addEventListener("click", () => {
  showTheseVehicles(allElectric);
});
btnAll.addEventListener("click", () => {
  showTheseVehicles(vehicles);
});
btnTwoPlus.addEventListener("click", () => {
  showTheseVehicles(twoMoreSeats);
});
btnElectricJ.addEventListener("click", () => {
  showTheseVehicles(electricJonas);
});
btnOnePlus.addEventListener("click", () => {
  showTheseVehicles(RyeTwoMore);
});

// filter: electric vehicles
const allElectric = vehicles.filter(electricVehicle);
function electricVehicle(vehicle) {
  if (vehicle.isElectric) {
    return true;
  }
}

// filter two mere sæder
const twoMoreSeats = vehicles.filter(twoOrMoreSeats);
function twoOrMoreSeats(seats) {
  if (seats.passengers > 2) {
    return true;
  }
}

// filter electric + owned by Jonas
const electricJonas = vehicles.filter(isElectricJonas);
function isElectricJonas(vehicle) {
  if (vehicle.isElectric && vehicle.ownedBy === "Jonas") {
    return true;
  }
}

// filter rugbrød + two+
const RyeTwoMore = vehicles.filter(isBreadOnePlus);
function isBreadOnePlus(vehicle) {
  if (vehicle.fuel === "Rugbrød" && vehicle.passengers > 1) {
    return true;
  }
}

// funktion for at tilføje indhold til tabel
function showTheseVehicles(arr) {
  //tøm tabel
  tbodyPointer.innerHTML = "";

  // tilføj ud fra filter array
  arr.forEach((each) => {
    tbodyPointer.innerHTML += `<tr>
  <td>${erDuflot(each.type)}</td>
  <td>${erDuflot(each.fuel)}</td>
  <td>${erDuflot(each.passengers)}</td> 
  <td>${erDuflot(each.stops)}</td>
  <td>${erDuflot(each.ownedBy)}</td>
  <td>${erDuflot(each.isElectric)}</td>
  <td>${erDuflot(each.isTandem)}</td>
</tr>`;
  });
}

// fjerner udefineret indhold, tilføjer "x" ved true, ellers skal indhold bare være der
function erDuflot(word) {
  if (word === true) {
    return "X";
  } else if (word === undefined) {
    return "";
  } else {
    return word;
  }
}
