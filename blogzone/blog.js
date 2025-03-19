const hamburgericon = document.querySelector('#hamburger-menu');
const navbar = document.querySelector("#navbar");

hamburgericon.addEventListener('click', e => {
    e.preventDefault();

    hamburgericon.classList.toggle("open");
    navbar.classList.toggle("show");
    navbar.classList.toggle("hidden");
})