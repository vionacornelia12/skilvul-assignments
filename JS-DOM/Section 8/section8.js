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

// Contoh 2
// Mendapatkan semua elemen radio button
var radios = document.getElementsByName('color');

// Menangani perubahan pemilihan radio button
for (var i = 0; i < radios.length; i++) {
	radios[i].addEventListener('change', function() {
		// Mendapatkan nilai radio button yang dipilih
		var selectedValue = document.querySelector('input[name="color"]:checked').value;

		// Lakukan sesuatu dengan nilai yang dipilih
		console.log('Warna yang dipilih:', selectedValue);
	});
}

// Contoh 3
const inputField = document.getElementById('input-field');
const output = document.getElementById('output');

inputField.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  output.innerText = `You typed: ${inputValue}`;
  output.style.display = 'block';
});

// Contoh 4
const myInput = document.getElementById('my-input');
const myOutput = document.getElementById('my-output');

myInput.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  if (inputValue < 0) {
    myOutput.innerText = 'Input should be at least 0';
    myOutput.style.display = 'block';
  } else if (inputValue > 100) {
    myOutput.innerText = 'Input should be at most 100';
    myOutput.style.display = 'block';
  } else {
    myOutput.style.display = 'none';
  }
});