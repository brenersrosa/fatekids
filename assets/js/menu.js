const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelector(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

var scene = document.getElementById("scene");
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});
parallaxInstance.friction(0.2, 0.2);
