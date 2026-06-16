const toggleEye = document.getElementById("toggleEye");
const passwordInput = document.getElementById("passwordInput");
const eyeIcon = document.getElementById("eyeIcon");

toggleEye.addEventListener("click", function () {
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

function Check() {
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput.value.trim();
  let PasswordInput = document.querySelector(".input-password");
  let Password = PasswordInput.value.trim();
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput.value.trim();
  
  // Reset lines to gray at the start of every check
  document.getElementById("Uline").style.backgroundColor = "#666";
  document.getElementById("Pline").style.backgroundColor = "#666";
  document.getElementById("Eline").style.backgroundColor = "#666";

  if (Email === "" && Username === "" && Password === "") {
    console.log("ERROR: No Email, Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email, Username and Password";
    document.getElementById("Eline").style.backgroundColor = "red";
    document.getElementById("Uline").style.backgroundColor = "red";
    document.getElementById("Pline").style.backgroundColor = "red";
    return;
  }

  if (Username === "" && Password === "") {
    console.log("ERROR: No Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    document.getElementById("Uline").style.backgroundColor = "red";
    document.getElementById("Pline").style.backgroundColor = "red";
    return;
  }

  if (Email === "" && Password === "") {
    console.log("ERROR: No Email or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Password";
    document.getElementById("Eline").style.backgroundColor = "red";
    document.getElementById("Pline").style.backgroundColor = "red";
    return;
  }

  if (Email === "" && Username === "") {
    console.log("ERROR: No Email or Username Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Email and Username";
    document.getElementById("Eline").style.backgroundColor = "red";
    document.getElementById("Uline").style.backgroundColor = "red";
    return;
  }

  if (Email === "") {
    console.log("ERROR: No Email Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Email";
    document.getElementById("Eline").style.backgroundColor = "red";
    return;
  }

  if (Username === "") {
    console.log("ERROR: Empty Username Input");
    document.getElementById("action").innerHTML = "Please Enter Your Username";
    document.getElementById("Uline").style.backgroundColor = "red";
    return;
  }

  if (Password === "") {
    console.log("ERROR: No Password Entered");
    document.getElementById("action").innerHTML = "Please Enter Your Password";
    document.getElementById("Pline").style.backgroundColor = "red";
    return;
  }

  if (Password.length < 8) {
    console.log("ERROR: Password Too Short");
    document.getElementById("action").innerHTML =
      "Password Must Be At Least 8 Characters Long";
    document.getElementById("Pline").style.backgroundColor = "red";
    return;
  }

  if (!Email.includes("@") || !Email.includes(".")) {
    console.log("ERROR: Invalid Email Format");
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    document.getElementById("Eline").style.backgroundColor = "red";
    return;
  }

  if (Password.length >= 64) {
    console.log("ERROR: Password Too Long");
    document.getElementById("action").innerHTML =
      "Password Must Be Less Than 64 Characters Long";
    document.getElementById("Pline").style.backgroundColor = "red";
    return;
  }

  if (Username.length >= 32) {
    console.log("ERROR: Username Too Long");
    document.getElementById("action").innerHTML =
      "Username Must Be Less Than 32 Characters Long";
    document.getElementById("Uline").style.backgroundColor = "red";
    return;
  }

  if (Username.length < 3) {
    console.log("ERROR: Username Too Short");
    document.getElementById("action").innerHTML =
      "Username Must Be At Least 3 Characters Long";
    document.getElementById("Uline").style.backgroundColor = "red";
    return;
  }

  console.log("SignUp Successful");
  document.getElementById("action").innerHTML = "SignUp Successful!";
  document.getElementById("Uline").style.backgroundColor = "green";
  document.getElementById("Pline").style.backgroundColor = "green";
  document.getElementById("Eline").style.backgroundColor = "green";
}
