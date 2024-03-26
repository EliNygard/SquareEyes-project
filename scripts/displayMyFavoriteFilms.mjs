// get scroller ✅
// generate filmItem html ✅
// append filmItem favorite only to scroller html ✅

export function displayFilmSelectionMyFilms(films) {
    const myFilmsScroller = document.getElementById("my-films-scroller")
    films.forEach((film) => {
        if (film.favorite === true) {
            const filmHtml = generateFilmSelectionHtml(film)
            myFilmsScroller.appendChild(filmHtml)
        } 
    })
}

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