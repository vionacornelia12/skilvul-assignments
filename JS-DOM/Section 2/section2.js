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

// mendapatkan elemen anak
var childElement = document.getElementsByTagName("h3")[0];
// mendapatkan elemen parent
var parentElement = childElement.parentNode;
// mengubah teks pada elemen parent
parentElement.innerHTML = "Ini adalah teks baru.";

// mendapatkan elemen yang dipilih
var selectedElement = document.getElementsByTagName("p")[0];
// mendapatkan elemen sibling
var siblingElement = selectedElement.nextSibling;
// mengubah teks pada elemen sibling
siblingElement.innerHTML = "Ini adalah teks baru.";