const hamburger = document.querySelector('.toogle-btn .fa-solid.fa-bars');
const dropdownmenu = document.querySelector('.dropdown_menu');
const closemenu = document.querySelector('.closemenu')

hamburger.onclick = function (){
    dropdownmenu.classList.toggle('active')
}

closemenu.onclick = function (){
    dropdownmenu.classList.remove('active')
}