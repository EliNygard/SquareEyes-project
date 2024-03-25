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
        filmWrapper.append(buyFilmButtonOnSale)
        buyFilmButtonOnSale.addEventListener('click', addToCart);
    } else {
        filmWrapper.appendChild(buyFilmButton)
        buyFilmButton.addEventListener('click', addToCart)
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


/* <div class="film-selection-container">
                <h3 class="film-selection__heading">My films</h3>
                <div class="image-scroller">
                    <div class="img-element">
                        
                    </div>
                    <div class="img-element">
                        
                    </div>
                    <div class="img-element">
                        
                    </div>
                    <div class="img-element">
                        
                    </div>
                </div>
            </div> */

// generate scroller html
// generate filmItem html
// append filmItem to scroller html

function generateFilmSelectionHtml(film) {
    const filmSelectionContainer = document.createElement("div")
    filmSelectionContainer.classList.add("film-selection-container")

    const heading = document.createElement("h3")
    heading.classList.add("film-selection__heading")
    heading.textContent = "My Films"

    const imageScroller = document.createElement("div")
    imageScroller.classList.add("image-scroller")

    const filmContainer = document.createElement("a")
    filmContainer.classList.add("-")
    filmContainer.href = "html/filmpage.html"
    filmContainer.addEventListener('click', () => {
        localStorage.setItem('film', JSON.stringify(film))
    })

    const imageElement = document.createElement("img")
    imageElement.classList.add("img-element")
    imageElement.src = film.image.url
    imageElement.alt = film.image.alt
}

function displayFilmSelectionMyFilms(films) {
    //
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
