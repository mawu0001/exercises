"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header span" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header span" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

// sætter variable på dom element "select"
const selector = document.querySelector("select");

// i select-elementet, kigger i array af options(options), tager det "valgte" elememnt (selectedIndex) og aflæser dens værdi (value).
let locale = selector.options[selector.selectedIndex].value;

switchLang(locale);

function switchLang(locale) {
  texts[locale].texts.forEach((elm) => {
    document.querySelector(elm.location).textContent = elm.text;
  });
}

selector.addEventListener("change", (event) => {
  locale = event.target.value;
  switchLang(locale);
});
