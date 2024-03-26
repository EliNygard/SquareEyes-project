import { addToCart, createCart } from "./utils/cart.mjs";
import { API_FILM_URL } from "./common/constantsAPI.mjs";
import { doFetch } from "./utils/doFetch.mjs";
import { displayFilmSelectionMyFilms } from "./selectionMyFavoriteFilms.mjs";
import { displayFilms } from "./displayFilmsHome.mjs";


const actionGenreButton = document.getElementById("js-genre-action")
actionGenreButton.addEventListener('click', () => {
    console.log("action genre selected");
})


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
