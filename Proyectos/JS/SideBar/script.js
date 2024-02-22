var btnExpand = document.querySelector('.expand-btn');
var links = document.querySelectorAll('.nav-links a');
var span = document.querySelectorAll('.nav-links span');
var sidebar = document.querySelector('.sidebar');

btnExpand.addEventListener('click', () => {
  document.body.classList.toggle('collapsed');
});

links.forEach((item) => {

    item.addEventListener('click', ()=>{
        alert('funcionando, ve a inspeccionar la consola');
        span.forEach((i) => {
            i.classList.toggle('active');
        })
    });
});