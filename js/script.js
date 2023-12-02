const global = {
    currentPage: window.location.pathname,
};

//Init App
function init() {
    switch (global.currentPage) {
        case 'flixx-app-theme/':
            console.log('Home');
            break;
        case '/flixx-app-theme/shows.html':
            console.log('Shows');
            break;
        case '/flixx-app-theme/movie-details.html':
            console.log('Movie Details');
            break;        
    }
}

document.addEventListener('DOMContentLoaded', init);