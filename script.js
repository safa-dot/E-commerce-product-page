//side navigation bar------------
function openNav() {
    document.querySelector('.navContent .menu .list').style.display = "block";
    document.querySelector('.navContent .menu ').style.width = "250px";
}

function closeNav() {
    document.querySelector(".navContent .menu .list ").style.display = "none";
    document.querySelector('.navContent .menu ').style.width = "0px";
}
// show cart on click--------------------------------------

function showCart() {
    let cart = document.querySelector(".cartContent");
    if (cart.style.display === "block") {
        cart.style.display = "none";
    } else {
        cart.style.display = "block";
    }
}





// active class on clicking an image------------------------------

// Get the container element
var thumbnailsContainer = document.querySelector(".thumbnails");

// Get all buttons with class="thumbnail" inside the container
var thumbnails = thumbnailsContainer.querySelectorAll(".thumbnail");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < thumbnails.length; i++) {
    thumbnails[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}


// display the clicking image--------------------------------
function myFunction(imgs) {
    // Get the expanded image
    var display = document.querySelector('.mainImg .display');
    // Use the same src in the expanded image as the image being clicked on from the grid
    display.src = imgs.src;
}






// slid show images mobile ---------------------------------------

// the variables of the image slider
const image = document.querySelector(".display");
const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");

// the image array
const images = [
    "./images/image-product-1.jpg",
    "./images/image-product-2.jpg",
    "./images/image-product-3.jpg",
    "./images/image-product-4.jpg"
];

// the index of the image on page load
let currentImage = 0;

// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", showImage);

// function to select and change the image details
function showImage() {
    image.src = images[currentImage];
}
// the next button function
nextBtn.addEventListener("click", function () {
    currentImage++;
    if (currentImage > images.length - 1) {
        currentImage = 0;
    }
    showImage(currentImage);
});

// the prev button function
prevBtn.addEventListener("click", function () {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage(currentImage);
});

// add or remove items field-----------------------------------------------------
// Select increment and decrement buttons
let incrementCount = document.getElementById("plus");
let decrementCount = document.getElementById("minus");

// Select total count
let totalCount = document.getElementById("itemNum");

// Variable to track count
let count = 0;

// Display initial count value
totalCount.innerHTML = count;

// Function to increment count
let handleIncrement = () => {
    count++;
    totalCount.innerHTML = count;
};

// Function to decrement count
let handleDecrement = () => {
    count--;
    totalCount.innerHTML = count;
};

// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);


// add selected items to the cart--------------------------------------------------------------------------

// select badge and add to cart button
let badge = document.getElementById('badge1');
let addBtn = document.getElementById('cartBtn');

// initialise cart content to 0
badge.innerHTML = 0;

let cardBody = document.querySelector('.card-body');
//  function to add items to the cart
let addToCart = () => {

    document.querySelector('.card-body .empty-cart').style.display = 'none';


    badge.innerHTML = totalCount.innerHTML;

    // add items number and total price to the card body


    let itemNumber = badge.innerHTML;
    let total = 125.00 * itemNumber;
    let chekout = document.querySelector('.checkout');

    if (itemNumber > 0) {
        let cardBody = document.querySelector('.card-body');
        let purchase = document.createElement('p');
        let cartImage = document.createElement('img');
        let desc = document.createElement('div');
        desc.classList.add("desc");

        purchase.innerHTML = `Fall Limited Edition Sneakers <br> $125.00 &#215 ${itemNumber} <b>${total}.00</b> `;
        purchase.classList.add("paragraphe");

        // add item image
        cartImage.setAttribute('src', `./images/image-product-1.jpg`);
        cartImage.classList.add("cartImage");

        // remove purchase
        let trash_can = document.createElement("img");
        trash_can.setAttribute("src", "./images/icon-delete.svg");
        trash_can.classList.add("trashCan");
        trash_can.addEventListener('click', deleteParent);



        desc.appendChild(cartImage);
        desc.appendChild(purchase);
        desc.appendChild(trash_can);
        cardBody.appendChild(desc);



        function deleteParent(event) {
            event.target.parentNode.remove();

        }
        // checkout button
        chekout.style.display = 'block';


    }


};

// Add click event to add to cart button
addBtn.addEventListener("click", addToCart);





