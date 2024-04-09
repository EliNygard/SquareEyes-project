// generate html for cart items
//      button to remove item
//      click image takes you to filmpage
// display cart items
// update the container with the right amount of items
// create a clear cart button
// message when cart is empty ✅

import { getCart, addToCart } from "./utils/cart.mjs"

function generateEmptyCartMessage() {
    const cartContainer = document.getElementById("cart-container")
    
    const emptyCartElement = document.createElement("p")
    emptyCartElement.classList.add("empty-cart-message")
    emptyCartElement.textContent = "You have no films in your cart. Go to our great film selection and find your next film to watch."
    
    const goToHomePageButton = document.createElement("a")
    goToHomePageButton.classList.add("cta")
    goToHomePageButton.href = "../index.html"
    goToHomePageButton.textContent = "Find a new film"

    const cart = getCart()

    if (!cart || cart.length === 0) {
        cartContainer.append(emptyCartElement, goToHomePageButton)
    }
    
}


function generateCartHtml(film) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item")

    const linkContainer = document.createElement("a")
    
    
    }

function displayCartItems() {
    const cartContainer = document.getElementById("#cart-container");
    cartContainer.textContent = ''
    const cart = JSON.parse(localStorage.getItem('cart'))

    cart.forEach(function (currentItem) {
        const itemHtml = generateCartHtml(currentItem)
        cartContainer.appendChild(itemHtml)
    })
}

function renderCheckoutPage() {
    displayCartItems()
}


function main() {
    generateEmptyCartMessage()
    renderCheckoutPage()
}

main()
