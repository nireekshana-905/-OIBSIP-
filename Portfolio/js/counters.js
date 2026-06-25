/* ==========================================
   ANIMATED COUNTERS
========================================== */

const counters = document.querySelectorAll(".counter");

const startCounters = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const increment = Math.ceil(target / 100);

        const updateCounter = () => {

            count += increment;

            if (count < target) {

                counter.textContent = count;

                setTimeout(updateCounter, 20);

            } else {

                counter.textContent = target;
            }
        };

        updateCounter();
    });
};

/* Run counters when section becomes visible */

const statsSection = document.querySelector(".stats");

if (statsSection) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                startCounters();

                observer.unobserve(statsSection);
            }

        });

    }, {
        threshold: 0.4
    });

    observer.observe(statsSection);
}