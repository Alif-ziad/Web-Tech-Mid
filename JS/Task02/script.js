// Array of image URLs
const images = [
  "https://via.placeholder.com/600x350?text=Paris",
  "https://via.placeholder.com/600x350?text=Maldives",
  "https://via.placeholder.com/600x350?text=New+York",
  "https://via.placeholder.com/600x350?text=Tokyo",
  "https://via.placeholder.com/600x350?text=Dubai"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update image
function updateImage() {
  sliderImage.src = images[currentIndex];
}

// Previous button
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage();
});

// Next button
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
});

// Automatic slideshow
setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateImage();
}, 3000);

// Initialize first image
updateImage();