const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav_toggle", "nav_menu");

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const navMenu = document.getElementById("nav_menu");
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2000,
  reset: true,
});

sr.reveal(".home-title", {});
sr.reveal(".button", { delay: 200 });
sr.reveal(".home-img", { delay: 400 });
sr.reveal(".socmed-icon", { interval: 500 });

sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 300 });
sr.reveal(".about-subsubtitle", { delay: 400 });
sr.reveal(".about-text", { delay: 500 });

sr.reveal(".tech-subtitle", {});
sr.reveal(".tech-text", {});
sr.reveal(".tech-data", { interval: 200 });

sr.reveal(".work-img", { interval: 200 });

sr.reveal(".contact-input", { interval: 200 });
