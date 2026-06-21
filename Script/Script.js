// ============================================
// SHARED: Toggle Password Visibility
// ============================================

function setupPasswordToggles() {
  // Find all password wrapper elements
  const wrappers = document.querySelectorAll(".password-wrapper");

  // Loop through each wrapper to set up toggle functionality
  wrappers.forEach(function (wrapper) {
    const eyeBox = wrapper.querySelector(".eyebox");
    const passwordInput =
      wrapper.querySelector(".input-password") ||
      wrapper.querySelector(".input-confpassword");
    const eyeIcon = eyeBox ? eyeBox.querySelector("i") : null;

    // Only proceed if all required elements exist
    if (eyeBox && passwordInput && eyeIcon) {
      // Add click event to toggle password visibility
      eyeBox.addEventListener("click", function () {
        if (passwordInput.type === "password") {
          // Show password: change input type to text and update icon
          passwordInput.type = "text";
          eyeIcon.classList.remove("fa-eye");
          eyeIcon.classList.add("fa-eye-slash");
          console.log("Password Not Hidden");
        } else {
          // Hide password: change input type to password and update icon
          passwordInput.type = "password";
          eyeIcon.classList.remove("fa-eye-slash");
          eyeIcon.classList.add("fa-eye");
          console.log("Password Hidden");
        }
      });
    }
  });
}

// ============================================
// SHARED: Get Page Name
// ============================================

function getCurrentPage() {
  // Extract the current page filename from the URL path
  const path = window.location.pathname;
  const page = path.split("/").pop();
  console.log("Got Page Successfully: " + page);
  return page;
}

// ============================================
// LOGIN Page Validation
// ============================================

