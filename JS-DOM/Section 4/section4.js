// membuat elemen baru
var newListItem = document.createElement("li");
var textNode = document.createTextNode("Item 4");
newListItem.appendChild(textNode);
// menambahkan elemen baru ke dalam parent elemen
document.getElementById("myList").appendChild(newListItem);

// membuat elemen gambar baru
var newImage = document.createElement("img");
newImage.setAttribute("src", "https://via.placeholder.com/150");
// menambahkan elemen gambar baru ke dalam parent elemen
document.getElementById("myDiv").appendChild(newImage);

// membuat elemen tombol baru
var newButton = document.createElement("button");
var textNode = document.createTextNode("Klik Saya");
newButton.appendChild(textNode);
// menambahkan elemen tombol baru ke dalam parent elemen
document.body.appendChild(newButton);
