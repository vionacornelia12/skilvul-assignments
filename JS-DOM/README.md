# Challenges Class | JS-DOM

- ### Section 2
  Example of Section 2 - getElementById
  - Contoh 1
    ```js
    const element = document.getElementById("header");
    element.style.color = "red";
    ```
    Mengubah warna pada elemen dengan ID "header" menjadi merah.

  - Contoh 2
    ```js
    let myParagraph = document.getElementById("myParagraph");
    myParagraph.innerHTML = "Teks telah diubah!";
    ```
    Mengubah teks pada elemen dengan ID "myParagraph".

  - Contoh 3
    ```js
    let myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
        alert("Tombol diklik!");
    });
    ```
    Menambahkan event listener pada elemen dengan ID "myButton".

- ### Section 3
  Example of Section 3
  - Contoh 1
    ```js
    var childElement = document.getElementsByTagName("p")[0];
    var parentElement = childElement.parentNode;
    parentElement.innerHTML = "Ini adalah teks baru.";
    ```
    Mendapatkan elemen anak.
    Mendapatkan elemen parent.
    Mengubah teks pada elemen parent.

  - Contoh 2
    ```js
    var myListItems = document.getElementById("myList").childNodes;
    for(var i = 0; i < myListItems.length; i++) {
        if (myListItems[i].nodeName == "LI") {
            myListItems[i].innerHTML = "Item " + (i+1) + " telah diubah!";
        }
    }
    ```
    Mendapatkan elemen child berdasarkan tag name.
    Mengubah teks pada elemen.

  - Contoh 3
    ```js
    var selectedElement = document.getElementById("parent2");
    var childElements = selectedElement.childNodes;
    for(var i = 0; i < childElements.length; i++) {
        if (childElements[i].nodeName == "P") {
            childElements[i].innerHTML = "Ini adalah paragraf " + (i+1);
        }
    }
    ```
    Mendapatkan elemen yang dipilih.
    Mendapatkan elemen child.
    Mengubah teks pada elemen child.

- ### Section 4
  Example of Section 4
  - Contoh 1
    ```js
    // membuat elemen baru
    var newListItem = document.createElement("li");
    var textNode = document.createTextNode("Item 4");
    newListItem.appendChild(textNode);
    // menambahkan elemen baru ke dalam parent elemen
    document.getElementById("myList").appendChild(newListItem);
    ```

  - Contoh 2
    ```js
    let myParagraph = document.getElementById("myParagraph");
    myParagraph.innerHTML = "Teks telah diubah!";
    ```
    Mengubah teks pada elemen dengan ID "myParagraph".

  - Contoh 3
    ```js
    let myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
        alert("Tombol diklik!");
    });
    ```
    Menambahkan event listener pada elemen dengan ID "myButton".