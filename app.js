const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(ru)$/;
const phoneRegex = /^(\+7|8)[0-9]{9,10}$/;
const jpegRegex = /\.(jpe?g)$/i;

const form = document.querySelector(".form");
const btn = form.querySelector(".form-btn");
const inputs = Array.from(form.elements);

function isValidInput(id, reg, text) {
  const email = form.querySelector(`#${id}`);
  email.addEventListener("input", function () {
    const span = this.nextElementSibling;
    if (!reg.test(email.value)) {
      span.classList.add("input_error_activ");
      span.textContent = this.validationMessage + text;
    } else {
      span.classList.remove("input_error_activ");
    }
    isValidForm();
  });
}
function isValidForm() {
  if (
    emailRegex.test(inputs[0].value) &&
    phoneRegex.test(inputs[1].value) &&
    jpegRegex.test(inputs[2].value)
  ) {
    btn.classList.remove("form-btn_disable");
    btn.removeAttribute("disabled", "");
  } else {
    btn.classList.add("form-btn_disable");
    btn.setAttribute("disabled", "");
  }
}

isValidInput("email", emailRegex, "должен заканчиваться на ru");
isValidInput("tel", phoneRegex, "должен начинаться на +7 или 8");
isValidInput("file", jpegRegex, "только фромат jpeg");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  inputs.forEach((input) => (input.value = ""));
});
isValidForm();
