//selectors
const mainTopsy = document.querySelector(".topsyTurvy");
const video = document.querySelector(".video");

//events
document.addEventListener("DOMContentLoaded", () => {
  video.play();
  getImages();
});

//functions

/**function to animate the images */
function animatedImages() {
  const images = document.querySelectorAll(".imgToMove");
  images.forEach((image) => {
    image.addEventListener("mouseover", () => {
      image.classList.add("animate__animated");
      image.classList.add("animate__rotateOut");
    });

    image.addEventListener("animationend", () => {
      image.classList.remove("animate__animated");
      image.classList.remove("animate__rotateOut");
    });
  });
}

/**get images of the database */
async function getImages() {
  const url = `../spinning/dbImages.json`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.images);
  const images = fillImages(data.images);
  const randomImages = reOrderImages(images);
  renderImages(randomImages);
}

/**This function reorder images.
 * if negative: image before next image,
 * if positive: image after next image,
 * if zero: image after next image,
 */
function reOrderImages(data) {
  return data.sort(() => Math.random() - 0.5);

}

/**render images*/
function renderImages(images) {
  images.forEach((image) => {
    const img = document.createElement("img");
    img.src = image.url;
    img.classList.add("imgToMove");
    mainTopsy.appendChild(img);
  });
  animatedImages();
}

/**fill an array with at least 28 elements */
function fillImages(data) {
  let images = [];
  while (images.length < 28) {
    data.forEach((image) => images.push(image));

  }
  //delete images beyond 28
  images = images.slice(0,28);
  return images;
}
