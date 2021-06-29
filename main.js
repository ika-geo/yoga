// burger menu

let $menuBtn = document.querySelector(".menuBtn")
let $headerMenu = document.querySelector(".header__menu")

$menuBtn.addEventListener("click", function (){
    $menuBtn.classList.toggle("active")
    $headerMenu.classList.toggle("active")
})