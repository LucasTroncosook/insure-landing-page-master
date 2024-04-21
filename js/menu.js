const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

const toggleMenu = ()=>{
const img = btnMenu.firstElementChild;
if(img.getAttribute('src') === './images/icon-hamburger.svg'){
    img.setAttribute('src', './images/icon-close.svg');
    menu.style.transform = 'translateX(0%)';
}else{
    img.setAttribute('src', './images/icon-hamburger.svg');
    menu.style.transform = 'translateX(-100%)';
}
console.log(img)
}
btnMenu.addEventListener('click', toggleMenu);