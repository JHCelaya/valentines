function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Scroll Screen Logic
const scrollScreen = document.getElementById("scroll-screen");
const valentineScreen = document.getElementById("valentine-screen");
const clickHere = document.getElementById("click-here");
const scrollMessage = document.getElementById("scroll-message");
const gifContainer = document.querySelector(".gif-container");

let isFirstClick = true; // Track if it's the first click

if (scrollScreen) {
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
      gifContainer.classList.remove("hidden"); // Show the GIF
    }
  });
}

function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

if (moveRandom) {
  console.log("Move Random button found!"); // Debugging
  moveRandom.addEventListener("mouseenter", function (e) {
    console.log("Mouse entered!"); // Debugging
    moveRandomEl(e.target);
  });
}