const burgerButton =  document.querySelector('.burger_btn')
const menu =  document.querySelector('.burger-menu')
const catalog =  document.querySelector('.catalog__menu')
const burgerBtn =  document.querySelector('.burger-button')
const search =  document.querySelector('.search')
const catalogButton = document.querySelector('.catalog')
const catalogLink = document.querySelector('.menu__catalog_link')

burgerButton.addEventListener('click',  function (e) {
    menu.classList.toggle('burger-menu_active')
    catalog.classList.remove('catalog__menu_active')
    burgerBtn.classList.toggle('burger-button--open')
    search.classList.toggle('search__hidden')
    
});

catalogButton.addEventListener('click',  function (e) {
    catalog.classList.toggle('catalog__menu_active')
});

catalogLink.addEventListener('click',  function (e){
    menu.classList.remove('burger-menu_active')
    catalog.classList.add('catalog__menu_active')
})
