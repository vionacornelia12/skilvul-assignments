// mengubah warna teks
document.getElementById("helloDiv").style.color = "red";

// menambahkan border pada gambar
document.getElementById("myImage").style.border = "2px solid black";

// Contoh 3
var infoDiv = document.getElementById("infoDiv");
var styles = window.getComputedStyle(infoDiv);

console.log("Background color of myDiv element: " + styles.backgroundColor);
console.log("Width of myDiv element: " + styles.width);
console.log("Height of myDiv element: " + styles.height);