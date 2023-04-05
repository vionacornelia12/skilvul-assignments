const maleRadio = document.getElementById("male-radio");
const femaleRadio = document.getElementById("female-radio");

maleRadio.addEventListener("change", function() {
  if (maleRadio.checked) {
    console.log("Anda memilih jenis kelamin laki-laki");
  }
});

femaleRadio.addEventListener("change", function() {
  if (femaleRadio.checked) {
    console.log("Anda memilih jenis kelamin perempuan");
  }
});