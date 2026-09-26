document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".menu-btn");

    const navigation =
        document.querySelector(".nav-links");


    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

        });

    }


    const year =
        document.getElementById("year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
