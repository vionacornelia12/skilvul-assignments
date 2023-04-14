const STORAGE_KEY = "user-data";

const mainForm = document.querySelector(".main-form");

const firstNameInput = document.querySelector("#firstName");
const lastNameInput = document.querySelector("#lastName");
const genderInput = document.querySelector("#gender");
const addressInput = document.querySelector("#address");

const showUserData = () => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY));
  const dataContainer = document.querySelector("#data-localstorage");

  if (data) {
    dataContainer.innerHTML = JSON.stringify(data, null, 2);
  } else {
    dataContainer.innerHTML = "No data in localStorage";
  }
};

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

mainForm.addEventListener("submit", handleSubmitForm);

const resetButton = document.querySelector("#reset-button");

const handleResetButton = (event) => {
  event.preventDefault();

  // clear all input
  firstNameInput.value = "";
  lastNameInput.value = "";
  genderInput.value = "";
  addressInput.value = "";

  // clear localStorage
  // localStorage.removeItem(KEY);

  showUserData();
};

resetButton.addEventListener("click", handleResetButton);

showUserData();