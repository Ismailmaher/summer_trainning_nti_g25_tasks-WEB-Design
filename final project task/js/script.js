if (document.querySelector(".owl-carousel")) {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      items: 6,
      navText: [
        '<i class="fa-solid fa-chevron-left"></i>',
        '<i class="fa-solid fa-chevron-right"></i>'
      ]
    });
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var alertBox = document.getElementById("formAlert");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var subjectError = document.getElementById("subjectError");

    nameError.classList.add("d-none");
    emailError.classList.add("d-none");
    subjectError.classList.add("d-none");
    alertBox.innerHTML = "";

    var nameRegex = /^[a-zA-Z\s]{2,50}$/;
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var subjectRegex = /^.{3,100}$/;

    var valid = true;

    if (name === "") {
      nameError.textContent = "The field is required.";
      nameError.classList.remove("d-none");
      valid = false;
    } else if (!nameRegex.test(name)) {
      nameError.textContent = "Please enter a valid name (letters only).";
      nameError.classList.remove("d-none");
      valid = false;
    }

    if (email === "") {
      emailError.textContent = "The field is required.";
      emailError.classList.remove("d-none");
      valid = false;
    } else if (!emailRegex.test(email)) {
      emailError.textContent = "Please enter a valid email.";
      emailError.classList.remove("d-none");
      valid = false;
    }

    if (subject === "") {
      subjectError.textContent = "The field is required.";
      subjectError.classList.remove("d-none");
      valid = false;
    } else if (!subjectRegex.test(subject)) {
      subjectError.textContent = "Subject must be between 3 and 100 characters.";
      subjectError.classList.remove("d-none");
      valid = false;
    }

    if (valid) {
      alertBox.innerHTML =
        `<div class="alert alert-success">✅ Your message has been sent successfully!</div>`;
      contactForm.reset();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  var upArrow = document.getElementById('upArrow');
  if (upArrow) {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 400) {
        upArrow.classList.remove('d-none');
      } else {
        upArrow.classList.add('d-none');
      }
    });
  }
});

  document.getElementById("upArrow").addEventListener("click", function(e){
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });