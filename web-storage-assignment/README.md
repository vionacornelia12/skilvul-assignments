# Challenge Class | Web Storage
Dokumen HTML tersebut memiliki sebuah form untuk pendataan mahasiswa yang memungkinkan pengguna untuk menginput data seperti nama depan, nama belakang, gender, dan alamat. Selain itu, terdapat tombol "Reset" dan "Save" yang digunakan untuk menghapus input dan menyimpan data pada local storage browser.
Script JavaScript yang terkait mengatur fungsi-fungsi untuk menyimpan dan menampilkan data pada local storage browser. Script tersebut juga memungkinkan pengguna untuk menghapus data dengan mengklik tombol "Reset".
Ketika data dimasukkan dan disimpan, data tersebut akan ditampilkan dalam format JSON pada elemen pre dengan id "data-localstorage". Semua fitur ini memungkinkan pengguna untuk menyimpan dan mengakses data pendataan mahasiswa secara lokal pada browser.
### Javascript Code Explanation
```js
const STORAGE_KEY = "user-data";
```
Key yang digunakan untuk menyimpan data di localStorage, agar konsisten dan konstan.

```js
const mainForm = document.querySelector(".main-form");
const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const genderInput = document.querySelector("#gender");
const addressInput = document.querySelector("#address");
const resetButton = document.querySelector("#reset-button");
```
Mengambil element form dari DOM.

```js
const showUserData = () => {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const dataContainer = document.querySelector("#data-localstorage");
    
    // Jika data ada, tampilkan data
    if (data) {
        dataContainer.innerHTML = JSON.stringify(data, null, 2);
    } else {
        dataContainer.innerHTML = "No data in localStorage";
    }
};
```
Fungsi untuk menampilkan data dari localStorage.

```js
const handleSubmitForm = (event) => {
    event.preventDefault();
        
    const userData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        gender: genderInput.value,
        address: addressInput.value,
    };
        
    const userDataInLocalStorage = JSON.parse(localStorage.getItem(STORAGE_KEY));
        
    if (userDataInLocalStorage) {
        const newData = [...userDataInLocalStorage, userData];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    } else {
        const newData = [userData];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newData));
    }
    showUserData();
};
```
Fungsi untuk menangani submit form.

```js
mainForm.addEventListener("submit", handleSubmitForm);
```
Menambahkan event listener untuk submit form.

```js
const handleResetButton = (event) => {
    event.preventDefault();
    
    // clear all input
    firstNameInput.value = "";
    lastNameInput.value = "";
    genderInput.value = "";
    addressInput.value = "";
    
    // clear localStorage
    localStorage.removeItem(STORAGE_KEY);
    
    showUserData();
};
```
Menangani event click untuk tombol reset.

```js
resetButton.addEventListener("click", handleResetButton);
```
Menambahkan event listener untuk tombol reset.

```js
showUserData();
```
Inisialisasi Webpage.