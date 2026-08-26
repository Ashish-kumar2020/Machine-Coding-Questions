console.log("Like Button Machine Coding Question");

const likeButton = document.getElementById("like-button");
const heartShapeIcon = document.getElementById("heart-shape-icon");
const loaderShapeIcon = document.getElementById("loader-shape-icon");
const liked = document.getElementById("liked");

let isLoading = false;
let isLiked = false;

function showLoader() {
  if (isLoading) return;
  isLoading = true;

  loaderShapeIcon.style.display = "block";
  heartShapeIcon.style.display = "none";
  setTimeout(() => {
    isLiked = !isLiked;

    if (isLiked) {
      liked.textContent = "liked";
      heartShapeIcon.style.fill = "red";
      likeButton.style.border = "2px solid red";
    } else {
      liked.textContent = "";
      heartShapeIcon.style.fill = "black";
      likeButton.style.border = "";
    }

    loaderShapeIcon.style.display = "none";
    heartShapeIcon.style.display = "block";
    isLoading = false;
  }, 1000);
}

likeButton.addEventListener("click", (e) => {
  console.log("Button Clicked");
  showLoader();
});
