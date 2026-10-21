const form = document.getElementById("loginForm");
const error = document.getElementById("error");
const pw = document.getElementById("password");

document.getElementById("toggle").addEventListener("click", (e) => {
  const hidden = pw.type === "password";
  pw.type = hidden ? "text" : "password";
  e.target.textContent = hidden ? "Hide" : "Show";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  if (!email || !pw.value) { error.textContent = "Please enter your email and password."; return; }
  if (!email.includes("@")) { error.textContent = "Please enter a valid email address."; return; }
  if (pw.value.length < 6) { error.textContent = "Password must be at least 6 characters."; return; }
  error.textContent = "";
  alert("Login successful (demo)");
});
