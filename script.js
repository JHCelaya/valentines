function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);
});

// Scroll Screen Logic
const scrollScreen = document.getElementById("scroll-screen");
const valentineScreen = document.getElementById("valentine-screen");
const clickHere = document.getElementById("click-here");
const scrollMessage = document.getElementById("scroll-message");

let isFirstClick = true; // Track if it's the first click

scrollScreen.addEventListener("click", () => {
  if (isFirstClick) {
    // First click: Show the message and hide "Click Here!"
    clickHere.classList.add("hidden");
    scrollMessage.classList.remove("hidden");
    isFirstClick = false; // Update the state
  } else {
    // Second click: Hide the scroll screen and show the Valentine's screen
    scrollScreen.style.display = "none";
    valentineScreen.classList.remove("hidden");
    sendLove(); // Trigger the Valentine's confetti and message
  }
});