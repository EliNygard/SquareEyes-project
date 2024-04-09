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
    linkContainer.href = "filmpage.html" 
    
    const imageElement = document.createElement("img")
    imageElement.classList.add("cart-image")
    imageElement.src = film.image.url
    imageElement.alt = film.image.alt

    const infoContainer = document.createElement("div")
    infoContainer.classList.add("info-element")

    const titleElement = document.createElement("p")
    titleElement.classList.add("cart-item-title")
    titleElement.textContent = film.title

    const priceElement = document.createElement("p")
    priceElement.classList.add("cart-item-price")
    if (film.onSale) {
        priceElement.textContent = `${film.discountedPrice} kr`
        const priceBefore = document.createElement("p")
        priceBefore.classList.add("cart-price-before")
        priceBefore.textContent = `Before ${film.price} kr`

        priceElement.appendChild(priceBefore)
    }

    cartItem.append(linkContainer, infoContainer)
    linkContainer.appendChild(imageElement)
    infoContainer.append(titleElement, priceElement)

    return cartItem;
    }

function displayCartItems() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.textContent = '';
    const cart = JSON.parse(localStorage.getItem("cart"))

    cart.forEach(currentItem => {
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
