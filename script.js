'use strict';
let dish =''
let dessert= ''
let drink = ''


const burger = document.querySelector("burger")
const costela = document.querySelector("costela")
const outback = document.querySelector("outback")

const cerveja = document.querySelector("cerveja")
const suco = document.querySelector('suco')
const refri = document.querySelector('refri')

const torta = document.querySelector("torta")
const tiramisu = document.querySelector("tiramisu")
const pudim = document.querySelector("pudim")


function selecionarPrato(seletor){    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.dish .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('.selecionado');
    }
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    dish = seletor
    console.log(dish)
}
function selecionarBebida(seletor){    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.drink .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('.selecionado');
    }
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    
    // adiciona a classe selecionado
    botao.classList.add('selecionado');
    
    drink = seletor
    console.log(drink)
}
function selecionarSobremesa(seletor){    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.dessert .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('.selecionado');
    }
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    dessert = seletor
    console.log(dessert)
}
function displaybutton() {
    if (dish!= '' &&  drink!= '' && dessert != '') {
        let footer = document.querySelector('.btnfake')
        footer.classList.add(escondido)
        let botao = document.querySelector('.btntrue')
        botao.classList.remove('.escondido')
    }
}


function finalizarPedido() {
  let frase = `Olá, gostaria de pedir um combo: ${prato}, ${bebida} e ${sobremesa}`;
  window.open("https://wa.me/5591999999999?text=" + frase);
}