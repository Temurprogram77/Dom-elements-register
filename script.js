let username = document.querySelector(".username");
let email = document.querySelector(".email");
let password = document.querySelector(".password");
let passwordd = document.querySelector(".passwordd");
let btn = document.querySelector(".btn");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");
let inp4 = document.querySelector(".inp4");
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
    alert("⚠️⚠️ Avval malumotlarni to'liq yozing ⚠️⚠️");
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

      let l =  document.querySelector(".text");
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
      inp2.style.border = "2px solid red";
    } else if (!passwordRegEx.test(passwordValue)) {
      inp3.style.border = "2px solid red";
    } else if (!passwordValue == !passworddValue) {
      inp4.style.border = "2px solid red";
      console.log("Invalid password");
    } else {
      alert("Malumotlar qabul qilinmadi😒. ILtimos qayta urinib ko'ring !");
    }
  }
});

console.log(arr[0]);

function accountFunc(a) {
    
}
accountFunc(arr[0]);
