function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

function sendLove() {
  const name = getQueryParam("name") || "Someone Special";
  const message = document.getElementById("message");
  message.innerHTML = `You're loved, ${name}! ❤️`;
  message.style.opacity = 1;

  // Create confetti effect
  for (let i = 0; i < 50; i++) {
    setTimeout(createHeart, i * 100);
  }
}

// Scroll Screen Logic
const scrollScreen = document.getElementById("scroll-screen");
const valentineScreen = document.getElementById("valentine-screen");
const scrollMessage = document.getElementById("scroll-message");

scrollScreen.addEventListener("click", () => {
  // Show the message inside the scroll
  scrollMessage.style.opacity = 1;

  // Wait for the scroll animation to finish, then transition to the Valentine's screen
  setTimeout(() => {
    scrollScreen.style.display = "none"; // Hide the scroll screen
    valentineScreen.classList.remove("hidden"); // Show the Valentine's screen
    sendLove(); // Trigger the Valentine's confetti and message
  }, 2000); // Adjust timing based on your GIF duration
});