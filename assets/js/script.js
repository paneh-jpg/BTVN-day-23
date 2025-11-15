const form = document.getElementById("form");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPwd = document.getElementById("confirm");

const iconUsername = document.getElementById("icon-username");
const errorUsername = document.getElementById("error-username");

const iconEmail = document.getElementById("icon-email");
const errorEmail = document.getElementById("error-email");

const iconPassword = document.getElementById("icon-password");
const errorPassword = document.getElementById("error-password");

const iconConfirm = document.getElementById("icon-confirm");
const errorConfirm = document.getElementById("error-confirm");

function showError(input, message, iconEl, errorEl) {
  input.classList.remove("border-gray-300");
  input.classList.add("border-red-500", "bg-red-50");

  iconEl.classList.remove("hidden");
  iconEl.innerHTML = `<i class="fa-solid fa-circle-exclamation text-red-500"></i>`;

  iconEl.classList.remove("animate-icon-shake");
  void iconEl.offsetWidth;
  iconEl.classList.add("animate-icon-shake");
  errorEl.textContent = message;
  errorEl.classList.remove("hidden");
}

function showSuccess(input, iconEl, errorEl) {
  input.classList.remove("border-gray-300", "border-red-500", "bg-red-50");
  input.classList.add("border-emerald-500");

  iconEl.classList.remove("hidden");
  iconEl.innerHTML = `<i class="fa-solid fa-circle-check text-green-500"></i>`;

  errorEl.classList.add("hidden");
}

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
  if (!/[a-z]/.test(value)) {
    showError(
      password,
      "Password must contain at least one lowercase letter",
      iconPassword,
      errorPassword
    );
    return false;
  }
  if (!/[A-Z]/.test(value)) {
    showError(
      password,
      "Password must contain at least one uppercase letter",
      iconPassword,
      errorPassword
    );
    return false;
  }
  if (!/[0-9]/.test(value)) {
    showError(
      password,
      "Password must contain at least one digit",
      iconPassword,
      errorPassword
    );
    return false;
  }
  if (!/[!@#$%^&*(),.?":{}|<>_\-\\\/\[\]=+]/.test(value)) {
    showError(
      password,
      "Password must contain at least one special character",
      iconPassword,
      errorPassword
    );
    return false;
  }

  showSuccess(password, iconPassword, errorPassword);
  return true;
}

function validateConfirm() {
  if (!validatePassword()) {
    showError(confirmPwd, "Password is invalid", iconConfirm, errorConfirm);
    return false;
  }

  if (confirmPwd.value !== password.value || confirmPwd.value === "") {
    showError(confirmPwd, "Passwords do not match", iconConfirm, errorConfirm);
    return false;
  }

  showSuccess(confirmPwd, iconConfirm, errorConfirm);
  return true;
}

username.addEventListener("input", validateUsername);
email.addEventListener("input", validateEmail);
password.addEventListener("input", validatePassword);
confirmPwd.addEventListener("input", validateConfirm);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ok1 = validateUsername();
  const ok2 = validateEmail();
  const ok3 = validatePassword();
  const ok4 = validateConfirm();

  if (ok1 && ok2 && ok3 && ok4) {
    alert("Form submitted successfully!");
  }
});
