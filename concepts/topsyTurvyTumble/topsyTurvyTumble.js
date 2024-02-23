const mainTopsy = document.querySelector(".topsyTurvy");

document.addEventListener("DOMContentLoaded", () => {
  renderImages();
});

mainTopsy.addEventListener("mousemove", (e) => {
  const images = mainTopsy.querySelectorAll(".imgToMove");
  images.forEach((image) => {
    const xPosition = e.clientX;
    const yPosition = e.clientY;
    image.style.left = `${xPosition - image.width/2}px`;
    image.style.top = `${yPosition - image.height/2}px`;
  });

});

/**render images of the database */
function renderImages() {
  const img = document.createElement("img");
  img.classList.add("imgToMove");
  img.src =
    "https://gestion.pe/resizer/L3PoDXjbIFAMrbrDS7kzmhdUfRg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3QSLIQHSYFBHNEC5JP6YZEBMGU.jpg";
  img.style.position = "absolute";
  img.style.transition = "transform 0.2s ease-in-out";
  mainTopsy.appendChild(img);
}
