const hamburger = document.querySelector('.toogle-btn');
const hamburgerIcon = document.querySelector('.toogle-btn i');
const dropdownmenu = document.querySelector('.dropdown_menu');
const navbar = document.querySelector('.navbar');

hamburger.onclick = function (){
    dropdownmenu.classList.toggle('active')
}
