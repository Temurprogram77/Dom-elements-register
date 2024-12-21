let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passwordd = document.querySelector(".passwordd");
let btn = document.querySelector(".btn");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  let emailRegEx = /[a-z0-9]{6,12}@gmail/;
  let passwordRegEx = /^[0-9]{8,12}$/;
  let nameRegEx = /[a-zA-Z]/;
  let emailValue = email.value;
  let passwordValue = password.value;
  let passworddValue = passwordd.value;
  let nameValue = username.value;

  if (emailValue == "" || passwordValue == "" || nameValue == "") {
    alert("Avval to'ldiring");
  } else {
    if (
      emailRegEx.test(emailValue) &&
      passwordRegEx.test(passwordValue) &&
      nameRegEx.test(nameValue) &&
      passworddValue == password
    ) {
      alert("Malumotlar qabul qilindi😊. Malumot uchun rahmat.👌");
      username.value = "";
      email.value = "";
      password.value = "";
      passwordd.value = "";
    } else {
      alert("Malumotlar qabul qilinmadi😒. ILtimos qayta urinib ko'ring !");
    }
  }
});
