function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function() {
  const loaderContainer = document.getElementById("loader-container");
  loaderContainer.style.display = "flex";

  setTimeout(function() {
    loaderContainer.style.display = "none";

    let currentIndexProfile = 0;
    const profileImages = document.querySelectorAll('.profile-image');

    function showNextProfileImage() {
      profileImages[currentIndexProfile].style.display = 'none';
      currentIndexProfile = (currentIndexProfile + 1) % profileImages.length;
      profileImages[currentIndexProfile].style.display = 'block';
    }

    showNextProfileImage();
    setInterval(showNextProfileImage, 500);

    let currentIndexAbout = 0;
    const aboutImages = document.querySelectorAll('.gallery-image');

    function showNextAboutImage() {
      aboutImages[currentIndexAbout].style.display = 'none';
      currentIndexAbout = (currentIndexAbout + 1) % aboutImages.length;
      aboutImages[currentIndexAbout].style.display = 'block';
    }

    showNextAboutImage();
    setInterval(showNextAboutImage, 900);
  }, 2000); 
});