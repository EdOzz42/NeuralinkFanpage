var Missao = window.document.getElementById('Missao')
Missao.addEventListener('mouseenter', entrar)
Missao.addEventListener('mouseout', sair)

function entrar() {
    Missao.style.background = "rgb(147,112,219)"
}
function sair() {
    Missao.style.background = "rgb(194, 194, 194)"
}
var Banner = window.document.getElementById('banner0')
Banner.addEventListener('click', clicarB)
Banner.addEventListener('mouseout', sairB)

function clicarB() {
    Banner.style.width = "75%"
    Banner.style.height = "75%"
}
function sairB() {
    Banner.style.width = "60%"
    Banner.style.height = "60%"
}



