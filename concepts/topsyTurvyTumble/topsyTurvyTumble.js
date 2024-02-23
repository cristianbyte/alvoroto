const mainTopsy = document.querySelector(".topsyTurvy");

document.addEventListener("DOMContentLoaded", () => {
  renderImages();
})

mainTopsy.addEventListener("mousemove", (e) => {
  console.log(e.target.src)
  if (e.target.src) {
    console.log("esto es una imagen");
  } else {
    console.log("aqui no hay imagen");
  }
})

function renderImages() {
  const img = document.createElement("img");
  img.src = "https://gestion.pe/resizer/L3PoDXjbIFAMrbrDS7kzmhdUfRg=/580x330/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/3QSLIQHSYFBHNEC5JP6YZEBMGU.jpg";
  mainTopsy.appendChild(img);
}