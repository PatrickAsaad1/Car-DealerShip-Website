// ============================================
// TOGGLE PASSWORD VISIBILITY (Eye Icon)
// ============================================
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

// ============================================
// GET CURRENT PAGE NAME
// ============================================

function getCurrentPage() {
  const path = window.location.pathname;
  const page = path.split("/").pop();
  return page;
}

// ============================================
// LOGIN VALIDATION
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

  if (Password.length >= 64) {
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  document.getElementById("action").innerHTML = "Login Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
}

// ============================================
// SIGNUP VALIDATION
// ============================================

function validateSignup() {
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let PasswordInput = document.querySelector(".input-password");
  let Password = PasswordInput ? PasswordInput.value.trim() : "";
  let ConfPassInput = document.querySelector(".input-confpassword");
  let ConfPass = ConfPassInput ? ConfPassInput.value.trim() : "";
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput ? EmailInput.value.trim() : "";

  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");
  const Eline = document.getElementById("Eline");
  const cPline = document.getElementById("cPline");

  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";
  if (cPline) cPline.style.backgroundColor = "#666";

  if (Email === "" && Username === "" && Password === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your Email, Username and Password";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Username === "" && Password === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Email === "" && Password === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Password";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (Email === "" && Username === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Email === "") {
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    if (Eline) Eline.style.backgroundColor = "red";
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

  if (Password.length >= 64) {
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  if (!Email.includes("@") || !Email.includes(".")) {
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (ConfPass === "") {
    document.getElementById("action").innerHTML =
      "Please Confirm Your Password";
    if (cPline) cPline.style.backgroundColor = "red";
    return;
  }

  if (ConfPass !== Password) {
    document.getElementById("action").innerHTML =
      "Confirm Password Is Incorrect";
    if (cPline) cPline.style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  document.getElementById("action").innerHTML = "SignUp Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";
  if (cPline) cPline.style.backgroundColor = "green";
}

// ============================================
// SEND OTP VALIDATION
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
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Email === "") {
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (Username === "") {
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (!Email.includes("@") || !Email.includes(".")) {
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  document.getElementById("action").innerHTML = "Code Sent Successfully!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";

  setTimeout(function () {
    window.location.href = "OTP.html";
  }, 2000);
}

// ============================================
// OTP VALIDATION
// ============================================

function validateOTP() {
  let OTPInput = document.querySelector(".input-OTP");
  let UserOTP = OTPInput ? OTPInput.value.trim() : "";
  const OTP = "416964";

  const Oline = document.getElementById("Oline");
  if (Oline) Oline.style.backgroundColor = "#666";

  if (UserOTP === OTP) {
    document.getElementById("action").innerHTML =
      "OTP Code Verified Successfully! Redirecting...";
    if (Oline) Oline.style.backgroundColor = "green";

    setTimeout(function () {
      window.location.href = "ChangePass.html";
    }, 2000);
  } else {
    document.getElementById("action").innerHTML = "Invalid OTP Code!";
    if (Oline) Oline.style.backgroundColor = "red";
  }
}

// ============================================
// CHANGE PASSWORD VALIDATION
// ============================================

function validateChangePass() {
  const passwordInputs = document.querySelectorAll(".input-password");

  const newPassword = passwordInputs[0] ? passwordInputs[0].value.trim() : "";
  const confirmPassword = passwordInputs[1]
    ? passwordInputs[1].value.trim()
    : "";

  const line1 = document.getElementById("Pline1");
  const line2 = document.getElementById("Pline2");
  const lines = [line1, line2].filter((line) => line !== null);

  lines.forEach(function (line) {
    line.style.backgroundColor = "#666";
  });

  if (newPassword === "" && confirmPassword === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your New Password and Confirm It";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  if (newPassword === "") {
    document.getElementById("action").innerHTML =
      "Please Enter Your New Password";
    if (lines[0]) lines[0].style.backgroundColor = "red";
    return;
  }

  if (confirmPassword === "") {
    document.getElementById("action").innerHTML =
      "Please Confirm Your Password";
    if (lines[1]) lines[1].style.backgroundColor = "red";
    return;
  }

  if (newPassword !== confirmPassword) {
    document.getElementById("action").innerHTML = "Passwords Do Not Match!";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  if (newPassword.length < 8) {
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  if (newPassword.length >= 64) {
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  document.getElementById("action").innerHTML =
    "Password Changed Successfully!";
  lines.forEach(function (line) {
    line.style.backgroundColor = "green";
  });
}

// ============================================
// SEARCH FUNCTIONALITY (Buy-Browse Page)
// ============================================

function setupSearch() {
  console.log("setupSearch() started");

  const searchInput = document.querySelector(".car-search");
  const searchBtn = document.querySelector(".search-btn");
  const carCards = document.querySelectorAll(".car-card");

  console.log("searchInput:", searchInput);
  console.log("searchBtn:", searchBtn);
  console.log("carCards count:", carCards.length);

  // If no search elements exist, exit
  if (!searchInput || !searchBtn || carCards.length === 0) {
    console.log("Search elements not found on this page, exiting.");
    return;
  }

  console.log("Search elements found! Setting up event listeners...");

  function filterCars() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    console.log("Filtering for:", searchTerm || "(empty)");

    let visibleCount = 0;

    carCards.forEach(function (card) {
      const carName = card
        .querySelector(".car-info h3")
        .textContent.toLowerCase();
      const carDesc = card
        .querySelector(".car-info p")
        .textContent.toLowerCase();

      const matches =
        carName.includes(searchTerm) || carDesc.includes(searchTerm);

      if (matches) {
        card.style.display = "flex";
        visibleCount++;
      } else {
        card.style.display = "none";
      }
    });

    console.log("Visible cars:", visibleCount);
  }

  // Button click
  searchBtn.addEventListener("click", function () {
    console.log("Search button clicked!");
    filterCars();
  });

  // Enter key
  searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      console.log("Enter key pressed!");
      filterCars();
    }
  });

  // Live search (as you type)
  searchInput.addEventListener("input", function () {
    console.log("Input event fired!");
    filterCars();
  });

  console.log("Search setup complete!");
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
      const validPages = [
        "Login.html",
        "Signup.html",
        "SendOTP.html",
        "OTP.html",
        "ChangePass.html",
      ];
      if (!validPages.includes(page)) {
        window.location.href = "404.html";
      }
  }
}

// ============================================
// SETUP - Runs when page loads
// ============================================

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded!");
  setupPasswordToggles();
  setupSearch();
});
