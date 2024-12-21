let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passwordd = document.querySelector(".passwordd");
let btn = document.querySelector(".btn");
let inp = document.querySelector("input");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailRegEx = /[a-z0-9]{6,12}@gmail/;
  const passwordRegEx = /^[0-9]{8,12}$/;
  const nameRegEx = /[a-zA-Z]/;
  let emailValue = email.value;
  let passwordValue = password.value;
  let userName = username.value;
  if (
    username.value == "" ||
    email.value == "" ||
    password.value == "" ||
    passwordd.value == ""
  ) {
    inp.style.border = '2px solid red'
  } else {
    if (
      emailRegEx.test(emailValue) &&
      passwordRegEx.test(passwordValue) &&
      passwordd.value == password.value
    ) {
      alert("Malumotlar qabul qilindi😊. Malumot uchun rahmat.👌");
      userName.value = "";
      surName.value = "";
      email.value = "";
      password.value = "";
      replacePassword.value = "";
    } else {
      alert("Malumotlar qabul qilinmadi😒");
    }
  }
});