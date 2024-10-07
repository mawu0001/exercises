const selector = document.querySelector("select");
const bodyPointer = document.querySelector("body");

// Aflæser den aktuelle værdi af det valgte element i dropdown-menuen. - kigger på "option"s værdi
let themeValue = selector.options[selector.selectedIndex].value;

// kør funktion, med valgte theme
change(themeValue);

// lytter på ændringer i drop-down menuen, og starter funktionen derefter
selector.addEventListener("change", (event) => {
  themeValue = event.target.value;
  change(themeValue);
});

// bestemmer hvilket data-theme den giver afhænger af conditionals - if-sætningerne
function change() {
  if (themeValue === "fall") {
    bodyPointer.dataset.theme = "fall";
  } else if (themeValue === "light") {
    bodyPointer.dataset.theme = "light";
  } else {
    bodyPointer.dataset.theme = "dark";
  }
}
