function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const profileSection = document.getElementById("profile");
const elishaText = document.getElementById("elisha");
const marayagText = document.getElementById("marayag");

let isScrollingUp = false;
let lastScrollY = 0;

function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > lastScrollY) {
    isScrollingUp = false;
  } else {
    isScrollingUp = true;
  }

  lastScrollY = scrollY;

  if (!isScrollingUp) {
    elishaText.classList.add("fade-out");
    marayagText.classList.add("fade-out");
  } else {
    const profileSectionTop = profileSection.offsetTop;
    const profileSectionBottom = profileSectionTop + profileSection.offsetHeight;

    if (scrollY >= profileSectionTop && scrollY <= profileSectionBottom) {
      elishaText.classList.remove("fade-out");
      marayagText.classList.remove("fade-out");
    }
  }
}

document.addEventListener("scroll", handleScroll);

document.addEventListener("DOMContentLoaded", function () {
  const aboutImage = document.querySelector(".left-image");
  let lastScrollY = window.scrollY;

  function handleScrollAbout() {
    const scrollY = window.scrollY || window.pageYOffset;
    const scaleFactor = Math.max(1 - scrollY / window.innerHeight, 0.4); 

    aboutImage.style.transform = `scale(${scaleFactor})`;
  }

  window.addEventListener("scroll", handleScrollAbout);

  function handleScroll() {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > lastScrollY) {
      isScrollingUp = false;
    } else {
      isScrollingUp = true;
    }

    lastScrollY = scrollY;

    if (!isScrollingUp) {
      elishaText.classList.add("fade-out", "move-right");
      marayagText.classList.add("fade-out", "move-right");
    } else {
      const profileSectionTop = profileSection.offsetTop;
      const profileSectionBottom = profileSectionTop + profileSection.offsetHeight;

      if (scrollY >= profileSectionTop && scrollY <= profileSectionBottom) {
        elishaText.classList.remove("fade-out", "move-right");
        marayagText.classList.remove("fade-out", "move-right");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
});

document.addEventListener("DOMContentLoaded", function () {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.display = "flex";

  setTimeout(function () {
    loaderContainer.style.display = "none";

    let currentIndexProfile = 0;
    const profileImages = document.querySelectorAll(".profile-image");

    function showNextProfileImage() {
      profileImages[currentIndexProfile].style.display = "none";
      currentIndexProfile = (currentIndexProfile + 1) % profileImages.length;
      profileImages[currentIndexProfile].style.display = "block";
    }

    showNextProfileImage();
    setInterval(showNextProfileImage, 500);

    let currentIndexAbout = 0;
    const aboutImages = document.querySelectorAll(".gallery-image");

    function showNextAboutImage() {
      aboutImages[currentIndexAbout].style.display = "none";
      currentIndexAbout = (currentIndexAbout + 1) % aboutImages.length;
      aboutImages[currentIndexAbout].style.display = "block";
    }

    showNextAboutImage();
    setInterval(showNextAboutImage, 700);
  }, 3500);
});
