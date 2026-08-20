console.log("Password Show Hide - Machine Coding Question");
const userNameContainer = document.querySelector(".userName-container");
const userPasswordContainer = document.querySelector(".userPassword-container");

/*
 <label for="userName">UserName: </label>
        <input id="userName" type="text" placeholder="Enter UserName..."/>

        <label for="userPassword">Password: </label>
        <input id="userPassword" type="password" placeholder="Enter UserPassword..."/>

*/

function createElements() {
  userNameContainer.innerHTML = `
        <label for="userName">UserName: </label>
        <input id="userName" type="text" placeholder="Enter UserName..."/>
    `;

  userPasswordContainer.innerHTML = `
        <label for="userPassword">Password: </label>
        <div class="password-wrapper" style="display: inline-flex; align-items: center;">
            <input id="userPassword" type="password" placeholder="Enter UserPassword..."/>
            <img id="togglePasswordClose" src="./assets/eye-slash-svgrepo-com.svg" alt="eye-close" style="cursor: pointer; margin-left: 8px; width: 24px; height: 24px; filter: invert(1);">
            <img id="togglePasswordOpen" src="./assets/eye-svgrepo-com.svg" alt="eye-close" style="cursor: pointer; margin-left: 8px; width: 24px; height: 24px; filter: invert(1); display:none" >
        </div>
    `;
  togglePassword();
}

createElements();

function togglePassword() {
  let isEnable = false;
  const passwordInput = document.getElementById("userPassword");
  const togglePasswordSelectClose = document.getElementById(
    "togglePasswordClose",
  );
  const togglePasswordSelectOpen =
    document.getElementById("togglePasswordOpen");

  togglePasswordSelectClose.addEventListener("click", () => {
    passwordInput.type = "text";
    togglePasswordSelectClose.style.display = "none";
    togglePasswordSelectOpen.style.display = "block";
  });
  togglePasswordSelectOpen.addEventListener("click", () => {
    passwordInput.type = "password";
    togglePasswordSelectClose.style.display = "block";
    togglePasswordSelectOpen.style.display = "none";
  });
}
