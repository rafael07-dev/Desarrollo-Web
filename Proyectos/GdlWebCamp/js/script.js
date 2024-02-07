const barraMovil = document.querySelector(".barra-movil");
const barraNavegacion = document.querySelector(".barra-navegacion");

barraMovil.addEventListener('click', () => {
    

    barraNavegacion.classList.toggle("active");

});