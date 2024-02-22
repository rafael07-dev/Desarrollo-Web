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
});