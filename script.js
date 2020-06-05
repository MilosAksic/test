const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const loaderMobile = document.querySelector("#loaderMobile");
const emailForma = document.querySelector("#EmailForm");
const mobileForma = document.querySelector("#MobileForm");

const formaDiv = document.querySelector(".formDiv");
const title = document.querySelector("#title");

const emailButton = document.querySelector("#menu__email");
const mobileButton = document.querySelector("#menu__mobile");
const success = document.querySelector("#success");

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
let validPhone = false
//currencys
const dinarsMobile = document.querySelector("#dinarsMobile");
const dollarsMobile = document.querySelector("#dollarsMobile");
const eurosMobile = document.querySelector("#eurosMobile");  

const dinarsEmail = document.querySelector("#dinarsEmail");
const dollarsEmail = document.querySelector("#dollarsEmail");
const eurosEmail = document.querySelector("#eurosEmail");
//checkboxes values
const emailCheckbox = document.querySelector("#checkboxTermsEmail");

const phoneCheckbox = document.querySelector("#checkboxTermsPhone");

const loader = document.querySelector("#loader");

//event listeners

emailRegister.addEventListener("click", () => {
  setTimeout(()=>{modal.style.display = "block";},2000)
  
});

mobileRegister.addEventListener("click", () => {
  setTimeout(()=>{modal.style.display = "block";},2000)
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
  title.classList.add("hidden");
  formaDiv.classList.remove("hidden")
  mobileForma.classList.add("hidden");
  emailForma.classList.remove("hidden");
});

mobileButton.addEventListener("click", () => {
  title.classList.add("hidden");
  formaDiv.classList.remove("hidden")
  emailForma.classList.add("hidden");
  mobileForma.classList.remove("hidden");
});

emailForma.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.classList.remove("hidden")
  setTimeout(()=>{
    if(!validMail){
      success.src="assets/error.png"
      registerMsg.innerHTML="Registration failed, please enter a valid email"
    }else if(dinarsEmail.checked===false &&dollarsEmail.checked===false&& eurosEmail.checked===false ){
     success.src="assets/error.png"
      registerMsg.innerHTML="Please choose your currency"
    }else if(emailCheckbox.checked===false){
     success.src="assets/error.png"
      registerMsg.innerHTML="You didn't agreed on terms and service"
    }else{
      success.src="assets/success.svg"
      registerMsg.innerHTML="Registration completed, you may proceed to login in"
    }
    loader.classList.add("hidden")

  },2000)
  
});
mobileForma.addEventListener("submit", (e) => {
  e.preventDefault();
  loaderMobile.classList.remove("hidden")
  setTimeout(()=>{
    if(!validPhone){
      success.src="assets/error.png"
      registerMsg.innerHTML="Registration failed, please enter a valid phone number"
    }else if(dinarsMobile.checked===false &&dollarsMobile.checked===false && eurosMobile.checked===false ){
      success.src="assets/error.png"
       registerMsg.innerHTML="Please choose your currency"
     }else if(phoneCheckbox.checked===false){
      success.src="assets/error.png"
       registerMsg.innerHTML="You didn't agreed on terms and service"
     }else{
       success.src="assets/success.svg"
       registerMsg.innerHTML="Registration completed, you may proceed to login"
     }
    loaderMobile.classList.add("hidden")
  },2000)
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
//placeholder
phoneNumber.addEventListener("change", (e) => {
  //console.log(e.target.value)
  phoneError  .innerHTML = "";
  const numberRegex = /^[0-9]/
  validPhone=true
  
  if (!numberRegex.test(e.target.value)) {
    phoneError.innerHTML = "Enter a valid number";
    validPhone=false
  }
  if(e.target.value.split("").length<9){
    phoneError.innerHTML = "Number too short";
    validPhone=false
  }
  if (e.target.value == "") {
    phoneError.innerHTML = "Please enter your phone";
    validPhone=false
  }
  
});
