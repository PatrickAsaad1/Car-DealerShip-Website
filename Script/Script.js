function setupPasswordToggles() {
  const wrappers = document.querySelectorAll(".password-wrapper");

  wrappers.forEach((wrapper) => {
    const eyeBox = wrapper.querySelector(".eyebox");
    const passwordInput =
      wrapper.querySelector(".input-password") ||
      wrapper.querySelector(".input-confpassword");

    const eyeIcon = eyeBox ? eyeBox.querySelector("i") : null;

    if (!eyeBox || !passwordInput || !eyeIcon) return;

    eyeBox.addEventListener("click", () => {
      const isHidden = passwordInput.type === "password";

      passwordInput.type = isHidden ? "text" : "password";

      eyeIcon.classList.toggle("fa-eye");
      eyeIcon.classList.toggle("fa-eye-slash");
    });
  });
}

function getCurrentPage() {
  return window.location.pathname.split("/").pop();
}

function setLine(id, color) {
  const el = document.getElementById(id);
  if (el) el.style.backgroundColor = color;
}

function setMessage(text) {
  const el = document.getElementById("action");
  if (el) el.innerHTML = text;
}

/* ================= LOGIN ================= */

function validateLogin() {
  const username = document.querySelector(".input-username")?.value.trim() || "";
  const password = document.querySelector(".input-password")?.value.trim() || "";

  setLine("Uline", "#666");
  setLine("Pline", "#666");

  if (!username && !password) {
    setMessage("Enter username and password");
    setLine("Uline", "red");
    setLine("Pline", "red");
    return;
  }

  if (!username) {
    setMessage("Enter username");
    setLine("Uline", "red");
    return;
  }

  if (!password) {
    setMessage("Enter password");
    setLine("Pline", "red");
    return;
  }

  if (password.length < 8) {
    setMessage("Password must be at least 8 characters");
    setLine("Pline", "red");
    return;
  }

  setMessage("Login successful");
  setLine("Uline", "green");
  setLine("Pline", "green");

  setTimeout(() => {
    window.location.href = "Index.html";
  }, 1000);
}

/* ================= SIGNUP ================= */

function validateSignup() {
  const email = document.querySelector(".input-email")?.value.trim() || "";
  const username = document.querySelector(".input-username")?.value.trim() || "";
  const password = document.querySelector(".input-password")?.value.trim() || "";
  const confirm = document.querySelector(".input-confpassword")?.value.trim() || "";

  ["Uline", "Pline", "Eline", "cPline"].forEach((id) => setLine(id, "#666"));

  if (!email || !username || !password) {
    setMessage("Please fill all fields");

    if (!email) setLine("Eline", "red");
    if (!username) setLine("Uline", "red");
    if (!password) setLine("Pline", "red");
    return;
  }

  if (password.length < 8) {
    setMessage("Password must be at least 8 characters");
    setLine("Pline", "red");
    return;
  }

  if (confirm !== password) {
    setMessage("Passwords do not match");
    setLine("cPline", "red");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    setMessage("Invalid email");
    setLine("Eline", "red");
    return;
  }

  setMessage("Signup successful");

  ["Uline", "Pline", "Eline", "cPline"].forEach((id) => setLine(id, "green"));

  setTimeout(() => {
    window.location.href = "Login.html";
  }, 1500);
}

/* ================= OTP ================= */

function validateSendOTP() {
  const username = document.querySelector(".input-username")?.value.trim() || "";
  const email = document.querySelector(".input-email")?.value.trim() || "";

  setLine("Uline", "#666");
  setLine("Eline", "#666");

  if (!username || !email) {
    setMessage("Please fill all fields");
    return;
  }

  setMessage("OTP sent");

  setTimeout(() => {
    window.location.href = "OTP.html";
  }, 2000);
}

function validateOTP() {
  const otp = document.querySelector(".input-OTP")?.value.trim() || "";
  const correctOTP = "416964";

  if (otp === correctOTP) {
    setMessage("OTP verified");
    setLine("Oline", "green");

    setTimeout(() => {
      window.location.href = "ChangePass.html";
    }, 2000);
  } else {
    setMessage("Invalid OTP");
    setLine("Oline", "red");
  }
}

function validateChangePass() {
  const inputs = document.querySelectorAll(".input-password");

  const newPass = inputs[0]?.value.trim() || "";
  const confirmPass = inputs[1]?.value.trim() || "";

  const lines = document.querySelectorAll(".line");

  if (newPass !== confirmPass) {
    setMessage("Passwords do not match");
    lines.forEach((l) => (l.style.backgroundColor = "red"));
    return;
  }

  setMessage("Password changed successfully");

  lines.forEach((l) => (l.style.backgroundColor = "green"));
}

/* ================= CONTACT FORM ================= */

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", () => {
    const name = document.querySelector("#name")?.value.trim() || "";
    const email = document.querySelector("#email")?.value.trim() || "";
    const subject = document.querySelector("#subject")?.value.trim() || "";
    const message = document.querySelector("#userMessage")?.value.trim() || "";

    const formattedMessage =
      "Name: " + name + "\n" +
      "Email: " + email + "\n" +
      "Subject: " + subject + "\n" +
      "Message: " + message;

    document.querySelector("#finalMessage").value = formattedMessage;
  });
}

/* ================= MAIN CHECK ================= */

function Check() {
  const page = getCurrentPage();

  if (page === "Login.html") validateLogin();
  else if (page === "Signup.html") validateSignup();
  else if (page === "SendOTP.html") validateSendOTP();
  else if (page === "OTP.html") validateOTP();
  else if (page === "ChangePass.html") validateChangePass();
}

/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", () => {
  setupPasswordToggles();
  setupContactForm();
});