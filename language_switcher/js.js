"use strict";
// Definerer et objekt, der indeholder tekster for forskellige sprog.
const texts = {
  de: {
    // Tysk
    texts: [
      { text: "Das Bot", location: ".header span" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    // Dansk
    texts: [
      { text: "Båden", location: ".header span" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// Vælger DOM-elementet "select" for at kunne interagere med det.
const selector = document.querySelector("select");

// Aflæser den aktuelle værdi af det valgte element i dropdown-menuen. - kigger på "option"s værdi
let locale = selector.options[selector.selectedIndex].value;

// Kald funktionen til at opdatere teksten baseret på den nuværende lokalitet. ( locale's værdi)
switchLang(locale);

// Funktion til at opdatere DOM med den korrekte tekst baseret på valgt sprog (locale).
function switchLang(locale) {
  // Itererer over teksten for det valgte sprog og opdaterer DOM-elementerne.
  texts[locale].texts.forEach((elm) => {
    document.querySelector(elm.location).textContent = elm.text; // Sætter den nye tekst.
  });
}

// Lytter efter ændringer i "select"-elementet. Når brugeren ændrer sprog.
selector.addEventListener("change", (event) => {
  locale = event.target.value; // Opdaterer locale med den nye værdi.
  switchLang(locale); // Kald funktionen for at opdatere teksten.
});
