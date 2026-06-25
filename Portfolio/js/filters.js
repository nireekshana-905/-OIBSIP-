/* ==========================================
   PROJECT FILTERING
========================================== */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* Remove active state */

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");

        projectCards.forEach(card => {

            const category =
                card.getAttribute("data-category");

            if (
                filter === "all" ||
                category.includes(filter)
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";
            }

        });

    });

});