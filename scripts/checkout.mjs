// generate html for cart items
//      button to remove item
//      click image takes you to filmpage
// display cart items
// update the container with the right amount of items
// create a clear cart button
// message when cart is empty ✅

import { amountSaved } from "./utils/amountSaved.mjs";
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


function generateCartHtml(filmItem) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item")
    
    const linkContainer = document.createElement("a")
    linkContainer.href = "filmpage.html" 
    
    const imageElement = document.createElement("img")
    imageElement.classList.add("cart-image")
    imageElement.src = filmItem.image.url
    imageElement.alt = filmItem.image.alt

    const infoContainer = document.createElement("div")
    infoContainer.classList.add("info-element")

    const titleElement = document.createElement("p")
    titleElement.classList.add("cart-item-title")
    titleElement.textContent = filmItem.title

    const priceElement = document.createElement("p")
    priceElement.classList.add("cart-item-price")
    if (filmItem.onSale) {
        priceElement.textContent = `${filmItem.discountedPrice} kr`
        
        const priceBeforeElement = document.createElement("p")
        priceBeforeElement.classList.add("cart-price-before")
        priceBeforeElement.textContent = `Before ${filmItem.price} kr`
        
        const amountSavedElement = document.createElement("p")
        const savedAmount = amountSaved(filmItem)
        amountSavedElement.classList.add("amount-saved")
        amountSavedElement.textContent = `You save ${savedAmount}`

        priceElement.append(priceBeforeElement, amountSavedElement)
    } else {
        priceElement.textContent = `${filmItem.price} kr`


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
