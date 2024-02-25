const menuBar = document.querySelector('.menu-bar a');
const dropdownMenu = document.querySelector('.dropdown-menu');
const btnClose = document.querySelector('.btn-close');
const cards = document.querySelectorAll('.card-precios');
const numero = document.querySelectorAll('.numero');
const windowHeight = window.innerHeight / 5 * 4;

var body = document.body;

menuBar.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

btnClose.addEventListener('click', () => {
    if (dropdownMenu.classList.contains('open')) {
        dropdownMenu.classList.remove('open');
    }
    return;
});

window.addEventListener('scroll', animationScroll);

function animationScroll() {

    cards.forEach((card) => {
        const heightCard = card.getBoundingClientRect().top;

        if (heightCard < windowHeight) {

            if(!card.classList.contains('show')){
                card.classList.toggle('show');
            }
        }else{
            card.classList.remove('show')
        }
    });

    numero.forEach((numero) => {
        const heightCard = numero.getBoundingClientRect().top;

        if (heightCard < windowHeight + 50) {
            if(!numero.classList.contains('show')){
                numero.classList.toggle('show');
            }
        }else{
            numero.classList.remove('show');
        }
    });
} 