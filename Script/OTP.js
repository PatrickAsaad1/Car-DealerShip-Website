function Check() {
  let OTPInput = document.querySelector(".input-OTP");
  let UserOTP = OTPInput.value.trim();
  const OTP = "416964"; // Example OTP code for testing

  // Reset lines to gray at the start of every check
  document.getElementById("Oline").style.backgroundColor = "#666";

  if (UserOTP === OTP) {
    console.log("OTP Code Verified Successfully");
    document.getElementById("action").innerHTML =
      "OTP Code Verified Successfully!";
    document.getElementById("Oline").style.backgroundColor = "green";
  } else {
    console.log("ERROR: Invalid OTP Code");
    document.getElementById("action").innerHTML = "Invalid OTP Code!";
    document.getElementById("Oline").style.backgroundColor = "red";
  }
}
