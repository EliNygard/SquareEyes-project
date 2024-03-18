import { API_FILM_URL } from "./common/constants.mjs";
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
    

    const filmBuyButton = document.createElement('button')
    filmBuyButton.classList.add('cta');
    filmBuyButton.textContent = 'Buy Film'
    filmBuyButton.addEventListener('click', () => {
        console.log('id', film.id);
    });
    
    filmContainer.appendChild(imageElement);
    filmWrapper.append(filmContainer, filmBuyButton);

    return filmWrapper;
}

function displayFilms(films){
    const filmsDisplayContainer = document.getElementById("js-films-container")
    filmsDisplayContainer.textContent = '';
    films
        .forEach((film) => {
            const filmHtml = generateFilmHtml(film);
            filmsDisplayContainer.appendChild(filmHtml);
        });
}

async function renderHomePage() {
    const responseData = await doFetch(API_FILM_URL);
    const films = responseData.data;
    console.log(films);
    displayFilms(films)
}

async function main() {
    await renderHomePage();
}

main();
