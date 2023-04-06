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
    var newListItem = document.createElement("li");
    var textNode = document.createTextNode("Item 4");
    newListItem.appendChild(textNode);
    document.getElementById("myList").appendChild(newListItem);
    ```
    Membuat elemen baru.
    Menambahkan elemen baru ke dalam parent elemen.

  - Contoh 2
    ```js
    var newImage = document.createElement("img");
    newImage.setAttribute("src", "https://via.placeholder.com/150");
    document.getElementById("myDiv").appendChild(newImage);
    ```
    Membuat elemen gambar baru.
    Menambahkan elemen gambar baru ke dalam parent elemen.

  - Contoh 3
    ```js
    var newButton = document.createElement("button");
    var textNode = document.createTextNode("Klik Saya");
    newButton.appendChild(textNode);
    document.body.appendChild(newButton);
    ```
    Membuat elemen tombol baru.
    Menambahkan elemen tombol baru ke dalam parent elemen.

- ### Section 5
  Example of Section 5
  - Contoh 1
    ```js
    document.getElementById("myDiv").setAttribute("style", "background-color: blue; color: white;");
    ```
    Mengganti warna latar belakang elemen.

  - Contoh 2
    ```js
    document.getElementById("myButton").setAttribute("value", "Hello World");
    function myFunction() {
        document.getElementById("myInput").setAttribute("type", "button"); 
    }
    ```
    Mengubah input field menjadi tombol.

- ### Section 6
  Example of Section 6
  - Contoh 1
    ```js
    document.getElementById("helloDiv").style.color = "red";
    ```
    Mengubah warna teks.

  - Contoh 2
    ```js
    document.getElementById("myImage").style.border = "2px solid black";
    ```
    Menambahkan border pada gambar.

- ### Section 7
  Example of Section 7
  - Contoh 1
    ```js
    document.addEventListener("keydown", function(event) {
        if (event.code === "Space") {
            alert("Anda menekan tombol spasi!");
        }
    });
    ```
    Menambah event keydown.
    Saat menekan "Space" pada keyboard, akan muncul alert "Anda menekan tombol spasi!".

  - Contoh 2
    ```js
    document.addEventListener("keydown", function(event) {
        if (event.code === "ArrowRight") {
            document.getElementById("arrowRight").style.backgroundColor = "red";
        }
    });
    ```
    Menambahkan event keydown.
    Saat menekan "ArrowRight" pada keyboard, backgroundColor pada id "arrowRight" akan menjadi merah.

      - Contoh 3
    ```js
    document.getElementById("klikDiv").addEventListener("click", function() {
        this.style.backgroundColor = "red";
    });
    ```
    Menambah event click.
    Saat klik "Klik saya!", backgroundColor pada id "arrowRight" akan menjadi merah.

  - Contoh 4
    ```js
    document.getElementById("myDiv").addEventListener("mouseover", function() {
        alert("Anda menyorot mouse ke elemen ini!");
    });
    ```
    Menambahkan event mouseover.
    Saat menyorot mouse ke "Anda menyorot mouse ke elemen ini!", akan muncul alert "Anda menyorot mouse ke elemen ini!