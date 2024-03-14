// display all the films in the slider

import { API_FILM_URL } from "./common/constants.mjs";
import { doFetch } from "./utils/doFetch.mjs";

// get the films ✅
// get the filter criteria
// filter based on genre
// display the films that have been filtered

function displayFilms(films){
    
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
