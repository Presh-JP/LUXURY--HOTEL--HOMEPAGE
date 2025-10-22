document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");

  if (hamburger && navlinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("open");
      navlinks.classList.toggle("active");
    });

    // Optional: close menu when a link is clicked (mobile)
    navlinks.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        hamburger.classList.remove("open");
        navlinks.classList.remove("active");
      });
    });
  }
});
