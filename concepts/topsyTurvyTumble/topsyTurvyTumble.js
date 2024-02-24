const mainTopsy = document.querySelector(".topsyTurvy");
const images = document.querySelectorAll(".imgToMove");

document.addEventListener("DOMContentLoaded", () => {
  // renderImages();
  animatedImages();
});

function animatedImages() {
  images.forEach(image=>{
    image.addEventListener('mouseover', () => {
      console.log("mouseover");
      image.classList.add('animate__animated');
      image.classList.add('animate__rotateOut');
    });
  
    image.addEventListener('animationend', () => {
      console.log("animationend");

      image.classList.remove('animate__animated');
      image.classList.remove('animate__rotateOut');
    });
  })
}

/**render images of the database */
function renderImages() {
  
}
