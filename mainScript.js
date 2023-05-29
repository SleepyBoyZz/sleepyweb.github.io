let navBar = document.querySelector("header");

window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;

    if (scrolled > 0) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});