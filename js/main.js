
function callFunction() {
    console.log("Hello World");
}

const mobileMenu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");

function openMenu() {
    mobileMenu.style.display = "flex";
    body.style.overflowY = "hidden";
}

function closeMenu() {
    mobileMenu.style.display = "none";
    body.style.overflowY = "scroll";
}