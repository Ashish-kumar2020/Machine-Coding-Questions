console.log("Live Font Controller");


const decremnetFont = document.querySelector("#decremnetFont");
const incrementFont = document.querySelector("#incrementFont");
const displayText = document.querySelector(".displayText");
const displayFontSize = document.querySelector("#displayFontSize");

let currFontSize = 12;
displayFontSize.textContent = `Current FontSize : ${currFontSize} px`
function decrementFontValue() {
    if (currFontSize > 12) {
        currFontSize--;
        displayText.style.fontSize = `${currFontSize}px`;
        displayFontSize.textContent = `Current FontSize : ${currFontSize} px`
    }
}

function incrementFontValue() {
    if (currFontSize < 48) {
        currFontSize++;
        displayText.style.fontSize = `${currFontSize}px`;
        displayFontSize.textContent = `Current FontSize : ${currFontSize} px`
    }
}

decremnetFont.addEventListener("click",decrementFontValue);
incrementFont.addEventListener("click",incrementFontValue);