export function amountSaved(filmItem) {
    const amount = filmItem.price - filmItem.discountedPrice;
    const savedAmount = amount.toFixed(2)
    return savedAmount;
}