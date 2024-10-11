// Hent det gemte tema fra localStorage (hvis det findes)
const themeRetrievedFromLocalStorage = localStorage.getItem("theme");

// Hent drop-down elementet til tema-selector
const dropDown = document.querySelector("#theme-selector");

// Log det hentede tema til konsollen (bruges til debugging)
console.log("themeRetrieved", themeRetrievedFromLocalStorage);

// Tjek om der er et gemt tema i localStorage
if (themeRetrievedFromLocalStorage !== null) {
    // Hvis et tema er fundet, sæt det som tema på <body>
    document.querySelector("body").dataset.theme = themeRetrievedFromLocalStorage;
    // Sæt drop-down menuens værdi til det gemte tema
    dropDown.value = themeRetrievedFromLocalStorage;
}
// Tilføj en event listener til drop-down, der lytter efter ændringer
dropDown.addEventListener("change", handleThemeChange);

// Funktion der håndterer ændringer i temaet når brugeren vælger et nyt tema i drop-down
function handleThemeChange(event) {
    // Hent den valgte værdi fra drop-down (det valgte tema)
    const chosenTheme = event.target.value;

    // Log det valgte tema til konsollen (bruges til debugging)
    console.log("themechosen", chosenTheme);

    // Sæt det valgte tema som data-theme-attribut på <body>
    document.querySelector("body").dataset.theme = chosenTheme;

    // Gem det valgte tema i localStorage, så det huskes ved næste sideindlæsning
    localStorage.setItem("theme", chosenTheme);
}