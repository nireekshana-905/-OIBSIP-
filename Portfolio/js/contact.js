/* ==========================================
   CONTACT FORM VALIDATION
========================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Email validation pattern
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Name validation
        if (name.length < 2) {
            alert("Please enter a valid name.");
            return;
        }

        // Email validation
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Subject validation
        if (subject.length < 3) {
            alert("Please enter a valid subject.");
            return;
        }

        // Message validation
        if (message.length < 10) {
            alert("Message should contain at least 10 characters.");
            return;
        }

        // Success Message
        alert("✅ Thank you for contacting me! Your message has been received.");

        // Reset the form
        contactForm.reset();

    });

}