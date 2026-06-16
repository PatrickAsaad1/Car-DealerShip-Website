function Check() {
  let UsernameInput = document.querySelector(".input-username");
  let Username = UsernameInput.value.trim();
  let EmailInput = document.querySelector(".input-email");
  let Email = EmailInput.value.trim();
  
  // Reset lines to gray at the start of every check
  document.getElementById("Uline").style.backgroundColor = "#666";
  document.getElementById("Eline").style.backgroundColor = "#666";
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

  if (!Email.includes("@") || !Email.includes(".")) {
    console.log("ERROR: Invalid Email Format");
    document.getElementById("action").innerHTML =
      "Please Enter A Valid Email Address";
    document.getElementById("Eline").style.backgroundColor = "red";
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

  console.log("Code Sent Successfully");
  document.getElementById("action").innerHTML = "Code Sent Successfully!";
  document.getElementById("Uline").style.backgroundColor = "green";
  document.getElementById("Eline").style.backgroundColor = "green";
}
