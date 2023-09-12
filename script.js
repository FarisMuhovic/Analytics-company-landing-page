const hamburgerBtn = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburgerBtn.addEventListener("click", () => {
  navLinks.classList.toggle("nav-links-opened");
  hamburgerBtn.classList.toggle("ham-active");
});
