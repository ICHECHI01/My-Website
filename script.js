let total = 0;
const cartItems = document.getElementById("cartItems");

function addToCart(name, price){
let item = document.createElement("li");
item.textContent = name + " - $" + price;
cartItems.appendChild(item);
total += price;

document.getElementById("total").textContent = total;
}

//Dark mode toggle
function toggleDarkMode() {
document.body.classList.toggle("dark");
}

//Carousel functionality
let carouselTrack = document.querySelector(".carousel-track");
let currentIndex = 0;

function moveCarousel(direction){
const products = document.querySelectorAll(".product");
const width = products[0].offsetWidth + 20;
currentIndex += direction;
if(currentIndex < 0) currentIndex = 0;
if(currentIndex > products.length - 3) currentIndex = products.length - 3;
carouselTrack.style.transform = `translateX(-${currentIndex * width}px)`;
}

