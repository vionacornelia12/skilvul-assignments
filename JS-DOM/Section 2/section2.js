// mendapatkan elemen berdasarkan ID
const element = document.getElementById("header");
//Mengubah warna pada elemen menjadi merah.
element.style.color = "red";

// mendapatkan elemen berdasarkan ID
let myParagraph = document.getElementById("myParagraph");
// mengubah teks pada elemen
myParagraph.innerHTML = "Teks telah diubah!";

// mendapatkan elemen berdasarkan ID
let myButton = document.getElementById("myButton");
// menambahkan event listener pada elemen
myButton.addEventListener("click", function() {
  alert("Tombol diklik!");
});

//ByClassName
// Mendapatkan elemen dengan class "tombol"
var tombol = document.getElementsByClassName("tombol")[0];

// Menambahkan event listener pada tombol
tombol.addEventListener("click", function() {
	// Mendapatkan elemen-elemen dengan class "mahasiswa"
	var mahasiswa = document.getElementsByClassName("mahasiswa");

	// Looping untuk menampilkan setiap elemen mahasiswa
	for (var i = 0; i < mahasiswa.length; i++) {
		alert(mahasiswa[i].innerText);
	}
});

//querySelector()
// Mendapatkan elemen dengan id "tombol1"
var tombol = document.querySelector("#tombol1");

// Menambahkan event listener pada tombol
tombol.addEventListener("click", function() {
	// Mendapatkan elemen h1
	var h1 = document.querySelector("#h1-awal");

	// Menambahkan class "teks-merah" pada h1
	h1.classList.add("teks-merah");

	// Mendapatkan elemen p
	var p = document.querySelector("#p-awal;");

	// Mengubah style font-size pada p menjadi 18px
	p.style.fontSize = "18px";
});