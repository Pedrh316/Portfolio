let menu = document.querySelector('.menu-content');
let labelDark = document.querySelector('.menu-mobile .btn-menu');
let menuList = document.querySelector('.menu-content #menu-content__list');

window.addEventListener('scroll', changeMenu);
labelDark.addEventListener('click', showMenu);
window.addEventListener('resize', adjustAriaExpanded);

        
function changeMenu() {
    window.pageYOffset > menu.offsetHeight && innerWidth > 750 ?
        menu.classList.add('menu-custom') :
        menu.classList.remove('menu-custom');
}

function showMenu(){
    menuList.getAttribute('aria-expanded') === 'true' ? menuList.setAttribute('aria-expanded', false) : menuList.setAttribute('aria-expanded', true)
}

function adjustAriaExpanded(){
    if(innerWidth > 750 && menuList.getAttribute('aria-expanded') !== 'false') menuList.setAttribute('aria-expanded', 'false')
}
