console.log("Password Show Hide - Machine Coding Question");
const userNameContainer = document.querySelector(".userName-container");
const userPasswordContainer = document.querySelector(".userPassword-container");

function createElements() {
  userNameContainer.innerHTML = `
        <label for="userName">UserName: </label>
        <input id="userName" type="text" placeholder="Enter UserName..."/>
    `;

  userPasswordContainer.innerHTML = `
        <label for="userPassword">Password: </label>
        <input id="userPassword" type="password" placeholder="Enter UserPassword..."/>
        <div class="password-wrapper" style="display: inline-flex; align-items: center;">
        <button
            id="toggleButton"
            type="button"
            aria-label="Show Password"
        >
            <img src="./assets/eye-slash-svgrepo-com.svg"  alt="eye-close" style="cursor: pointer; margin-left: 8px; width: 24px; height: 24px; filter: invert(1);" >
        </button> 
        
        </div>
    `;
  togglePassword();
}

createElements();

function togglePassword() {
  let passwordInput = document.getElementById("userPassword");
  const passwordWrapper = document.querySelector(".password-wrapper");
  let toggleButton = document.querySelector("#toggleButton");
  const img = toggleButton.querySelector("img");
  let isPasswordVisible = false;
  passwordWrapper.addEventListener("click", (e) => {
    isPasswordVisible = !isPasswordVisible;
    toggleButton.setAttribute(
      "aria-label",
      isPasswordVisible ? "Hide Password" : "Show Password",
    );
    passwordInput.type = isPasswordVisible ? "text" : "password";
    img.src = isPasswordVisible
      ? "./assets/eye-svgrepo-com.svg"
      : "./assets/eye-slash-svgrepo-com.svg";
  });
}
