// get film from local storage ✅
// generate html ✅
// lag flere div, må matche siden. tittel har egen div osv ✅
// activate buy film button
// change price in button if on sale ✅
// create if else statement to determine which button to display ✅

import { amountSaved } from "./utils/amountSaved.mjs";
import { addToCart } from "./utils/cart.mjs";


const filmItem = JSON.parse(localStorage.getItem("film"));
console.log(filmItem);

function generateFilmPageItemHtml(filmItem) {
    
    const filmPageContainer = document.querySelector("#js-filmpage-content")

    const imageElement = document.createElement("img");
    imageElement.classList.add("filmpage-img");
    imageElement.src = filmItem.image.url;
    imageElement.alt = filmItem.image.alt;

    const filmGrid = document.createElement("div");
    filmGrid.classList.add("film-grid");

    const gridTitle = document.createElement("div")
    gridTitle.classList.add("grid-title");
    const titleElement = document.createElement("h1")
    titleElement.classList.add("title")
    titleElement.textContent = `${filmItem.title}`

    const gridDetails = document.createElement("div")
    gridDetails.classList.add("grid-details")
    const detailsElement = document.createElement("div")
    detailsElement.classList.add("details")
    const detailsReleased = document.createElement("div")
    detailsReleased.textContent = `${filmItem.released}`
    const detailsRating = document.createElement("div")
    detailsRating.textContent = `Rating: ${filmItem.rating}`
    const detailsGenre = document.createElement("div")
    detailsGenre.textContent = `${filmItem.genre}`

    const gridIcons = document.createElement("div")
    gridIcons.classList.add("grid-icons")
    const filmpageIcons = document.createElement("div")
    filmpageIcons.classList.add("filmpage-icons")
    const trailerIcon = document.createElement("i")
    trailerIcon.classList.add("fa-solid", "fa-film")
    trailerIcon.setAttribute("aria-label", "Trailer")
    const shareIcon = document.createElement("i")
    shareIcon.classList.add("fa-solid", "fa-share-nodes")
    shareIcon.setAttribute("aria-label", "Share")
    const addToMyFilmsIcon = document.createElement("i")
    addToMyFilmsIcon.classList.add("fa-solid", "fa-bookmark")
    addToMyFilmsIcon.setAttribute("aria-label", "Add to my films")

    const gridSynopsis = document.createElement("div")
    gridSynopsis.classList.add("grid-synopsis")
    const synopsisElement = document.createElement("div")
    synopsisElement.classList.add("synopsis")
    const synopsisParagraph = document.createElement("p")
    synopsisParagraph.textContent = `${filmItem.description}`

    const gridButton = document.createElement("div")
    gridButton.classList.add("grid-cta")
    const filmpageButton = document.createElement("div")
    filmpageButton.classList.add("filmpage-button")

    const buyFilmButton = document.createElement("button")
    buyFilmButton.classList.add("cta")
    buyFilmButton.textContent = `Buy now for ${filmItem.price} kr`

    const buyFilmButtonOnSale = document.createElement("button")
    buyFilmButtonOnSale.classList.add("cta-on-sale", "cta")
    buyFilmButtonOnSale.textContent = `Buy now for ${filmItem.discountedPrice} kr`

    const priceBeforeElement = document.createElement("p")
    priceBeforeElement.classList.add("price-on-sale")
    const savedAmount = amountSaved(filmItem)
    priceBeforeElement.textContent = `Before ${filmItem.price} kr. Save ${savedAmount} kr`


    filmPageContainer.append(imageElement, filmGrid);
    filmGrid.append(gridTitle, gridDetails, gridIcons, gridSynopsis, gridButton);
    gridTitle.appendChild(titleElement);
    gridDetails.appendChild(detailsElement)
    detailsElement.append(detailsReleased, detailsGenre, detailsRating)
    gridIcons.appendChild(filmpageIcons)
    filmpageIcons.append(trailerIcon, shareIcon, addToMyFilmsIcon)
    gridSynopsis.appendChild(synopsisElement)
    synopsisElement.appendChild(synopsisParagraph)
    gridButton.appendChild(filmpageButton)

    if (filmItem.onSale) {
        filmpageButton.append(buyFilmButtonOnSale, priceBeforeElement)
        buyFilmButtonOnSale.addEventListener('click', addToCart)
    } else {
        filmpageButton.appendChild(buyFilmButton)
        buyFilmButton.addEventListener('click', addToCart)
    }

}


function main() {
    generateFilmPageItemHtml(filmItem)
}

main()