document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     Contact Form Logic
  =============================== */
  const form = document.querySelector(".contact-form");
  const successMsg = document.getElementById("form-success");

  if (form) {
    form.addEventListener("submit", () => {
      const btn = form.querySelector("button");
      btn.innerText = "Sending...";
      btn.disabled = true;

      setTimeout(() => {
        if (successMsg) {
          successMsg.style.display = "block";
        }
      }, 800);
    });
  }

  /* ===============================
     Mobile Navigation Menu
  =============================== */
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.getElementById("navLinks");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });

    // Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("show");
      });
    });
  }

});
