// burger menu

let $menuBtn = document.querySelector(".menuBtn")
let $headerMenu = document.querySelector(".header__menu")

$menuBtn.addEventListener("click", function (){
    $menuBtn.classList.toggle("active")
    $headerMenu.classList.toggle("active")
})


// fixed header

let $headerTop = document.querySelector(".header__top")

window.addEventListener("scroll", function (){
    if (window.scrollY>50&&window.innerWidth>768){
        $headerTop.classList.add("fixed")
    }
    else {
        $headerTop.classList.remove("fixed")
    }
})


window.addEventListener("resize", function (){
    if (window.innerWidth>768&&window.scrollY>50){
        $headerTop.classList.add("fixed")
    }
    else {
        $headerTop.classList.remove("fixed")
    }
})
