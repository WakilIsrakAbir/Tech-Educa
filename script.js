const menuBtn = document.getElementById("menu-btn");
const menuClose = document.getElementById("menu-close");
const navLinks = document.querySelector("nav .navigation ul");

menuBtn.addEventListener("click", () => {
    navLinks.classList.add("active");
});

menuClose.addEventListener("click", () => {
    navLinks.classList.remove("active");
});