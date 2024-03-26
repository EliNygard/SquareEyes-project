import { addToCart, createCart } from "./utils/cart.mjs";
import { API_FILM_URL } from "./common/constantsAPI.mjs";
import { doFetch } from "./utils/doFetch.mjs";



// get the films ✅
// get the filter criteria
// filter based on genre
// display the films that have been filtered by clicking on genre in dropdown menu
// link to filmpage ✅
// css on film list at home ✅
// display all the films in the slider

const actionGenreButton = document.getElementById("js-genre-action");


function generateFilmHtml(film) {
    const filmWrapper = document.createElement('section')
    filmWrapper.classList.add('film-wrapper');

    const filmContainer = document.createElement('a');
    filmContainer.classList.add('film-item');
    filmContainer.href = "html/filmpage.html";
    filmContainer.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(film));
    });

    const imageElement = document.createElement('img');
    imageElement.classList.add("film-img")
    imageElement.src = film.image.url;
    imageElement.alt = film.image.alt;
    

    const buyFilmButton = document.createElement('button')
    buyFilmButton.classList.add('cta');
    buyFilmButton.textContent = `Buy now for ${film.price} kr`

    const buyFilmButtonOnSale = document.createElement("button")
    buyFilmButtonOnSale.classList.add("cta-on-sale", "cta")
    buyFilmButtonOnSale.textContent = `On Sale: Buy now for ${film.discountedPrice} kr`

    filmContainer.appendChild(imageElement);
    filmWrapper.append(filmContainer);

    if (film.onSale) {
        filmWrapper.appendChild(buyFilmButtonOnSale)
        buyFilmButtonOnSale.addEventListener('click', () => addToCart(film));
    } else {
        filmWrapper.appendChild(buyFilmButton)
        buyFilmButton.addEventListener('click', () => addToCart(film));
    }
    
    return filmWrapper;
}

function displayFilms(films) {
    const filmsDisplayContainer = document.getElementById("js-films-container")
    filmsDisplayContainer.textContent = '';
    films
        .forEach((film) => {
            const filmHtml = generateFilmHtml(film);
            filmsDisplayContainer.appendChild(filmHtml);
        });
}

// get scroller ✅
// generate filmItem html ✅
// append filmItem favorite only to scroller html ✅

function generateFilmSelectionHtml(film) {
    const imageContainer = document.createElement("div")
    imageContainer.classList.add("img-element")

    const filmLinkElement = document.createElement("a")
    filmLinkElement.href = "html/filmpage.html"
    filmLinkElement.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(film))
    })

    const imageElement = document.createElement("img")
    imageElement.classList.add("film-image")
    imageElement.src = film.image.url
    imageElement.alt = film.image.alt

    const contentContainer = document.createElement("div")
    contentContainer.classList.add("film-selection-content")

    const titleElement = document.createElement("p")
    titleElement.classList.add("film-scroller")
    titleElement.textContent = `${film.title}`

    contentContainer.appendChild(titleElement)
    filmLinkElement.append(imageElement, contentContainer)
    imageContainer.appendChild(filmLinkElement)
    
    return imageContainer
}

function displayFilmSelectionMyFilms(films) {
    const myFilmsScroller = document.getElementById("my-films-scroller")
    films.forEach((film) => {
        if (film.favorite === true) {
            const filmHtml = generateFilmSelectionHtml(film)
            myFilmsScroller.appendChild(filmHtml)
        } 
    })
}


async function renderHomePage() {
    const responseData = await doFetch(API_FILM_URL);
    const films = responseData.data;
    console.log(films);
    displayFilms(films)
    displayFilmSelectionMyFilms(films)
}

async function main() {
    createCart();
    await renderHomePage();
}

main();
