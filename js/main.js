document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const mainNav = document.querySelector(".main-nav");

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", function () {
            mainNav.classList.toggle("active");
        });
    }

    const yearElements = document.querySelectorAll(".year");

    yearElements.forEach(function (element) {
        element.textContent = new Date().getFullYear();
    });

});
