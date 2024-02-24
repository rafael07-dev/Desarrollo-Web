const menuBar = document.querySelector('.menu-bar a');
const dropdownMenu = document.querySelector('.dropdown-menu');
const btnClose = document.querySelector('.btn-close');

var body = document.body;

menuBar.addEventListener('click', () => {
    dropdownMenu.classList.toggle('open');
});

btnClose.addEventListener('click', ()=>{
    if(dropdownMenu.classList.contains('open')){
        dropdownMenu.classList.remove('open');
    }
    return;
});


const cards = document.querySelectorAll('.card-precios');
const numero = document.querySelectorAll('.numero');

window.addEventListener('scroll', animationScroll);

animationScroll();

function animationScroll() {
    const windowHeight = window.innerHeight / 5 * 4;

    cards.forEach((card) => {
        const heightCard = card.getBoundingClientRect().top;

        if (heightCard < windowHeight) {
            card.classList.toggle('show');
        }else{
            card.classList.remove('show');
        }
    });

    numero.forEach((numero) => {
        const heightCard = numero.getBoundingClientRect().top;

        if (heightCard < windowHeight) {
            numero.classList.toggle('show');
        }else{
            numero.classList.remove('show');
        }
    });
}