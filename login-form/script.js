console.log("Login Form Machine Coding Question");

const loginForm = document.querySelector("#login-form");
const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
const errorMessageEmail = document.querySelector("#error-message-email");
const errorMessagePassword = document.querySelector("#error-message-password");
const successMessage = document.querySelector("#success-message");

loginForm.addEventListener("submit", handleLoginForm);
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const loginData = {};

function handleLoginForm(e) {
  e.preventDefault();
  errorMessageEmail.textContent = "";
  errorMessagePassword.textContent = "";
  successMessage.textContent = "";
  const email = userEmail.value.trim();
  const password = userPassword.value;
  // Email Validation
  if (email === "") {
    errorMessageEmail.textContent = "Email is Required";
    return;
  }
  if (!emailRegex.test(email)) {
    errorMessageEmail.textContent = "Enter a valid Email";
    return;
  }

  // Password Validation
  if (password === "") {
    errorMessagePassword.textContent = "Password is Required";
    return;
  }
  if (Number(password.length) < 6) {
    errorMessagePassword.textContent = "Password must be at least 6 characters";
    return;
  }
  if(email === "test@example.com" && password === "password123"){
      successMessage.textContent = "Login Successful";
      loginData.email = email;
      loginData.password = password;
      console.log(loginData);
      userEmail.value = "";
      userPassword.value = "";
      return;
  }else{
     successMessage.textContent = "Invalid Credentials";
  }
}
