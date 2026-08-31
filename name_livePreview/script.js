console.log("Live Text Preview Machine Coding Question");

const enterText = document.querySelector("#enterText");
const visibleText = document.querySelector("#visibleText");


function updatePreview(){
    const value = enterText.value.trim();

    visibleText.textContent = value === "" ? "Your Name will appear here" : value;
}

updatePreview();

enterText.addEventListener("input",updatePreview);