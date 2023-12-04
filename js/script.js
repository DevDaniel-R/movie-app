const global = {
    currentPage: window.location.pathname,
};

async function displayPopularMovies(){
    const { results } = await fetchAPIData('movie/popular');
    console.log(results);
}

// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
    const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGQ4NGM2OWUxM2E4NWJiNzkzMDQ1ZDE2ZjdiN2Q1ZSIsInN1YiI6IjVkM2RjOGU0Yjg3YWVjMDAxMzM4ZWFmYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0bIg_WXH4y0b-s97kNCSiTNodnYYcu_LRt6iVCaLCRk';
    const API_URL = 'https://api.themoviedb.org/3/';

    const response = await fetch(`${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`)

    const data = await response.json();

    return data;
}

//Highlight active link
function highlightLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach((link) => {
        if (link.getAttribute('href') === global.currentPage){
            link.classList.add('active');
        }
    });
}

//Init App
//Simple router to run code on specific page
function init() {
    switch (global.currentPage) {
        case '/':
        case '/index.html':
            displayPopularMovies();
            break;
        case '/shows.html':
            console.log('Shows');
            break;
        case '/movie-details.html':
            console.log('Movie Details');
            break;
        case '/tv-details.html':
            console.log('TV Details');
            break;
        case '/search.html':
            console.log('Search');
            break;
    }

    highlightLink();
}

document.addEventListener('DOMContentLoaded', init);

