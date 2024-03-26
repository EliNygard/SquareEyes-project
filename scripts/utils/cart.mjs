// get cart ✅
// create cart function ✅
// add to cart function
// remove from cart function
// clear cart function
// get total numbers of items in cart function

export function getCart() {
    const cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart);
    return cart
}

export function createCart() {
    const cart = getCart()
    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([]))
    }
}


// 1. check if film is added to cart
//      if added, increment quantity by 1
//      Else, add the film
// 2. 
export function addToCart(film) {
    console.log("add to cart", film);
    const cart = JSON.parse(localStorage.getItem('cart'))
    cart.push(film)
    console.log(cart);
    localStorage.setItem('cart', JSON.stringify(cart))  
}