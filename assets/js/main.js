document.addEventListener("DOMContentLoaded", () => {

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

});
