// ============================================
// SHARED: Toggle Password Visibility
// ============================================

function setupPasswordToggles() {
  const wrappers = document.querySelectorAll(".password-wrapper");

  wrappers.forEach(function (wrapper) {
    const eyeBox = wrapper.querySelector(".eyebox");
    const passwordInput = wrapper.querySelector(".input-password");
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

// ============================================
// SHARED: Get Page Name
// ============================================

function getCurrentPage() {
  const path = window.location.pathname;
  return path.split("/").pop();
}

// ============================================
// LOGIN Page Validation (UNCHANGED)
// ============================================

function validateLogin() {
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let PasswordInput = document.querySelector(".input-password");
  let Password = PasswordInput ? PasswordInput.value.trim() : "";

  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");
  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";

  if (Username === "" && Password === "") {
    console.log("ERROR: No Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Password === "") {
    console.log("ERROR: No Password Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Password";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Password.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Password.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  console.log("Login Successful");
  document.getElementById("action").innerHTML = "Login Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
}

// ============================================
// SIGNUP Page Validation (UNCHANGED)
// ============================================

function validateSignup() {
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let PasswordInput = document.querySelector(".input-password");
  let Password = PasswordInput ? PasswordInput.value.trim() : "";
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput ? EmailInput.value.trim() : "";

  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");
  const Eline = document.getElementById("Eline");
  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";

  if (Email === "" && Username === "" && Password === "") {
    console.log("ERROR: No Email, Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email, Username and Password";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username === "" && Password === "") {
    console.log("ERROR: No Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Email === "" && Password === "") {
    console.log("ERROR: No Email or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Password";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Email === "" && Username === "") {
    console.log("ERROR: No Email or Username Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Email === "") {
    console.log("ERROR: No Email Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Password === "") {
    console.log("ERROR: No Password Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Password";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Password.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (!Email.includes("@") || !Email.includes(".")) {
    console.log("ERROR: Invalid Email Format");
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (Password.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  console.log("SignUp Successful");
  document.getElementById("action").innerHTML = "SignUp Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";
}

// ============================================
// SEND OTP Page Validation (UNCHANGED)
// ============================================

function validateSendOTP() {
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput ? EmailInput.value.trim() : "";

  const Uline = document.getElementById("Uline");
  const Eline = document.getElementById("Eline");
  if (Uline) Uline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";

  if (Email === "" && Username === "") {
    console.log("ERROR: No Email or Username Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Email === "") {
    console.log("ERROR: No Email Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (!Email.includes("@") || !Email.includes(".")) {
    console.log("ERROR: Invalid Email Format");
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  console.log("Code Sent Successfully");
  document.getElementById("action").innerHTML = "Code Sent Successfully!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";

  setTimeout(function () {
    window.location.href = "OTP.html";
  }, 2000);
}

// ============================================
// OTP Page Validation (UNCHANGED - hardcoded OTP stays)
// ============================================

function validateOTP() {
  let OTPInput = document.querySelector(".input-OTP");
  let UserOTP = OTPInput ? OTPInput.value.trim() : "";
  const OTP = "416964";

  const Oline = document.getElementById("Oline");
  if (Oline) Oline.style.backgroundColor = "#666";

  if (UserOTP === OTP) {
    console.log("OTP Code Verified Successfully");
    document.getElementById("action").innerHTML =
      "OTP Code Verified Successfully!";
    if (Oline) Oline.style.backgroundColor = "green";
  } else {
    console.log("ERROR: Invalid OTP Code");
    document.getElementById("action").innerHTML = "Invalid OTP Code!";
    if (Oline) Oline.style.backgroundColor = "red";
  }
}

// ============================================
// CHANGE PASS Page Validation (FIXED!)
// ============================================

function validateChangePass() {
  // Get BOTH password inputs using class
  const passwordInputs = document.querySelectorAll(".input-password");

  // First one = New Password, Second one = Confirm Password
  const newPassword = passwordInputs[0] ? passwordInputs[0].value.trim() : "";
  const confirmPassword = passwordInputs[1]
    ? passwordInputs[1].value.trim()
    : "";

  // Get all lines (there should be 2)
  const lines = document.querySelectorAll(".line");

  // Reset lines to gray
  lines.forEach(function (line) {
    line.style.backgroundColor = "#666";
  });

  // Check if both are filled
  if (newPassword === "" && confirmPassword === "") {
    console.log("ERROR: No Passwords Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your New Password and Confirm It";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  if (newPassword === "") {
    console.log("ERROR: New Password is Empty");
    document.getElementById("action").innerHTML =
      "Please Enter Your New Password";
    if (lines[0]) lines[0].style.backgroundColor = "red";
    return;
  }

  if (confirmPassword === "") {
    console.log("ERROR: Confirm Password is Empty");
    document.getElementById("action").innerHTML =
      "Please Confirm Your Password";
    if (lines[1]) lines[1].style.backgroundColor = "red";
    return;
  }

  // 🔴 CRITICAL FIX: Check if passwords match
  if (newPassword !== confirmPassword) {
    console.log("ERROR: Passwords Do Not Match");
    document.getElementById("action").innerHTML = "Passwords Do Not Match!";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  // Check password length
  if (newPassword.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  if (newPassword.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  console.log("Password Changed Successfully");
  document.getElementById("action").innerHTML =
    "Password Changed Successfully!";
  lines.forEach(function (line) {
    line.style.backgroundColor = "green";
  });
}

// ============================================
// PAGE ROUTER
// ============================================

function Check() {
  const page = getCurrentPage();

  switch (page) {
    case "Login.html":
      validateLogin();
      break;
    case "Signup.html":
      validateSignup();
      break;
    case "SendOTP.html":
      validateSendOTP();
      break;
    case "OTP.html":
      validateOTP();
      break;
    case "ChangePass.html":
      validateChangePass();
      break;
    default:
      console.log("Unknown page: " + page);
  }
}

// ============================================
// SETUP
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  setupPasswordToggles();
  console.log("Current page: " + getCurrentPage());
});
