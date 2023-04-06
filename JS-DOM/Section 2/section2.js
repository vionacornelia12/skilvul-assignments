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