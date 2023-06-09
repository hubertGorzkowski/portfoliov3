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

//sliders

let numberOfPhoto1 = 1;
let numberOfPhoto2 = 1;
let numberOfPhoto3 = 1;

const slider = function (arrow, images, photoCounter, picture, whichCounter) {
	if (whichCounter == 1) {
		if (arrow.dataset.direction == "left") {
			if (numberOfPhoto1 == 1) {
				numberOfPhoto1 = images.length;
			} else {
				numberOfPhoto1--;
			}
		} else if (arrow.dataset.direction == "right") {
			if (numberOfPhoto1 == images.length) {
				numberOfPhoto1 = 1;
			} else {
				numberOfPhoto1++;
			}
		}
		picture.src = images[numberOfPhoto1 - 1];
		photoCounter.innerHTML = `${numberOfPhoto1}/${images.length}`;
	} else if (whichCounter == 2) {
		if (arrow.dataset.direction == "left") {
			if (numberOfPhoto2 == 1) {
				numberOfPhoto2 = images.length;
			} else {
				numberOfPhoto2--;
			}
		} else if (arrow.dataset.direction == "right") {
			if (numberOfPhoto2 == images.length) {
				numberOfPhoto2 = 1;
			} else {
				numberOfPhoto2++;
			}
		}
		picture.src = images[numberOfPhoto2 - 1];
		photoCounter.innerHTML = `${numberOfPhoto2}/${images.length}`;
	} else if (whichCounter == 3) {
		if (arrow.dataset.direction == "left") {
			if (numberOfPhoto3 == 1) {
				numberOfPhoto3 = images.length;
			} else {
				numberOfPhoto3--;
			}
		} else if (arrow.dataset.direction == "right") {
			if (numberOfPhoto3 == images.length) {
				numberOfPhoto3 = 1;
			} else {
				numberOfPhoto3++;
			}
		}
		picture.src = images[numberOfPhoto3 - 1];
		photoCounter.innerHTML = `${numberOfPhoto3}/${images.length}`;
	}
};

const whichSlider = function () {
	if (this.dataset.whichslider == "bestSlider") {
		const images = [
			"..//picture/aimTraining1.PNG",
			"..//picture/aimTraining2.PNG",
			"..//picture/aimTraining3.PNG",
			"..//picture/aimTraining4.PNG",
		];
		let photoCounter = document.querySelector(
			"div.bestProject p.numberOfPhotos"
		);
		let whichCounter = 1;
		const picture = document.querySelector(".imgOfProject--best");

		slider(this, images, photoCounter, picture, whichCounter);
	} else if (this.dataset.whichslider == "memorySlider") {
		const images = [
			"..//picture/memoryGame1.PNG",
			"..//picture/memoryGame3.PNG",
			"..//picture/memoryGame2.PNG",
		];
		let photoCounter = document.querySelector("p.numberOfPhotosOther1");
		let whichCounter = 2;
		const picture = document.querySelector(".imgOfProject1");
		slider(this, images, photoCounter, picture, whichCounter);
	} else if (this.dataset.whichslider == "stopwatchSlider") {
		const images = ["..//picture/stopwatch1.PNG", "..//picture/stopwatch2.PNG"];
		let photoCounter = document.querySelector("p.numberOfPhotosOther2");
		let whichCounter = 3;
		const picture = document.querySelector(".imgOfProject2");
		slider(this, images, photoCounter, picture, whichCounter);
	}
};

const arrows = document.querySelectorAll("i.arrowSlider");
arrows.forEach((arrow) => {
	arrow.addEventListener("click", whichSlider);
});

//change main in subpage aboutMe

const circles = [...document.querySelectorAll("div.circle")];
const roadContent = document.querySelector("div.wrapperRoad");
const skillsContent = document.querySelector("div.wrapperSkills");
const mainAboutMe = document.querySelector("main.aboutMe");

const changeContent = function () {
	if (this.dataset.whichcircle == "road") {
		roadContent.style.left = "0%";
		skillsContent.style.left = "150%";
		mainAboutMe.style.backgroundColor = "#7d3434";
	} else if (this.dataset.whichcircle == "skills") {
		roadContent.style.left = "150%";
		skillsContent.style.left = "0%";
		mainAboutMe.style.backgroundColor = "#1a5b84";
	}
};

circles.forEach((circle) => {
	circle.addEventListener("click", changeContent);
});
