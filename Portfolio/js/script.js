/* ==========================================
   MOBILE MENU TOGGLE
========================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/* Close mobile menu when a link is clicked */

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.querySelector(".scroll-progress");

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress =
        (scrollTop / scrollHeight) * 100;

    progressBar.style.width = progress + "%";
});

/* ==========================================
   BACK TO TOP BUTTON
========================================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.style.display = "flex";
    } else {
        backToTop.style.display = "none";
    }
});

backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
   CURSOR GLOW EFFECT
========================================== */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {

    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

});

/* ==========================================
   REVEAL ANIMATION ON SCROLL
========================================== */

const revealElements = document.querySelectorAll(
    ".section, .glass-card, .project-card"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const elementTop =
            element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("show");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ==========================================
   EASTER EGG FEATURE
========================================== */

const logo = document.getElementById("logo");

let clickCount = 0;

logo.addEventListener("click", () => {

    clickCount++;

    if (clickCount === 5) {

        alert(
            "🎉 Thanks for exploring my journey in tech!"
        );

        clickCount = 0;
    }

});

/* ==========================================
   ACTIVE NAVIGATION LINK
========================================== */

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
    "%cWelcome to MATLA NIREEKSHANA's Portfolio 🚀",
    "color:#6366f1; font-size:16px; font-weight:bold;"
);

console.log(
    "Thanks for checking out the code! 😊"
);