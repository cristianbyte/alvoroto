const mainTopsy = document.querySelector(".topsyTurvy");

document.addEventListener("DOMContentLoaded", () => {
  renderImages();
})

mainTopsy.addEventListener("mousemove", (e) => {
  const images = mainTopsy.querySelector(".imgToMove");
  console.log(images)
  if (e.target.src) {
    images.style.bottom = "0"
    console.log(e.clientX);
    console.log(e.clientY);
  } else {
    console.log("aqui no hay imagen");
  }
})

function renderImages() {
  const img = document.createElement("img");
  img.classList.add("imgToMove");
  img.src = "https://gestion.pe/resizer/L3PoDXjbIFAMrbrDS7kzmhdUfRg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3QSLIQHSYFBHNEC5JP6YZEBMGU.jpg";
  img.style.position = "absolute"
  mainTopsy.appendChild(img);
}