function validateLogin() {
  // Get input values and trim whitespace
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let PasswordInput = document.querySelector(".input-password");
  let Password = PasswordInput ? PasswordInput.value.trim() : "";

  // Get underline elements for styling feedback
  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");

  // Reset underlines to default gray
  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";

  // Validation: Both fields empty
  if (Username === "" && Password === "") {
    console.log("ERROR: No Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username empty
  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Password empty
  if (Password === "") {
    console.log("ERROR: No Password Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Password";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Password minimum length
  if (Password.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Password maximum length
  if (Password.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username maximum length
  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username minimum length
  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // All validations passed
  console.log("Login Successful");
  document.getElementById("action").innerHTML = "Login Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
}

// ============================================
// SIGNUP Page Validation
// ============================================

function validateSignup() {
  // Get all input values
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let PasswordInput = document.querySelector(".input-password");
  let Password = PasswordInput ? PasswordInput.value.trim() : "";
  let ConfPassInput = document.querySelector(".input-confpassword");
  let ConfPass = ConfPassInput ? ConfPassInput.value.trim() : "";
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput ? EmailInput.value.trim() : "";

  // Get all underline elements
  const Uline = document.getElementById("Uline");
  const Pline = document.getElementById("Pline");
  const Eline = document.getElementById("Eline");
  const cPline = document.getElementById("cPline");

  // Reset all underlines to gray
  if (Uline) Uline.style.backgroundColor = "#666";
  if (Pline) Pline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";
  if (cPline) cPline.style.backgroundColor = "#666";

  // Validation: All fields empty
  if (Email === "" && Username === "" && Password === "") {
    console.log("ERROR: No Email, Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email, Username and Password";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username and Password empty
  if (Username === "" && Password === "") {
    console.log("ERROR: No Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    if (Uline) Uline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Email and Password empty
  if (Email === "" && Password === "") {
    console.log("ERROR: No Email or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Password";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Email and Username empty
  if (Email === "" && Username === "") {
    console.log("ERROR: No Email or Username Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Email empty
  if (Email === "") {
    console.log("ERROR: No Email Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username empty
  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Password empty
  if (Password === "") {
    console.log("ERROR: No Password Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Password";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Password minimum length
  if (Password.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Email format (must contain @ and .)
  if (!Email.includes("@") || !Email.includes(".")) {
    console.log("ERROR: Invalid Email Format");
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  // Validation: Password maximum length
  if (Password.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    if (Pline) Pline.style.backgroundColor = "red";
    return;
  }

  // Validation: Confirm password empty
  if (ConfPass === "") {
    console.log("ERROR: User Left The ConfPass Input Empty");
    document.getElementById("action").innerHTML =
      "Please Confirm Your Password";
    if (cPline) cPline.style.backgroundColor = "red";
    return;
  }

  // Validation: Passwords don't match
  if (ConfPass !== Password) {
    console.log("ERROR: User didn't confirm password correctly");
    document.getElementById("action").innerHTML =
      "Confirm Password Is Incorrect";
    if (cPline) cPline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username maximum length
  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username minimum length
  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // All validations passed
  console.log("SignUp Successful");
  document.getElementById("action").innerHTML = "SignUp Successful!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Pline) Pline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";
  if (cPline) cPline.style.backgroundColor = "green";
}

// ============================================
// SEND OTP Page Validation
// ============================================

function validateSendOTP() {
  // Get input values
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput ? UsernameInput.value.trim() : "";
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput ? EmailInput.value.trim() : "";

  // Get underline elements
  const Uline = document.getElementById("Uline");
  const Eline = document.getElementById("Eline");

  // Reset underlines to gray
  if (Uline) Uline.style.backgroundColor = "#666";
  if (Eline) Eline.style.backgroundColor = "#666";

  // Validation: Both fields empty
  if (Email === "" && Username === "") {
    console.log("ERROR: No Email or Username Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    if (Eline) Eline.style.backgroundColor = "red";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Email empty
  if (Email === "") {
    console.log("ERROR: No Email Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username empty
  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Email format
  if (!Email.includes("@") || !Email.includes(".")) {
    console.log("ERROR: Invalid Email Format");
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    if (Eline) Eline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username maximum length
  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // Validation: Username minimum length
  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    if (Uline) Uline.style.backgroundColor = "red";
    return;
  }

  // All validations passed - simulate sending OTP
  console.log("Code Sent Successfully");
  document.getElementById("action").innerHTML = "Code Sent Successfully!";
  if (Uline) Uline.style.backgroundColor = "green";
  if (Eline) Eline.style.backgroundColor = "green";

  // Redirect to OTP page after 2 seconds
  setTimeout(function () {
    window.location.href = "OTP.html";
  }, 2000);
}

// ============================================
// OTP Page Validation
// ============================================

function validateOTP() {
  // Get OTP input value
  let OTPInput = document.querySelector(".input-OTP");
  let UserOTP = OTPInput ? OTPInput.value.trim() : "";
  const OTP = "416964"; // Hardcoded OTP for demo purposes

  const Oline = document.getElementById("Oline");
  if (Oline) Oline.style.backgroundColor = "#666";

  // Check if entered OTP matches the hardcoded OTP
  if (UserOTP === OTP) {
    console.log("OTP Code Verified Successfully");
    document.getElementById("action").innerHTML =
      "OTP Code Verified Successfully! Redirecting...";
    if (Oline) Oline.style.backgroundColor = "green";

    // Redirect to change password page after 2 seconds
    setTimeout(function () {
      window.location.href = "ChangePass.html";
    }, 2000);
  } else {
    console.log("ERROR: Invalid OTP Code");
    document.getElementById("action").innerHTML = "Invalid OTP Code!";
    if (Oline) Oline.style.backgroundColor = "red";
  }
}

// ============================================
// CHANGE PASS Page Validation - FIXED
// ============================================

function validateChangePass() {
  // Get BOTH password inputs using class selector
  const passwordInputs = document.querySelectorAll(".input-password");

  // First input = New Password, Second input = Confirm Password
  const newPassword = passwordInputs[0] ? passwordInputs[0].value.trim() : "";
  const confirmPassword = passwordInputs[1]
    ? passwordInputs[1].value.trim()
    : "";

  // FIXED: Get lines by their specific IDs instead of relying on order
  const line1 = document.getElementById("Pline1");
  const line2 = document.getElementById("Pline2");
  const lines = [line1, line2].filter((line) => line !== null);

  // Reset lines to gray
  lines.forEach(function (line) {
    line.style.backgroundColor = "#666";
  });

  // Validation: Both fields empty
  if (newPassword === "" && confirmPassword === "") {
    console.log("ERROR: No Passwords Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your New Password and Confirm It";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  // Validation: New password empty
  if (newPassword === "") {
    console.log("ERROR: New Password is Empty");
    document.getElementById("action").innerHTML =
      "Please Enter Your New Password";
    if (lines[0]) lines[0].style.backgroundColor = "red";
    return;
  }

  // Validation: Confirm password empty
  if (confirmPassword === "") {
    console.log("ERROR: Confirm Password is Empty");
    document.getElementById("action").innerHTML =
      "Please Confirm Your Password";
    if (lines[1]) lines[1].style.backgroundColor = "red";
    return;
  }

  // Validation: Passwords don't match
  if (newPassword !== confirmPassword) {
    console.log("ERROR: Passwords Do Not Match");
    document.getElementById("action").innerHTML = "Passwords Do Not Match!";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  // Validation: Password minimum length
  if (newPassword.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  // Validation: Password maximum length
  if (newPassword.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    lines.forEach(function (line) {
      line.style.backgroundColor = "red";
    });
    return;
  }

  // All validations passed
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
  // Get current page name
  const page = getCurrentPage();

  // Route to the appropriate validation function based on page
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
      // If page is not one of the valid pages, redirect to 404
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
  // Initialize password toggle functionality for all password fields
  setupPasswordToggles();
  console.log("Current page: " + getCurrentPage());
});
