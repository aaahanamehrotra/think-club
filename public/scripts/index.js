const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-right");
hamburger.addEventListener("click", toggleFunc);

function toggleFunc() {
  navMenu.classList.toggle("active");
  console.log(navMenu.classList);
}
