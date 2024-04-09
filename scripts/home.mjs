import { createCart } from "./utils/cart.mjs";
import { API_FILM_URL } from "./common/constantsAPI.mjs";
import { doFetch } from "./utils/doFetch.mjs";
import { displayFilmSelectionMyFilms } from "./displayMyFavoriteFilms.mjs";
import { displayFilms } from "./displayFilmsHome.mjs";
import { paginate, renderPagination } from "./pagination.mjs";


const navGenreButtons = document.getElementById("nav-genre-buttons")

let selectedGenre = "";

navGenreButtons.addEventListener('click', (event) => {
    if (event.target.id === "js-genre-action") {
        selectedGenre = "action"
        console.log(selectedGenre);
        
    } 
    else if (event.target.id === "js-genre-comedy") {
        console.log("comedy genre selected");
    }
    else if (event.target.id === "js-genre-drama") {
        console.log("drama genre selected");
    }
    else if (event.target.id === "js-genre-horror") {
        console.log("horror genre selected");
    }
    else if (event.target.id === "js-genre-kids") {
        console.log("kids genre selected");
    }
})


async function renderHomePage() {
    const responseData = await doFetch(API_FILM_URL);
    const films = responseData.data;
    let filmsPerPage = 6;

    if (window.matchMedia('(max-width: 799px)').matches) {
        filmsPerPage = 3;
    }
    // if (window.matchMedia('(min-width: 800px)').matches) {
    //     filmsPerPage = 4;
    // }

    const paginatedFilms = paginate(films, filmsPerPage);
    displayFilms(paginatedFilms[0]);
    renderPagination(paginatedFilms);
    displayFilmSelectionMyFilms(films);

    // displayFilms(films)
    // displayFilmSelectionMyFilms(films)
}

async function main() {
    createCart();
    await renderHomePage();
}

main();
