// mendapatkan elemen anak
var childElement = document.getElementsByTagName("p")[0];
// mendapatkan elemen parent
var parentElement = childElement.parentNode;
// mengubah teks pada elemen parent
parentElement.innerHTML = "Ini adalah teks baru.";

// mendapatkan elemen child berdasarkan tag name
var myListItems = document.getElementById("myList").childNodes;
// mengubah teks pada elemen
for(var i = 0; i < myListItems.length; i++) {
  if (myListItems[i].nodeName == "LI") {
    myListItems[i].innerHTML = "Item " + (i+1) + " telah diubah!";
  }
}

// mendapatkan elemen yang dipilih
var selectedElement = document.getElementById("parent2");
// mendapatkan elemen child
var childElements = selectedElement.childNodes;
// mengubah teks pada elemen child
for(var i = 0; i < childElements.length; i++) {
  if (childElements[i].nodeName == "P") {
    childElements[i].innerHTML = "Ini adalah paragraf " + (i+1);
  }
}

var targetElement = document.querySelector('.target');
var siblings = Array.from(targetElement.parentNode.childNodes)
  .filter(node => node.nodeType === Node.ELEMENT_NODE && node !== targetElement);
// siblings now contains an array of the sibling elements of the target element
console.log(siblings);