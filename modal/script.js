console.log("Modal Machine Coding Question");

const toogleButton = document.querySelector("#toggle-modal-btn");
const modalContentContainer = document.querySelector(".content-container");
const childContainer = document.querySelector(".child-container")
const closeModalBtn = document.querySelector("#close-modal");
const overlayContainer = document.querySelector("#overlay-container");


function toggleModal() {
 childContainer.classList.toggle("child-container");
  modalContentContainer.classList.toggle("openModal");
  overlayContainer.classList.toggle("overlay");
  document.body.classList.toggle("modal-open");
}

toogleButton.addEventListener("click", toggleModal);
overlayContainer.addEventListener("click",(e) => {
    if(e.target === overlayContainer){
        toggleModal()
    }
});

closeModalBtn.addEventListener("click", toggleModal)


window.addEventListener("keydown",(e) =>{
    if(e.key === "Escape" && overlayContainer.classList.contains("overlay")){
        toggleModal()
    }
})