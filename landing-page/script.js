const name = document.getElementById("name")
const city = document.getElementById("city")
const email = document.getElementById("email")
const zipCode = document.getElementById("zip-code")
const check = document.getElementById("check")
const status = document.getElementById("status")
const warning = document.getElementById("warning")
const btnSubmit = document.getElementById("submit-form")

function handleGetFormData() {
    return {
        name: name.value,
        email: email.value,
        city: city.value,
        zipCode: zipCode.value,
        status: status.checked,
    }
}

function isNumber(s) { return !isNaN(s) }

function checkboxIsChecked() {
    return handleGetFormData().status
}

function validateFormData(formData) {
  const { name, city, email, zipCode } = formData
  return name.length !== 0 && city.length !== 0 && email.length !== 0 && isNumber(zipCode) && checkboxIsChecked()
}

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  submit();
});

function submit() {
    if (validateFormData(handleGetFormData())) {
    warning.textContent = ""
    } else {
    warning.textContent = "Periksa form anda sekali lagi"
    }
}