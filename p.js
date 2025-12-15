document.addEventListener("DOMContentLoaded", function() {
  console.log("Portfolio loaded");

  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(link.getAttribute('href')).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});