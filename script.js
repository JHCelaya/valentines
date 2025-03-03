
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

// Trigger the confetti and message on page load
window.onload = sendLove;
