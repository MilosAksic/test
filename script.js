const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

const emailForma = document.querySelector("#EmailForm");
const mobileForma = document.querySelector("#MobileForm");

const emailButton = document.querySelector("#menu__email");
const mobileButton = document.querySelector("#menu__mobile");

const emailRegister = document.querySelector("#email__register");
const mobileRegister = document.querySelector("#mobile__register");
//text box values
const phoneNumber = document.querySelector("#phoneNumber");
const email = document.querySelector("#email");
//errors
const phoneError = document.querySelector("#phoneError");
const emailError = document.querySelector("#emailError");
//register msg
const registerMsg = document.querySelector("#registerMsg");
let validMail = false
//currencys
const dinarsMobile = document.querySelector("#dinarsMobile");
const dollarsMobile = document.querySelector("#dollarsMobile");
const eurosMobile = document.querySelector("#eurosMobile");  

const dinarsEmail = document.querySelector("#dinarsEmail");
const dollarsEmail = document.querySelector("#dollarsEmail");
const eurosEmail = document.querySelector("#eurosEmail");

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
  console.log(dinarsEmail.checked)
  if(!validMail){
    registerMsg.innerHTML="Registration failed, please enter a valid email"
  }else if(dinarsEmail.checked==false &&dollarsEmail.checked==false&& eurosEmail.checked==false ){
    registerMsg.innerHTML="Please choose your currency"
  }else{
    registerMsg.innerHTML="Registration completed, you may proceed to login in"
  }
});
mobileForma.addEventListener("submit", (e) => {
  e.preventDefault();
});

email.addEventListener("change", (e) => {
  //console.log(e.target.value)
  emailError.innerHTML = "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  validMail = true
  if (!emailRegex.test(String(e.target.value).toLowerCase())) {
    emailError.innerHTML = "Please enter valid email address";
    validMail = false
  }

  if (e.target.value == "") {
    emailError.innerHTML = "Please enter email address";
    validMail = false
  }
  
});

phoneNumber.addEventListener("change", (e) => {
  //console.log(e.target.value)
  if (e.target.value == "") {
    phoneError.innerHTML = "Please enter your phone";
  }
});
