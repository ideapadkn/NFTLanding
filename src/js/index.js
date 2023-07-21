import mobileNav from './modules/mobile-nav.js';
mobileNav();



// FORM VALIDATION

function validation(form) {
  let result = true;
  const allInputs = document.querySelectorAll("input");

  for (const input of allInputs) {
    if (input.value === "") {
      input.classList.add("_error");
      result = false;
    } else if (input.classList.contains("_error")) {
      input.classList.remove("_error");
    } else {
      input.value = "";
    }
  }

  return result;
}

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (validation(this) === true) {
    alert("Successful");
  } else {
    alert("Error");
  }
});