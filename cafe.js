const hamburger = document.querySelector('.toogle-btn .fa-solid.fa-bars');
const dropdownmenu = document.querySelector('.dropdown_menu');
const produtos = document.querySelector('.btn-produtos');
const contato = document.querySelector('.btn-contato');
const modalregister = document.querySelector('.modal-register');
const registre = document.querySelector('.actn-button');
const registredropdown = document.querySelector('.home .actn-button')
const modalmenu = document.querySelector('.modal');
const registerclose = document.querySelector('.modal-register .icon-close .fa-solid.fa-xmark')
const btncadastrar = document.querySelector('.modal .input-btn-cadastrar')
const btnlogin = document.querySelector('.modal .btn-login')
const btnloginclose = document.querySelector('.modal-login .fa-solid.fa-xmark')
const modalloginform = document.querySelector('.modal-login-form')
const buttonformlogin = document.querySelector('.modal-login-form .input-btn-login')
const xmarklogin = document.querySelector('.modal-login-form .icon-close')

hamburger.onclick = function (){
    dropdownmenu.classList.toggle('active')
}

produtos.onclick = function (){
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

btncadastrar.onclick = function (){
    modalmenu.classList.remove('active')
    modalregister.classList.remove('active')
    alert('Cadastro realizado com sucesso')
}

btnlogin.onclick = function (){
    modalmenu.classList.remove('active')
    modalregister.classList.remove('active')
    modalloginform.classList.toggle('active')
}

buttonformlogin.onclick = function(){
    modalregister.classList.remove('active')
    modalloginform.classList.remove('active')
    alert('Login realizado com sucesso')
}

xmarklogin.onclick = function (){
    modalregister.classList.remove('active')
    modalloginform.classList.remove('active')
}
