const global = {
    currentPage: window.location.pathname,
};

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
            console.log('Home');
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

an 40501921060
rn 113193532