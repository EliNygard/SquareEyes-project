// generate html for cart items
//      button to remove item
//      click image takes you to filmpage
// display cart items
// calculate the number of items in the cart
// update the container with the right amount of items
// create a clear cart button
// message when cart is empty

import { getCart } from "./utils/cart.mjs";

function createCart() {
    const cart = getCart
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]))
    }
}


async function main() {
    createCart()
}

main()
