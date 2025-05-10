document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('mainNav');

    if (navbar) {
        function checkScroll() {
            const scrollHeight = window.scrollY;
            const viewportHeight = window.innerHeight;
            if (scrollHeight > 0.50 * viewportHeight) {
                navbar.classList.add('scrolled-navbar');
            } else {
                navbar.classList.remove('scrolled-navbar');
            }
        }

        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
    }

});

const contactBtn = document.getElementById('contact-button')

if (contactBtn) {
    contactBtn.addEventListener("click", (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        swal("Mensaje enviado", "Gracias por contactarnos, " + name + ".", "success");
    })
}