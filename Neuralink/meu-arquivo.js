var Missao = window.document.getElementById('Missao')
Missao.addEventListener('mouseenter', entrar)
Missao.addEventListener('mouseout', sair)

function entrar() {
    Missao.style.background = "rgb(0,191,255)"
}
function sair() {
    Missao.style.background = "rgb(47, 47, 47)"
}
var Banner = window.document.getElementById('banner0')
Banner.addEventListener('click', clicarB)
Banner.addEventListener('mouseout', sairB)

function clicarB() {
    Banner.style.width = "85%"
    Banner.style.height = "85%"
}
function sairB() {
    Banner.style.width = "60%"
    Banner.style.height = "60%"
}

var perguntas01 = window.document.getElementById('li0')
perguntas01.addEventListener('mouseenter', entrar1)
perguntas01.addEventListener('mouseout', sair2)
function entrar1() {
    perguntas01.style.background = "rgb(0,191,255)"
}
function sair2() {
    perguntas01.style.background = "rgb(47, 47, 47)"
}

var perguntas02 = window.document.getElementById('li1')
perguntas02.addEventListener('mouseenter', entrar3)
perguntas02.addEventListener('mouseout', sair4)
function entrar3() {
    perguntas02.style.background = "rgb(0,191,255)"
}
function sair4() {
    perguntas02.style.background = "rgb(47, 47, 47)"
}

var perguntas03 = window.document.getElementById('li2')
perguntas03.addEventListener('mouseenter', entrar5)
perguntas03.addEventListener('mouseout', sair6)
function entrar5() {
    perguntas03.style.background = "rgb(0,191,255)"
}
function sair6() {
    perguntas03.style.background = "rgb(47, 47, 47)"
}
