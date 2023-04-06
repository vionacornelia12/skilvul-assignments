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

- ### Section 8
  Example of Section 8
  - Contoh 1
    ```js
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
    ```
    Menambah event keydown.
    Saat menekan "Space" pada keyboard, akan muncul alert "Anda menekan tombol spasi!".

  - Contoh 2
    ```js
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
    ```
    Menambah event keydown.
    Saat menekan "Space" pada keyboard, akan muncul alert "Anda menekan tombol spasi!".

 - Contoh 3
    ```js
    const inputField = document.getElementById('input-field');
    const output = document.getElementById('output');
    
    inputField.addEventListener('input', (event) => {
        const inputValue = event.target.value;
        output.innerText = `You typed: ${inputValue}`;
        output.style.display = 'block';
    });
    ```
    Dalam contoh ini, kita memiliki sebuah input field dengan ID "input-field" dan sebuah elemen p dengan ID "output". Property "display" pada elemen "output" diatur awalnya ke "none" di dalam CSS, sehingga elemen tersebut tersembunyi saat halaman dimuat.
    Kemudian kita menggunakan JavaScript untuk menambahkan event listener pada input field untuk event "input". Ketika event tersebut terpicu (misalnya ketika pengguna mengetikkan di dalam input field), kode di dalam event listener dijalankan.
    Di dalam event listener, kita mengambil nilai dari input field menggunakan "event.target.value" dan menyimpannya ke dalam sebuah variabel bernama "inputValue". Kemudian kita menetapkan teks dari elemen "output" ke "Anda mengetikkan: " ditambah dengan nilai "inputValue". Akhirnya, kita mengatur property "display" pada elemen "output" ke "block" untuk menampilkannya di halaman.
    Jadi ketika pengguna mengetik sesuatu di dalam input field, teks "Anda mengetikkan: [apa yang mereka ketik]" akan muncul di bawah input field.

 - Contoh 4
    ```js
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
    ```
    Berikut ini contoh penggunaan event input pada input field dengan ID input-field dan elemen p dengan ID output. Input field memiliki tipe number dan atribut min dan max diatur menjadi 0 dan 100, secara berturut-turut.
    Elemen output diatur untuk disembunyikan dengan properti display diatur menjadi none dalam CSS. Properti color diatur menjadi red untuk memberikan penekanan visual saat pesan validasi ditampilkan.
    Kemudian kita menambahkan event listener pada input field untuk event input. Di dalam event listener, kita mengambil nilai dari input field dengan menggunakan event.target.value dan menyimpannya dalam sebuah variabel yang disebut inputValue.
    Kita kemudian memeriksa apakah inputValue kurang dari 0 atau lebih besar dari 100. Jika iya, kita mengatur teks dari elemen output menjadi pesan validasi dan mengatur properti display dari elemen output menjadi block untuk menampilkannya di halaman. Jika tidak, jika input valid, kita menyembunyikan elemen output dengan mengatur properti display-nya menjadi none.
    Jadi ketika pengguna mengetikkan sebuah angka ke dalam input field, pesan validasi akan muncul di bawah input field jika input kurang dari 0 atau lebih besar dari 100, dan akan disembunyikan jika inputnya valid.