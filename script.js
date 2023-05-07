//navigation animation
const menu = document.querySelector("nav");

const menuAnimation = function () {
  if (window.scrollY > 60) {
    menu.classList.add("smallerMenu");
  } else if (window.scrollY < 60) {
    menu.classList.remove("smallerMenu");
  }
};

window.addEventListener("scroll", menuAnimation);

//slider in div bestProject
const bestProjectImages = [
  "..//picture/aimTraining1.PNG",
  "..//picture/aimTraining2.PNG",
  "..//picture/aimTraining3.PNG",
  "..//picture/aimTraining4.PNG",
];

let numberOfPhoto = 1;
let infoAboutPhoto = document.querySelector("p.numberOfPhotos");
const image = document.querySelector(".imgOfProject--best");

const slider = function () {
  if (this.classList.value == "fas fa-arrow-left arrowSlider") {
    if (numberOfPhoto == 1) {
      numberOfPhoto = 4;
    } else {
      numberOfPhoto--;
    }
    image.src = `..//picture/aimTraining${numberOfPhoto}.PNG`;
  } else if (this.classList.value == "fas fa-arrow-right arrowSlider") {
    if (numberOfPhoto == 4) {
      numberOfPhoto = 1;
    } else {
      numberOfPhoto++;
    }
    image.src = `..//picture/aimTraining${numberOfPhoto}.PNG`;
  }
  infoAboutPhoto.innerHTML = `${numberOfPhoto}/4`;
};

const arrows = document.querySelectorAll("i.arrowSlider");
arrows.forEach((arrow) => {
  arrow.addEventListener("click", slider);
});
