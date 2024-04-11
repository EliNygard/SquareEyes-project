// generate html for cart items ✅
//      button to remove item
//      click image takes you to filmpage ✅
// display cart items ✅
// update the container with the right amount of items
// create a clear cart button
// message when cart is empty ✅

import { amountSaved } from "./utils/amountSaved.mjs";
import { getCart, addToCart, getTotalNumberOfItemsInCart, removeCartItem } from "./utils/cart.mjs"

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


function generateCartItemHtml(filmItem) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item")
    
    const linkContainer = document.createElement("a")
    linkContainer.href = "filmpage.html" 
    linkContainer.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(filmItem));
    });
    
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


    const quantityContainer = document.createElement("div")
    quantityContainer.classList.add("quantity-element")

    const quantityElement = document.createElement("p")
    quantityElement.classList.add("cart-item-quantity")
    quantityElement.textContent = `Quantity: ${filmItem.quantity}`

    const increaseQuantityBtn = document.createElement("button")
    increaseQuantityBtn.classList.add("change-quantity-btn")
    increaseQuantityBtn.textContent = "+"

    const decreaseQuantityBtn = document.createElement("button")
    decreaseQuantityBtn.classList.add("change-quantity-btn")
    decreaseQuantityBtn.textContent = "-"


    const removeItemBtn = document.createElement("button")
    removeItemBtn.classList.add("cta")
    removeItemBtn.textContent = "Remove"
    removeItemBtn.addEventListener('click', removeCartItem)


    cartItem.append(linkContainer, infoContainer, quantityContainer, removeItemBtn)
    linkContainer.appendChild(imageElement)
    infoContainer.append(titleElement, priceElement)
    quantityContainer.append(quantityElement, increaseQuantityBtn, decreaseQuantityBtn)

    return cartItem;
    }

function displayCartItems() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.textContent = '';
    const cart = JSON.parse(localStorage.getItem("cart"))

    cart.forEach(currentItem => {
        const itemHtml = generateCartItemHtml(currentItem)
        cartContainer.appendChild(itemHtml)
    })
}

function generateCartTotalsHtml() {
    const cartTotalsContainer = document.createElement("div")
    cartTotalsContainer.classList.add("cart-totals")

    const totalAmountElement = document.createElement("p")
    totalAmountElement.classList.add("total-amount")
    totalAmountElement.textContent = "Total"
    // add total amount

    const totalAmountSavedElement = document.createElement("p")
    totalAmountSavedElement.classList.add("total-amount-saved")
    totalAmountSavedElement.textContent = "Total saved"
    // add total saved

    const totalItemsElement = document.createElement("p")
    totalItemsElement.classList.add("total-items")
    const totalItems = getTotalNumberOfItemsInCart()
    totalItemsElement.textContent = `Total items: ${totalItems}`

    cartTotalsContainer.append(totalAmountElement, totalAmountSavedElement, totalItemsElement)

    return cartTotalsContainer

    
}

// clear cart function

function displayCartDetails() {
    const cartDetailsContainer = document.getElementById("cart-details-container")
    const detailsHtml = generateCartTotalsHtml()
    cartDetailsContainer.appendChild(detailsHtml)
}

function renderCheckoutPage() {
    displayCartItems()
    displayCartDetails()
}


function main() {
    generateEmptyCartMessage()
    renderCheckoutPage()
}

main()
