/* ==========================================
   TYPING ANIMATION
========================================== */

const typingElement = document.querySelector(".typing-text");

const words = [
    "AI Enthusiast",
    "Web Developer",
    "Problem Solver",
    "Lifelong Learner"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentWord.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentWord.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    const speed = isDeleting ? 70 : 120;

    setTimeout(typeEffect, speed);
}

/* Start Animation */

document.addEventListener("DOMContentLoaded", () => {

    if (typingElement) {
        typeEffect();
    }

});