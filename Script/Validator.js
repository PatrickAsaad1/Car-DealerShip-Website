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
  // Reset lines to gray at the start of every check
  document.getElementById("Uline").style.backgroundColor = "#666";
  document.getElementById("Pline").style.backgroundColor = "#666";
  if (Username === "" && Password === "") {
    console.log("ERROR: No Username or Password Entered");
    document.getElementById("action").innerHTML =
      "Please Enter Your Username and Password";
    document.getElementById("Uline").style.backgroundColor = "red";
    document.getElementById("Pline").style.backgroundColor = "red";
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
  console.log("Login Successful");
  document.getElementById("action").innerHTML = "Login Successful!";
  document.getElementById("Uline").style.backgroundColor = "green";
  document.getElementById("Pline").style.backgroundColor = "green";
}
