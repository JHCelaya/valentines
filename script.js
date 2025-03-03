document.addEventListener("DOMContentLoaded", () => {
    let noClicks = 1;
    const maxNoClicks = 4;
    const minNoScale = 0.65;
    let noScale = 1;
    let yesScale = 1;

    // Select elements
    const gifElement = document.getElementById("togepi-gif");
    const scrollGif = document.getElementById("scroll-img");
    const questionContainer = document.getElementById("question-container");
    const noButton = document.getElementById("no-btn");
    const yesButton = document.getElementById("yes-btn");
    const buttonContainer = document.querySelector(".btn-container");

    // Get computed styles for scaling
    const yesButtonStyle = window.getComputedStyle(yesButton);
    const maxYesWidth = parseFloat(yesButtonStyle.maxWidth);

    // GIFs for reactions
    const gifs = [
        "assets/images/togepi-happy.gif",
        "assets/images/togepi-sad-1.gif",
        "assets/images/togepi-sad-2.gif",
        "assets/images/togepi-crying.gif"
    ];

    // Messages for "No" button
    const buttonMessages = [
        "Are you sure??",
        "Pookie please",
        "Pookie PLEASE",
        "You can't do this to me!"
    ];

    // 🎀 Step 1: Show the scroll GIF, hide the question section initially
    scrollGif.style.display = "block";
    questionContainer.style.display = "none";

    // 🎀 Step 2: Stop GIF & Switch to Final Frame After Play (~3 sec)
    setTimeout(() => {
        scrollGif.src = "assets/images/scroll-open.png"; // Use a still image of the opened scroll
    }, 3000);

    // 🎀 Step 3: After another second, show the question section
    setTimeout(() => {
        scrollGif.style.display = "none";
        questionContainer.style.display = "block";
    }, 4000);

    // 🎀 Step 4: Handle "No" button clicks
    noButton.addEventListener("click", () => {
        if (noClicks < maxNoClicks) {
            // Update GIF
            gifElement.src = gifs[noClicks];
        }

        // Update "No" button text
        noButton.textContent = buttonMessages[noClicks % maxNoClicks];

        // Adjust button width dynamically
        noButton.style.width = 'auto';
        noButton.style.width = `${noButton.scrollWidth}px`;

        // Decrease "No" button size
        if (noScale > minNoScale) {
            noScale -= 0.1;
            noButton.style.transform = `scale(${noScale})`;
        }

        // Increase "Yes" button size
        const baseWidth = parseFloat(yesButtonStyle.width);
        const scaledWidth = baseWidth * yesScale;

        if (scaledWidth < maxYesWidth) {
            yesScale += 0.5;
            yesButton.style.transform = `scale(${yesScale})`;

            // Dynamically adjust button spacing
            const rootStyles = getComputedStyle(document.documentElement);
            const gapScaleFactor = parseFloat(rootStyles.getPropertyValue("--gap-scale-factor")) || 250;
            const currentGap = parseFloat(buttonContainer.style.gap) || 20;
            buttonContainer.style.gap = `${Math.sqrt(currentGap * gapScaleFactor)}px`;
        }

        noClicks++;
    });
});
