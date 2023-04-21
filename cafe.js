const hamburger = document.querySelector('.toogle-btn .fa-solid.fa-bars');
const dropdownmenu = document.querySelector('.dropdown_menu');
const produtos = document.querySelector('.btn-produtos');
const politica = document.querySelector('.btn-politica');
const contato = document.querySelector('.btn-contato');
const modalregister = document.querySelector('.modal-register');
const registre = document.querySelector('.actn-button');
const registredropdown = document.querySelector('.home .actn-button')
const modalmenu = document.querySelector('.modal');
const registerclose = document.querySelector('.modal-register .icon-close .fa-solid.fa-xmark')


hamburger.onclick = function (){
    dropdownmenu.classList.toggle('active')
}


produtos.onclick = function (){
    dropdownmenu.classList.remove('active')
}


politica.onclick = function (){
    dropdownmenu.classList.remove('active')
}


contato.onclick = function (){
    dropdownmenu.classList.remove('active')
}

registre.onclick = function (){
    modalmenu.classList.toggle('active')
    dropdownmenu.classList.remove('active')
    modalregister.classList.toggle('active')
}

registerclose.onclick = function(){
    modalmenu.classList.remove('active')
    modalregister.classList.remove('active')
}

registredropdown.onclick = function (){
    modalmenu.classList.toggle('active')
    dropdownmenu.classList.remove('active')
    modalregister.classList.toggle('active')
}





