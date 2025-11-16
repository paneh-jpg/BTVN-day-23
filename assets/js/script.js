// Get input elements
const form = document.querySelector("#form");

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm");

// Get icon & error elements
const iconUsername = document.querySelector("#icon-username");
const errorUsername = document.querySelector("#error-username");

const iconEmail = document.querySelector("#icon-email");
const errorEmail = document.querySelector("#error-email");

const iconPassword = document.querySelector("#icon-password");
const errorPassword = document.querySelector("#error-password");

const iconConfirm = document.querySelector("#icon-confirm");
const errorConfirm = document.querySelector("#error-confirm");

// Show error
function showError(input, message, iconEl, errorEl) {
  input.classList.remove("border-gray-300", "border-emerald-500");
  input.classList.add("border-red-500", "bg-red-50");

  iconEl.classList.remove("hidden");
  iconEl.innerHTML = `<i class="fa-solid fa-circle-exclamation text-red-500"></i>`;

  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
}

// Show success
function showSuccess(input, iconEl, errorEl) {
  input.classList.remove("border-gray-300", "border-red-500", "bg-red-50");
  input.classList.add("border-emerald-500");

  iconEl.classList.remove("hidden");
  iconEl.innerHTML = `<i class="fa-solid fa-circle-check text-green-500"></i>`;

  errorEl.classList.add("hidden");
}

// Validate username
function validateUsername() {
  const value = username.value;

  if (value.trim() === "") {
    showError(
      username,
      "Username cannot be blank",
      iconUsername,
      errorUsername
    );
    return false;
  }

  if (/\s/.test(value)) {
    showError(
      username,
      "Username cannot contain whitespace",
      iconUsername,
      errorUsername
    );
    return false;
  }

  if (!/^[A-Za-z0-9._]+$/.test(value)) {
    showError(
      username,
      "Only letters, numbers, underscores and dots are allowed",
      iconUsername,
      errorUsername
    );
    return false;
  }

  if (/\.\./.test(value)) {
    showError(
      username,
      "Username cannot contain consecutive dots",
      iconUsername,
      errorUsername
    );
    return false;
  }

  if (/^\./.test(value) || /\.$/.test(value)) {
    showError(
      username,
      "Username cannot start or end with a dot",
      iconUsername,
      errorUsername
    );
    return false;
  }

  showSuccess(username, iconUsername, errorUsername);
  return true;
}

// Validate email
function validateEmail() {
  const value = email.value.trim();

  const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  if (!isValid) {
    showError(email, "Please enter a valid email", iconEmail, errorEmail);
    return false;
  }

  showSuccess(email, iconEmail, errorEmail);
  return true;
}

// Validate password
function validatePassword() {
  const value = password.value;

  if (/\s/.test(value)) {
    showError(
      password,
      "Password cannot contain spaces",
      iconPassword,
      errorPassword
    );
    return false;
  }

  if (value.length < 8) {
    showError(
      password,
      "Password must be at least 8 characters",
      iconPassword,
      errorPassword
    );
    return false;
  }

  if (
    !/[a-z]/.test(value) ||
    !/[A-Z]/.test(value) ||
    !/[0-9]/.test(value) ||
    !/[^A-Za-z0-9]/.test(value)
  ) {
    showError(
      password,
      "Password must contain uppercase, lowercase letters, a digit, and a special character",
      iconPassword,
      errorPassword
    );
    return false;
  }

  showSuccess(password, iconPassword, errorPassword);
  return true;
}

// Validate Confirm Password
function validateConfirm() {
  if (!validatePassword()) {
    showError(
      confirmPassword,
      "Password is invalid",
      iconConfirm,
      errorConfirm
    );
    return false;
  }

  if (
    confirmPassword.value !== password.value ||
    confirmPassword.value === ""
  ) {
    showError(
      confirmPassword,
      "Password do not match",
      iconConfirm,
      errorConfirm
    );
    return false;
  }

  showSuccess(confirmPassword, iconConfirm, errorConfirm);
  return true;
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPassword.addEventListener("input", validateConfirm);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ok1 = validateUsername();
  const ok2 = validateEmail();
  const ok3 = validatePassword();
  const ok4 = validateConfirm();

  if (ok1 && ok2 && ok3 && ok4) {
    alert("Your registration has been completed successfully");
  }
});
