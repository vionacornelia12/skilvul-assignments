# Challenge Class | Web Storage

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