const hamburgerMenuIcon = document.querySelector('#menu__hamburger')
const menuHamburgerList = document.querySelector('#header__nav-ul')

hamburgerMenuIcon.addEventListener("click", ()=>{
   hamburgerMenuIcon.classList.toggle('menu__hamburger-active')
   menuHamburgerList.classList.toggle('header__nav-ul-mobile')
})