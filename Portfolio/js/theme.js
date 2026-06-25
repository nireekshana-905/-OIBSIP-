/* ==========================================
   DARK / LIGHT MODE TOGGLE
========================================== */

const themeToggle = document.getElementById("themeToggle");
const themeIcon = themeToggle.querySelector("i");

/* Load saved theme */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light-mode");

    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
}

/* Toggle Theme */

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLightMode =
        document.body.classList.contains("light-mode");

    if (isLightMode) {

        localStorage.setItem("theme", "light");

        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

    } else {

        localStorage.setItem("theme", "dark");

        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");
    }

});