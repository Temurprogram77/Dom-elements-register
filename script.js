let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passwordd = document.querySelector(".passwordd");
let btn = document.querySelector(".btn");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
let pass = document.querySelectorAll("#pass");
let wrong1 = document.querySelector(".wrog_text1");
let wrong2 = document.querySelector(".wrog_text2");
let wrong3 = document.querySelector(".wrog_text3");
let wrong4 = document.querySelector(".wrog_text4");
let arr = [];
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let emailRegEx = /[a-z0-9]{6,12}@gmail/;
  let passwordRegEx = /^[0-9]{8,12}$/;
  let nameRegEx = /[a-zA-Z]/;
  let emailValue = email.value;
  let passwordValue = Number(password.value);
  let passworddValue = Number(passwordd.value);
  let nameValue = username.value;

  if (emailValue == "" || passwordValue == "" || nameValue == "") {
    pass.style.border = "2px solid red";
    //   console.log(i);
  } else {
    if (
      emailRegEx.test(emailValue) &&
      passwordRegEx.test(passwordValue) &&
      nameRegEx.test(nameValue) &&
      passwordValue === passworddValue
    ) {
      setTimeout(() => {
        alert("Malumotlar qabul qilindi😊. Malumot uchun rahmat.👌");
      }, 100);

      arr = [username.value, email.value, password.value, passwordd.value];
      console.log(arr);

      setTimeout(() => {
        alert(`Salom ${arr[0]} ! Xush kelibsiz !`);
      }, 200);

      let map = "account.html";

      setTimeout(() => {
        window.location.href = map;
      }, 300);

      let l = document.querySelector(".text");
      //   console.log(l);

      username.value = "";
      email.value = "";
      password.value = "";
      passwordd.value = "";
      inp1.style.border = "2px solid #ffffff68";
      inp2.style.border = "2px solid #ffffff68";
      inp3.style.border = "2px solid #ffffff68";
      inp4.style.border = "2px solid #ffffff68";
    } else if (!nameRegEx.test(nameValue)) {
      inp1.style.border = "2px solid red";
    } else if (!emailRegEx.test(emailValue)) {
      setTimeout(() => {
        inp2.style.border = "2px solid red";
        wrong2.textContent = "Iltimos emailingizni to'g'ri kiriting!";
      }, 2000);
    } else if (!passwordRegEx.test(passwordValue)) {
      setTimeout(() => {
        inp3.style.border = "2px solid red";
        wrong3.textContent =
          "Iltimos parolingizni (8-12 ta raqam) ko'rinishida kiriting!";
      }, 2000);
    } else if (!passwordValue == !passworddValue) {
      setTimeout(() => {
        inp4.style.border = "2px solid red";
        wrong4.textContent = "Parolingiz bo'yicha to'g'ri kelmayapti!";
      }, 2000);
      console.log("Invalid password");
    }
  }
});

console.log(arr[0]);

function accountFunc(a) {}
accountFunc(arr[0]);
