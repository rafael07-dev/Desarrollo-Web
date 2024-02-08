const menuBar = document.querySelector('.menu-bar');
const menuHide = document.querySelector('.menu-hide');

function showMenu() {
    const sideBar = document.querySelector('.side-bar');

    sideBar.style.display = 'flex';
}

function hideMenu() {
    const sideBar = document.querySelector('.side-bar');

    sideBar.style.display = 'none';
}