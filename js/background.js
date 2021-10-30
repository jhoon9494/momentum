const image = ["0.jpeg", "1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg", "6.jpeg"]
const randomImg = image[Math.floor(Math.random() * image.length)];

const img = document.createElement("img");
img.src = `img/${randomImg}`;

document.body.appendChild(img);