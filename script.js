const menu = document.querySelector("nav");

const menuAnimation = function () {
  if (window.scrollY > 60) {
    menu.classList.add("smallerMenu");
  } else if (window.scrollY < 60) {
    menu.classList.remove("smallerMenu");
  }
  console.log(window.scrollY);
};

window.addEventListener("scroll", menuAnimation);
