function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (menu && icon) {
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
}


/* ========================================
   PROFILE SCROLL ANIMATION
======================================== */

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

  if (!profileSection || !elishaText || !marayagText) {
    return;
  }

  if (!isScrollingUp) {
    elishaText.classList.add("fade-out");
    marayagText.classList.add("fade-out");
  } else {
    const profileSectionTop = profileSection.offsetTop;
    const profileSectionBottom =
      profileSectionTop + profileSection.offsetHeight;

    if (
      scrollY >= profileSectionTop &&
      scrollY <= profileSectionBottom
    ) {
      elishaText.classList.remove("fade-out");
      marayagText.classList.remove("fade-out");
    }
  }
}

document.addEventListener("scroll", handleScroll);


/* ========================================
   ABOUT IMAGE SCROLL ANIMATION
======================================== */

document.addEventListener("DOMContentLoaded", function () {

  const aboutImage = document.querySelector(".left-image");

  let lastScrollY = window.scrollY;

  function handleScrollAbout() {
    if (!aboutImage) return;

    const scrollY =
      window.scrollY || window.pageYOffset;

    const scaleFactor = Math.max(
      1 - scrollY / window.innerHeight,
      0.4
    );

    aboutImage.style.transform =
      `scale(${scaleFactor})`;
  }

  window.addEventListener(
    "scroll",
    handleScrollAbout
  );


  function handleProfileScroll() {

    const scrollY =
      window.scrollY || window.pageYOffset;

    if (scrollY > lastScrollY) {
      isScrollingUp = false;
    } else {
      isScrollingUp = true;
    }

    lastScrollY = scrollY;

    if (
      !profileSection ||
      !elishaText ||
      !marayagText
    ) {
      return;
    }


    if (!isScrollingUp) {

      elishaText.classList.add(
        "fade-out",
        "move-right"
      );

      marayagText.classList.add(
        "fade-out",
        "move-right"
      );

    } else {

      const profileSectionTop =
        profileSection.offsetTop;

      const profileSectionBottom =
        profileSectionTop +
        profileSection.offsetHeight;


      if (
        scrollY >= profileSectionTop &&
        scrollY <= profileSectionBottom
      ) {

        elishaText.classList.remove(
          "fade-out",
          "move-right"
        );

        marayagText.classList.remove(
          "fade-out",
          "move-right"
        );

      }
    }
  }

  window.addEventListener(
    "scroll",
    handleProfileScroll
  );

});


/* ========================================
   LOADING SCREEN + IMAGE SLIDESHOW
======================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    const loaderContainer =
      document.getElementById(
        "loader-container"
      );


    if (loaderContainer) {

      loaderContainer.style.display = "flex";

      setTimeout(function () {

        loaderContainer.style.display =
          "none";


        /* PROFILE IMAGES */

        let currentIndexProfile = 0;

        const profileImages =
          document.querySelectorAll(
            ".profile-image"
          );


        function showNextProfileImage() {

          if (profileImages.length === 0) {
            return;
          }

          profileImages[
            currentIndexProfile
          ].style.display = "none";

          currentIndexProfile =
            (currentIndexProfile + 1) %
            profileImages.length;

          profileImages[
            currentIndexProfile
          ].style.display = "block";

        }


        if (profileImages.length > 0) {

          showNextProfileImage();

          setInterval(
            showNextProfileImage,
            500
          );

        }


        /* ABOUT IMAGES */

        let currentIndexAbout = 0;

        const aboutImages =
          document.querySelectorAll(
            ".gallery-image"
          );


        function showNextAboutImage() {

          if (aboutImages.length === 0) {
            return;
          }

          aboutImages[
            currentIndexAbout
          ].style.display = "none";

          currentIndexAbout =
            (currentIndexAbout + 1) %
            aboutImages.length;

          aboutImages[
            currentIndexAbout
          ].style.display = "block";

        }


        if (aboutImages.length > 0) {

          showNextAboutImage();

          setInterval(
            showNextAboutImage,
            700
          );

        }

      }, 3500);

    }

  }
);


/* ========================================
   WORKS / INSTAGRAM STYLE POPUP
======================================== */

document.addEventListener(
  "DOMContentLoaded",
  function () {

    /* Get every project */

    const projects =
      document.querySelectorAll(
        ".work-image-container"
      );


    /* Get popup elements */

    const modal =
      document.getElementById(
        "artModal"
      );

    const modalImage =
      document.getElementById(
        "modalImage"
      );

    const modalTitle =
      document.getElementById(
        "modalTitle"
      );

    const modalDetails =
      document.getElementById(
        "modalDetails"
      );

    const modalDescription =
      document.getElementById(
        "modalDescription"
      );

    const modalLink =
      document.getElementById(
        "modalLink"
      );

    const modalClose =
      document.getElementById(
        "modalClose"
      );


    /*
      Stop if the modal doesn't exist.

      This prevents errors from breaking
      your other JavaScript.
    */

    if (!modal) {
      return;
    }


    /* ==================================
       CLICK PROJECT
    ================================== */

    projects.forEach(
      function (project) {

        /* Makes it obviously clickable */

        project.style.cursor = "pointer";


        project.addEventListener(
          "click",
          function () {

            /* Get information from HTML */

            const image =
              this.dataset.image;

            const title =
              this.dataset.title;

            const details =
              this.dataset.details;

            const description =
              this.dataset.description;

            const link =
              this.dataset.link;

            const button =
              this.dataset.button;


            /* Insert information */

            if (modalImage) {
              modalImage.src =
                image || "";
            }


            if (modalTitle) {
              modalTitle.textContent =
                title || "";
            }


            if (modalDetails) {
              modalDetails.textContent =
                details || "";
            }


            if (modalDescription) {
              modalDescription.textContent =
                description || "";
            }


            /* ==========================
               PROJECT LINK
            ========================== */

            if (modalLink) {

              if (link) {

                modalLink.href = link;

                modalLink.textContent =
                  button ||
                  "View Project";

                modalLink.style.display =
                  "inline-block";

              } else {

                modalLink.style.display =
                  "none";

              }

            }


            /* ==========================
               OPEN POPUP
            ========================== */

            modal.classList.add(
              "active"
            );


            /* Stop page behind modal
               from scrolling */

            document.body.style.overflow =
              "hidden";

          }
        );

      }
    );


    /* ==================================
       CLOSE BUTTON
    ================================== */

    if (modalClose) {

      modalClose.addEventListener(
        "click",
        function () {

          closeProjectModal();

        }
      );

    }


    /* ==================================
       CLICK OUTSIDE MODAL
    ================================== */

    modal.addEventListener(
      "click",
      function (event) {

        /*
          Only close when the dark
          background itself is clicked.
        */

        if (event.target === modal) {

          closeProjectModal();

        }

      }
    );


    /* ==================================
       ESC KEY
    ================================== */

    document.addEventListener(
      "keydown",
      function (event) {

        if (
          event.key === "Escape" &&
          modal.classList.contains(
            "active"
          )
        ) {

          closeProjectModal();

        }

      }
    );


    /* ==================================
       CLOSE FUNCTION
    ================================== */

    function closeProjectModal() {

      modal.classList.remove(
        "active"
      );

      document.body.style.overflow =
        "";

    }

  }
);