function setupPasswordToggles() {
  const wrappers = document.querySelectorAll(".password-wrapper");

  wrappers.forEach(function (wrapper) {
    const eyeBox = wrapper.querySelector(".eyebox");
    const passwordInput =
      wrapper.querySelector(".input-password") ||
      wrapper.querySelector(".input-confpassword");
    const eyeIcon = eyeBox ? eyeBox.querySelector("i") : null;

    if (eyeBox && passwordInput && eyeIcon) {
      eyeBox.addEventListener("click", function () {
        if (passwordInput.type === "password") {
          passwordInput.type = "text";
          eyeIcon.classList.remove("fa-eye");
          eyeIcon.classList.add("fa-eye-slash");
        } else {
          passwordInput.type = "password";
          eyeIcon.classList.remove("fa-eye-slash");
          eyeIcon.classList.add("fa-eye");
        }
      });
    }
  });
}

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split("/").pop();
}

function validateLogin() {
  let Username = document.querySelector(".input-username")?.value.trim() || "";
  let Password = document.querySelector(".input-password")?.value.trim() || "";

  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");

  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";

  if (Username === "" && Password === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username === "") {
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Password === "") {
    document.getElementById("action").innerHTML = "Please Enter Your Password";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Password.length < 8) {
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  document.getElementById("action").innerHTML = "Login Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";

  setTimeout(() => {
    window.location.href = "Index.html";
  }, 1000);
}

function validateSignup() {
  let Email = document.querySelector(".input-email")?.value.trim() || "";
  let Username = document.querySelector(".input-username")?.value.trim() || "";
  let Password = document.querySelector(".input-password")?.value.trim() || "";
  let ConfPass = document.querySelector(".input-confpassword")?.value.trim() || "";

  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");
  const Eline = document.getElementById("Eline");
  const cPline = document.getElementById("cPline");

  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";
  if (cPline) cPline.style.backgroundColor = "#666";

  if (!Email || !Username || !Password) {
    document.getElementById("action").innerHTML =
      "Please Fill All Required Fields";
    if (!Email && Eline) Eline.style.backgroundColor = "red";
    if (!Username && Uline) Uline.style.backgroundColor = "red";
    if (!Password && Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Password.length < 8) {
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (ConfPass !== Password) {
    document.getElementById("action").innerHTML =
      "Passwords Do Not Match";
    if (cPline) cPline.style.backgroundColor = "red";
    return;
  }

  if (!Email.includes("@") || !Email.includes(".")) {
    document.getElementById("action").innerHTML =
      "Invalid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  document.getElementById("action").innerHTML =
    "SignUp Successful! Redirecting...";

  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";
  if (cPline) cPline.style.backgroundColor = "green";

  setTimeout(() => {
    window.location.href = "Login.html";
  }, 1500);
}

function validateSendOTP() {
  let Username = document.querySelector(".input-username")?.value.trim() || "";
  let Email = document.querySelector(".input-email")?.value.trim() || "";

  const Uline = document.getElementById("Uline");
  const Eline = document.getElementById("Eline");

  if (Uline) Uline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";

  if (!Username || !Email) {
    document.getElementById("action").innerHTML =
      "Please Fill All Fields";
    return;
  }

  document.getElementById("action").innerHTML =
    "Code Sent Successfully!";

  setTimeout(() => {
    window.location.href = "OTP.html";
  }, 2000);
}

function validateOTP() {
  let OTP = document.querySelector(".input-OTP")?.value.trim() || "";
  const correctOTP = "416964";

  const Oline = document.getElementById("Oline");

  if (OTP === correctOTP) {
    document.getElementById("action").innerHTML =
      "OTP Verified! Redirecting...";

    if (Oline) Oline.style.backgroundColor = "green";

    setTimeout(() => {
      window.location.href = "ChangePass.html";
    }, 2000);
  } else {
    document.getElementById("action").innerHTML = "Invalid OTP!";
    if (Oline) Oline.style.backgroundColor = "red";
  }
}

function validateChangePass() {
  const inputs = document.querySelectorAll(".input-password");

  const newPass = inputs[0]?.value.trim() || "";
  const confirmPass = inputs[1]?.value.trim() || "";

  const lines = document.querySelectorAll(".line");

  if (newPass !== confirmPass) {
    document.getElementById("action").innerHTML =
      "Passwords Do Not Match";
    lines.forEach(l => l.style.backgroundColor = "red");
    return;
  }

  document.getElementById("action").innerHTML =
    "Password Changed Successfully!";

  lines.forEach(l => l.style.backgroundColor = "green");
}

function Check() {
  const page = getCurrentPage();

  if (page === "Login.html") validateLogin();
  else if (page === "Signup.html") validateSignup();
  else if (page === "SendOTP.html") validateSendOTP();
  else if (page === "OTP.html") validateOTP();
  else if (page === "ChangePass.html") validateChangePass();
}

document.addEventListener("DOMContentLoaded", function () {
  setupPasswordToggles();
});