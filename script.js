const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const emailForma = document.querySelector("#EmailForm");
const mobileForma = document.querySelector("#MobileForm");

const emailButton = document.querySelector("#menu__email");
const mobileButton = document.querySelector("#menu__mobile");

const emailRegister = document.querySelector("#email__register");
const mobileRegister = document.querySelector("#mobile__register");

const phoneNumber =document.querySelector("#phoneNumber"); 
const email =document.querySelector("#email")

const phoneError =document.querySelector("#phoneError"); 
const emailError =document.querySelector("#emailError")

//event listeners

emailRegister.addEventListener("click", () => {
  modal.style.display = "block";
});

mobileRegister.addEventListener("click", () => {
  modal.style.display = "block";
});

span.addEventListener("click", () => {
  modal.style.display = "none";
});

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
emailButton.addEventListener("click", () => {
  mobileForma.classList.add("hidden");
  emailForma.classList.remove("hidden");
});

mobileButton.addEventListener("click", () => {
  emailForma.classList.add("hidden");
  mobileForma.classList.remove("hidden");
});

emailForma.addEventListener("submit", (e) => {
  e.preventDefault();
});
mobileForma.addEventListener("submit", (e) => {
  e.preventDefault();
});

email.addEventListener("change", (e) => {
  console.log(e.target.value)
});
