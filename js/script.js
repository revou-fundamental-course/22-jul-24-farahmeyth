let slideIndex = 0;
let slides = document.getElementsByClassName("mySlides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex - 1].style.transform = "translateX(0)";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});

// script.js

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const interestSelect = document.getElementById("interest");

    form.addEventListener("submit", (event) => {
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === "") {
            isValid = false;
            alert("Please enter your name.");
        }

        // Validate email
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            isValid = false;
            alert("Please enter a valid email address.");
        }

        // Validate interest
        if (interestSelect.value === "") {
            isValid = false;
            alert("Please select your interest.");
        }

        if (!isValid) {
            event.preventDefault();
        }
    });
});
