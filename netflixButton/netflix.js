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
    btn.style.setProperty("background-size", "100%");
  }

  if (type === "click") {
    window.location.href = "https://www.netflix.com";
  }

  if (type === "animationend") {
    if (!mouseMoved) {
      window.location.href = "https://www.netflix.com";
    }
  }
}
