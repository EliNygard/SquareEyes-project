// generate html for cart items
//      button to remove item
//      click image takes you to filmpage
// display cart items
// calculate the number of items in the cart
// update the container with the right amount of items
// create a clear cart button
// message when cart is empty ✅



export function emptyCartMessage () {
    const emptyCartElement = document.createElement("p")
    emptyCartElement.textContent = "You have no films in your cart. Go to our great film selection and find your next film to watch."
    const cartDisplay = document.getElementById("cart")
    cartDisplay.appendChild(emptyCartElement)
}



async function main() {
    emptyCartMessage()
}

main()
