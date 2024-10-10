const btn = document.querySelector("button");
const body = document.querySelector("body");

body.addEventListener("click", delegateEvent);
body.addEventListener("animationend", delegateEvent);
body.addEventListener("mouseover", delegateEvent);

let mouseMoved = false;

function delegateEvent(event) {
  const type = event.type;

  if (type === "mouseover") {
    mouseMoved = true;
    // body.style.setProperty("background-color", "#ff00ff");
    btn.style.setProperty("background-size", "100%");
  }

  if (type === "click") {
    // body.style.setProperty("background-color", "#ff0000");
    window.location.href = "https://www.netflix.com";
  }

  if (type === "animationend") {
    if (!mouseMoved) {
      //   body.style.setProperty("background-color", "#00ff00");
      window.location.href = "https://www.netflix.com";
    }
  }
}
