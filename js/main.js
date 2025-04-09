document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNav');

    function checkScroll() {
        const scrollHeight = window.scrollY;
        const viewportHeight = window.innerHeight;
        console.log(navbar.classList);
        if (scrollHeight > 0.50 * viewportHeight) {
            navbar.classList.add('scrolled-navbar');
        } else {
            navbar.classList.remove('scrolled-navbar');
        }
    }

    window.addEventListener('scroll', checkScroll);
    window.addEventListener('load', checkScroll);
});