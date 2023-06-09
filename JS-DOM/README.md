# Challenges Class | JS-DOM

- ### Section 2
  Example of Section 2
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

  - Contoh 4
    ```js
    var tombol = document.getElementsByClassName("tombol")[0];
    tombol.addEventListener("click", function() {
        var mahasiswa = document.getElementsByClassName("mahasiswa");
        for (var i = 0; i < mahasiswa.length; i++) {
            alert(mahasiswa[i].innerText);
        }
    });
    ```
    Kode ini mengambil elemen dengan class "tombol" dan menambahkan event listener pada tombol tersebut. Ketika tombol ditekan, kode akan menampilkan isi (innerText) dari setiap elemen dengan class "mahasiswa" menggunakan loop dan alert box.

  - Contoh 5
    ```js
    var tombol = document.querySelector("#tombol1");
    tombol.addEventListener("click", function() {
        var h1 = document.querySelector("#h1-awal");
        h1.classList.add("teks-merah");
        var p = document.querySelector("#p-awal;");
        p.style.fontSize = "18px";
    });

    ```
    Script JavaScript pada file "script.js" menggunakan method querySelector() untuk mendapatkan elemen h1 dan p dari dokumen HTML. Selanjutnya, kode akan menambahkan class "teks-merah" pada elemen h1 menggunakan method classList.add(), dan mengubah style font-size pada elemen p menjadi 18px menggunakan properti style.fontSize.

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

  - Contoh 4
    ```js
    var targetElement = document.querySelector('.target');
    var siblings = Array.from(targetElement.parentNode.childNodes)
    .filter(node => node.nodeType === Node.ELEMENT_NODE && node !== targetElement);
    console.log(siblings);
    ```
    Pada bagian ini, kode JavaScript dimulai dengan mengambil elemen dengan kelas target menggunakan metode querySelector. Kemudian, properti parentNode digunakan pada elemen tersebut untuk mengambil elemen induk atau parentnya, yaitu div dengan id="parent3".
    Setelah itu, metode childNodes digunakan pada elemen induk tersebut untuk mengambil daftar dari semua anak elemennya, termasuk elemen target dan elemen sibling.
    Untuk mendapatkan hanya elemen sibling yang menjadi saudara kandung dari elemen target, metode filter digunakan pada daftar elemen anak. Pada metode filter, node.nodeType === Node.ELEMENT_NODE digunakan untuk memastikan hanya elemen yang berupa node elemen yang diambil (bukan teks atau node komentar), dan node !== targetElement digunakan untuk mengecualikan elemen target itu sendiri dari daftar elemen anak.
    Akhirnya, elemen sibling yang diambil disimpan ke dalam variabel siblings, dan daftar elemen tersebut ditampilkan pada konsol dengan menggunakan console.log.

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

  - Contoh 3
    ```js
    var infoDiv = document.getElementById("infoDiv");
    var styles = window.getComputedStyle(infoDiv);
    
    console.log("Background color of myDiv element: " + styles.backgroundColor);
    console.log("Width of myDiv element: " + styles.width);
    console.log("Height of myDiv element: " + styles.height);
    ```
    Pada kode JavaScript di atas, document.getElementById("infoDiv") digunakan untuk memilih elemen dengan id="infoDiv" pada dokumen HTML.
    Kemudian, window.getComputedStyle(infoDiv) digunakan untuk mendapatkan semua nilai gaya CSS terkompilasi untuk elemen tersebut, dan nilai-nilai tersebut disimpan dalam variabel styles.
    Selanjutnya, kita menggunakan console.log() untuk menampilkan nilai dari beberapa properti CSS pada elemen infoDiv. Dalam contoh ini, kita menampilkan nilai dari properti backgroundColor, width, dan height pada konsol.

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
    Pada bagian HTML, terdapat sebuah form yang berisi dua radio button dengan atribut name="gender" dan nilai value yang berbeda-beda, yaitu "male" dan "female". Setiap radio button juga diberi atribut id untuk memudahkan pengaksesan dalam JavaScript.
    Pada bagian JavaScript, pertama-tama kode mendapatkan elemen radio button dengan id "male-radio" dan "female-radio" dengan menggunakan method document.getElementById(). Id yang digunakan sesuai dengan atribut id yang diberikan pada radio button di HTML.
    Setelah itu, kode menambahkan event listener untuk setiap radio button yang ada dengan menggunakan method addEventListener(). Ketika salah satu radio button dipilih, fungsi yang ditentukan akan dijalankan.
    Dalam fungsi tersebut, kode menggunakan method checked untuk memeriksa apakah radio button yang dipilih memiliki status checked atau tidak. Jika radio button tersebut dipilih, maka kode akan menampilkan pesan sesuai dengan jenis kelamin yang dipilih menggunakan method console.log().

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
    Pada bagian HTML, terdapat sebuah form yang berisi empat radio button dengan atribut name="color" dan nilai value yang berbeda-beda, yaitu "red", "green", "blue", dan "yellow".
    Pada bagian JavaScript, pertama-tama kode mendapatkan semua elemen radio button dengan menggunakan method document.getElementsByName('color'). Nama 'color' digunakan karena atribut name pada radio button diberi nilai 'color'.
    Setelah itu, kode menambahkan event listener untuk setiap radio button yang ada dengan menggunakan loop for. Setiap kali pemilihan radio button berubah, maka fungsi yang ditentukan akan dijalankan.
    Dalam fungsi tersebut, kode mendapatkan nilai radio button yang dipilih dengan menggunakan method document.querySelector('input[name="color"]:checked').value. Method ini akan mencari elemen radio button yang dipilih berdasarkan atribut name dan status checked, dan mengambil nilai value-nya.
    Terakhir, nilai yang dipilih dapat diolah sesuai kebutuhan. Pada contoh di atas, kode hanya menampilkan nilai yang dipilih pada console menggunakan method console.log(). Namun, Anda dapat mengubah kode tersebut untuk melakukan tindakan lain, misalnya menampilkan gambar dengan warna yang dipilih atau mengubah tampilan halaman.

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