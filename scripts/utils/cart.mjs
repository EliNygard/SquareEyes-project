// get cart ✅
// create cart function ✅
// add to cart function
// remove from cart function
// clear cart function
// get total numbers of items in cart function

import { emptyCartMessage } from "../checkout.mjs";


export function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart);
    return cart
}

export function createCart() {
    const cart = getCart()
    if (!cart || cart.length === 0) {
        emptyCartMessage
    }
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]))
    }
}