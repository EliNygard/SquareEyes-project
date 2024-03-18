// get cart
// create cart function
// add to cart function
// remove from cart function
// clear cart function
// get total numbers of items in cart function


export function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart);
    return cart
}

