console.log("Tabs Machine Coding Question");

const tabStyleContainer = document.querySelector(".tab-title-container");

tabStyleContainer.addEventListener("click", (e) => {
  const clickedButton = e.target.closest("button");
  if(!clickedButton) return;

  // remove active class from current button and content
  document.querySelector(".tab-btn.active").classList.remove("active");
  document.querySelector(".tab-content.active").classList.remove("active");

  // add active class to clicked button
  clickedButton.classList.add("active");

  //Find and activate the matching content panel using the data attribute
  const targetPanelId = clickedButton.dataset.tab;
  document.getElementById(targetPanelId).classList.add("active")
});
