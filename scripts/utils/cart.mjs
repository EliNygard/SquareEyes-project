// get cart ✅
// create cart function ✅
// add to cart function ✅
// remove from cart function
// clear cart function
// get total numbers of items in cart function

let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
    cart = [];
};

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


// 1. check if film is added to cart ✅
//      if added, increment quantity by 1 ✅
//      Else, add the film ✅

export function addToCart(film) {
    console.log("add to cart", film);
    const cart = JSON.parse(localStorage.getItem('cart'))
    const itemIndex = cart.findIndex(function (currentFilm) {
        if (film.id === currentFilm.id) {
            return true;
        }
        return false;
    });
    if (itemIndex === -1) {
        cart.push({ ...film, quantity: 1});
    } else {
      cart[itemIndex].quantity += 1;  
    } 
    localStorage.setItem('cart', JSON.stringify(cart))  
}

export function removeCartItem(event) {
    const removeButton = event.target;
    const cartItem = removeButton.closest('.cart-item').id
    removeButton.closest('.cart-item').remove()
    const itemToRemove = cart.findIndex(item => item.id === cartItem)
    if (itemToRemove !== -1) {
        cart.splice(itemToRemove, 1)
        localStorage.setItem("cart", JSON.stringify(cart))

    }
}

// function updateCartAndTotalPrice() {
//     localStorage.setItem("cart", JSON.stringify(cart))
//     totalAmountElement.textContent = updateCartTotal()
// }

export function getTotalNumberOfItemsInCart() {
    const cart = getCart()
    const getTotalNumberOfItemsInCart = cart.reduce((total, item) => {
        total += item.quantity
        return total
    }, 0)
    return getTotalNumberOfItemsInCart 
}

export function clearCart() {
    localStorage.setItem("cart", JSON.stringify([]))
    console.log("cart is cleared");
}