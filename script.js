/* =========================================================
   ELISHA MARAYAG PORTFOLIO
   MAIN JAVASCRIPT
   Works across all portfolio pages
========================================================= */


/* =========================================================
   HAMBURGER MENU
========================================================= */

function toggleMenu() {

  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  if (!menu || !icon) {
    return;
  }

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function (event) {

  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  const hamburgerMenu = document.querySelector(".hamburger-menu");

  if (!menu || !icon || !hamburgerMenu) {
    return;
  }

  if (
    menu.classList.contains("open") &&
    !hamburgerMenu.contains(event.target)
  ) {

    menu.classList.remove("open");
    icon.classList.remove("open");

  }

});


/* =========================================================
   PROFILE / HOME PAGE
   Runs only when #profile exists
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const profileSection = document.getElementById("profile");

  const elishaText = document.getElementById("elisha");
  const marayagText = document.getElementById("marayag");

  /*
     If this isn't index.html,
     stop the Profile-specific JavaScript.
  */

  if (!profileSection) {
    return;
  }


  let lastScrollY = window.scrollY;


  function handleProfileScroll() {

    /*
       Your current HTML doesn't appear to contain
       #elisha and #marayag.

       This check prevents JavaScript errors.
    */

    if (!elishaText || !marayagText) {
      return;
    }


    const scrollY =
      window.scrollY || window.pageYOffset;


    const isScrollingUp =
      scrollY < lastScrollY;


    lastScrollY = scrollY;


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


/* =========================================================
   ABOUT PAGE
   Runs only when About elements exist
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const aboutSection =
    document.getElementById("about");

  if (!aboutSection) {
    return;
  }


  const aboutImage =
    document.querySelector(".left-image");


  /*
     Your current about.html uses .about-image,
     not .left-image.

     This is kept here in case you still use
     .left-image somewhere in your design.
  */

  if (!aboutImage) {
    return;
  }


  function handleAboutScroll() {

    const scrollY =
      window.scrollY || window.pageYOffset;


    const scaleFactor =
      Math.max(
        1 - scrollY / window.innerHeight,
        0.4
      );


    aboutImage.style.transform =
      `scale(${scaleFactor})`;

  }


  window.addEventListener(
    "scroll",
    handleAboutScroll
  );

});


/* =========================================================
   LOADING SCREEN
   Runs only on index.html because only index has the loader
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const loaderContainer =
    document.getElementById("loader-container");


  /*
     Other pages don't have a loader.
     Stop here on those pages.
  */

  if (!loaderContainer) {
    return;
  }


  loaderContainer.style.display = "flex";


  setTimeout(function () {

    loaderContainer.style.display = "none";

  }, 3500);

});


/* =========================================================
   PROFILE IMAGE SLIDESHOW
   Only runs if .profile-image elements exist
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const profileImages =
    document.querySelectorAll(".profile-image");


  if (profileImages.length <= 1) {
    return;
  }


  let currentIndexProfile = 0;


  function showNextProfileImage() {

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


  setInterval(
    showNextProfileImage,
    500
  );

});


/* =========================================================
   ABOUT IMAGE SLIDESHOW
   Only runs if .gallery-image elements exist
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const aboutImages =
    document.querySelectorAll(".gallery-image");


  if (aboutImages.length <= 1) {
    return;
  }


  let currentIndexAbout = 0;


  function showNextAboutImage() {

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


  setInterval(
    showNextAboutImage,
    700
  );

});


/* =========================================================
   WORKS PAGE
   PROJECT / INSTAGRAM STYLE POPUP

   Runs only on works.html
========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  const worksSection =
    document.getElementById("works");


  /*
     If we're not on works.html,
     don't run any project modal code.
  */

  if (!worksSection) {
    return;
  }


  const projects =
    document.querySelectorAll(
      ".work-image-container"
    );


  const modal =
    document.getElementById("artModal");


  const modalImage =
    document.getElementById("modalImage");


  const modalTitle =
    document.getElementById("modalTitle");


  const modalDetails =
    document.getElementById("modalDetails");


  const modalDescription =
    document.getElementById(
      "modalDescription"
    );


  const modalWebsite =
    document.getElementById(
      "modalWebsite"
    );


  const modalGithub =
    document.getElementById(
      "modalGithub"
    );


  const modalClose =
    document.getElementById(
      "modalClose"
    );


  /*
     If the Works modal doesn't exist,
     stop the function.
  */

  if (!modal) {
    return;
  }


  /* =====================================================
     OPEN PROJECT
  ===================================================== */

  projects.forEach(function (project) {

    project.style.cursor = "pointer";


    project.addEventListener(
      "click",
      function () {


        /* -----------------------------------------
           PROJECT INFORMATION
        ----------------------------------------- */

        const image =
          this.dataset.image;

        const title =
          this.dataset.title;

        const details =
          this.dataset.details;

        const description =
          this.dataset.description;

        const website =
          this.dataset.website;

        const github =
          this.dataset.github;


        /* -----------------------------------------
           IMAGE
        ----------------------------------------- */

        if (modalImage) {

          modalImage.src =
            image || "";

          modalImage.alt =
            title || "Project Preview";

        }


        /* -----------------------------------------
           TITLE
        ----------------------------------------- */

        if (modalTitle) {

          modalTitle.textContent =
            title || "";

        }


        /* -----------------------------------------
           DETAILS
        ----------------------------------------- */

        if (modalDetails) {

          modalDetails.textContent =
            details || "";

        }


        /* -----------------------------------------
           DESCRIPTION
        ----------------------------------------- */

        if (modalDescription) {

          modalDescription.textContent =
            description || "";

        }


        /* =================================================
           WEBSITE BUTTON
        ================================================= */

        if (modalWebsite) {

          if (website) {

            modalWebsite.href =
              website;

            modalWebsite.style.display =
              "inline-block";

          } else {

            modalWebsite.removeAttribute(
              "href"
            );

            modalWebsite.style.display =
              "none";

          }

        }


        /* =================================================
           GITHUB BUTTON
        ================================================= */

        if (modalGithub) {

          if (github) {

            modalGithub.href =
              github;

            modalGithub.style.display =
              "inline-block";

          } else {

            modalGithub.removeAttribute(
              "href"
            );

            modalGithub.style.display =
              "none";

          }

        }


        /* =================================================
           OPEN MODAL
        ================================================= */

        modal.classList.add("active");


        /*
           Prevent page behind modal
           from scrolling.
        */

        document.body.style.overflow =
          "hidden";

      }
    );

  });


  /* =====================================================
     CLOSE MODAL FUNCTION
  ===================================================== */

  function closeProjectModal() {

    modal.classList.remove("active");


    document.body.style.overflow = "";


    /*
       Clear previous project image.
    */

    if (modalImage) {

      modalImage.src = "";

    }

  }


  /* =====================================================
     X CLOSE BUTTON
  ===================================================== */

  if (modalClose) {

    modalClose.addEventListener(
      "click",
      function () {

        closeProjectModal();

      }
    );

  }


  /* =====================================================
     CLICK DARK BACKGROUND TO CLOSE
  ===================================================== */

  modal.addEventListener(
    "click",
    function (event) {

      if (event.target === modal) {

        closeProjectModal();

      }

    }
  );


  /* =====================================================
     ESCAPE KEY TO CLOSE
  ===================================================== */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modal.classList.contains("active")
      ) {

        closeProjectModal();

      }

    }
  );

});