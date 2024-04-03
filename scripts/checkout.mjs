// generate html for cart items
//      button to remove item
//      click image takes you to filmpage
// display cart items
// calculate the number of items in the cart
// update the container with the right amount of items
// create a clear cart button
// message when cart is empty ✅

import { getCart } from "./utils/cart.mjs"

function generateEmptyCartMessage() {
    const cartContainer = document.getElementById("cart-container")
    
    const emptyCartElement = document.createElement("p")
    emptyCartElement.classList.add("empty-cart-message")
    emptyCartElement.textContent = "You have no films in your cart. Go to our great film selection and find your next film to watch."
    
    const goToHomePageButton = document.createElement("a")
    goToHomePageButton.classList.add("cta")
    goToHomePageButton.href = "../index.html"
    goToHomePageButton.textContent = "Find a new film"

    const cart = getCart

    if (!cart || cart.length === 0) {
        cartContainer.append(emptyCartElement, goToHomePageButton)
    }
    
}

function generateCartHtml(film) {


}



function main() {
    generateEmptyCartMessage()
}

main()
