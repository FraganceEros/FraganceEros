const menu = document.querySelector(".fragancias")
const menuHambur = document.querySelector(".menu")
const menuSpan = document.querySelector(".contenedorMenu");

menuSpan.addEventListener("click", ()=>{
    menuSpan.classList.toggle("active")
    menu.classList.toggle("desplazado");
})
