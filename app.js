//! My version

// function navBorder() {
//   const sections = document.querySelectorAll("section");
//   const navLinks = document.querySelectorAll("nav a");

//   sections.forEach(section => {
//     section.addEventListener("mouseenter", e => {
//       let id = e.target.id;

//       navLinks.forEach(link => {
//         if (link.getAttribute("href") === `#${id}`) {
//           console.log(link);
//           link.classList.add("active");
//         }
//       });
//     });
//   });
// }

// navBorder();

//! Tutorial

function navBorder() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");

  sections.forEach(section => {
    section.addEventListener("mouseenter", function() {
      const id = this.getAttribute("id");
      const navActive = document.querySelector(`a[href="#${id}"]`);
      navLinks.forEach(link => link.classList.remove("active"));
      navActive.classList.add("active");
      console.log(navActive);
    });
  });
}

navBorder();
