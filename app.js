//! Navbar Animation

// My version

function navBorder() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  const header = document.querySelector("header");

  sections.forEach(section => {
    section.addEventListener("mouseenter", e => {
      let id = e.target.id;

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    });
  });

  header.addEventListener("mouseenter", function() {
    navLinks.forEach(link => {
      link.classList.remove("active");
    });
  });
}

// navBorder();

// Tutorial

// function navBorder() {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll("nav a");

//   sections.forEach(section => {
//     section.addEventListener("mouseenter", function() {
//       const id = this.getAttribute("id");
//       const navActive = document.querySelector(`a[href="#${id}"]`);
//       navLinks.forEach(link => link.classList.remove("active"));
//       navActive.classList.add("active");
//       console.log(navActive);
//     });
//   });
// }

navBorder();

//! Image Gallery

function imageGallery() {
  const previews = document.querySelectorAll(".room-preview img");
  const highlight = document.querySelector(".room-highlight");

  previews.forEach(preview => {
    preview.addEventListener("click", e => {
      highlight.src = e.target.getAttribute("src");
      previews.forEach(preview => preview.classList.remove("room-active"));
      preview.classList.add("room-active");
      console.log(e.target.getAttribute("src"));
    });
  });
}

imageGallery();
