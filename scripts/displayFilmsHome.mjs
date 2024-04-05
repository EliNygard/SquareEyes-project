// get the films ✅
// link to filmpage ✅
// css on film list at home ✅

import { addToCart } from "./utils/cart.mjs";

let selectedGenre = "";

export function displayFilms(films) {
    const filmsDisplayContainer = document.getElementById("js-films-container")
    filmsDisplayContainer.textContent = '';
    films
        .filter ((film) => {
            if (film.genre === selectedGenre || selectedGenre === "") {
                return true;
            }    
    })
        .forEach((film) => {
            const filmHtml = generateFilmHtml(film);
            filmsDisplayContainer.appendChild(filmHtml);
        });      
}

// pagination

export function paginate(films, filmsPerPage) {
    const totalPages = Math.ceil(films.length / filmsPerPage);
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
        const start = i * filmsPerPage;
        const end = start + filmsPerPage;
        pages.push(films.slice(start, end));
    }

    return pages;
}

export function renderPagination(paginatedFilms) {
    const pagination = document.querySelector('.pagination');
    const filmContainer = document.querySelector('#js-films-container');
    pagination.innerHTML = '';

    paginatedFilms.forEach((page, index) => {
        const button = document.createElement('button');
        button.textContent = index + 1;
        button.classList.add('pagination-button')
        button.title = "Previous page";
        button.setAttribute("aria-label", "Previous Page");
        button.addEventListener('click', () => {
            filmContainer.innerHTML = '';
            displayFilms(page);
        });
        pagination.append(button);
    });
}

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