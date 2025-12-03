document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form submission

  // Clear previous error messages
  document.getElementById("fullnameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("passwordError").innerText = "";
  document.getElementById("confirmPasswordError").innerText = "";
  document.getElementById("phoneError").innerText = "";
  document.getElementById("successMessage").innerText = "";

  let isValid = true;

  // Full Name validation
  const fullname = document.getElementById("fullname").value.trim();
  if (fullname === "") {
    document.getElementById("fullnameError").innerText = "Full name is required.";
    isValid = false;
  }

  // Email validation
  const email = document.getElementById("email").value.trim();
  if (!email.includes("@") || !email.includes(".")) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    isValid = false;
  }

  // Password validation
  const password = document.getElementById("password").value;
  if (password.length < 6) {
    document.getElementById("passwordError").innerText = "Password must be at least 6 characters.";
    isValid = false;
  }

  // Confirm Password validation
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    document.getElementById("confirmPasswordError").innerText = "Passwords do not match.";
    isValid = false;
  }

  // Phone validation
  const phone = document.getElementById("phone").value.trim();
  const phoneRegex = /^[0-9]+$/;
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneError").innerText = "Phone number must contain only digits.";
    isValid = false;
  }

  // Success message
  if (isValid) {
    document.getElementById("successMessage").innerText = "Registration Successful!";
  }
});