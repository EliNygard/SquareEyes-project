import { displayFilms } from "./displayFilmsHome.mjs";

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

// add next page og previous page buttons
// style

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
            const scrollToSection = document.querySelector('#js-films-container');
            const offset = scrollToSection.offsetTop;
            window.scrollTo({top: offset, behavior: 'smooth'});
        });
        pagination.append(button);
    });
}