const selector = document.querySelector("select");
const bodyPointer = document.querySelector("body");

let themeValue = selector.options[selector.selectedIndex].value;
change(themeValue);

selector.addEventListener("change", (event) => {
  themeValue = event.target.value;
  change(themeValue);
});

function change() {
  if (themeValue === "fall") {
    bodyPointer.dataset.theme = "fall";
  } else if (themeValue === "light") {
    bodyPointer.dataset.theme = "light";
  } else {
    bodyPointer.dataset.theme = "dark";
  }
}
