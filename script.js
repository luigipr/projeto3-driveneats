'use strict';
let dish ='';
let pricedish = '';
let dessert= ''
let pricedessert = 0;
let drink = '';
let pricedrink = '';
let soma = 0;


function selecionarPrato(seletor){    
    // primeiro vou verificar se existe botao já selecionado
    console.log(seletor)
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.dishes .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    dish = botao.querySelector('.title').innerHTML
    pricedish = botao.querySelector('.price').innerHTML
    pricedish = pricedish.slice(3, 8).replace(',','.')
    console.log(pricedish)
    // adiciona a classe selecionado
    botao.classList.toggle('selecionado');
    dish = botao.querySelector('.title').innerHTML
    console.log(dish)
    displaybutton();
}

function selecionarBebida(seletor){    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.drinks .selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if ( botaoSelecionadoAnteriormente !== null ){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    
    // adiciona a classe selecionado
    botao.classList.add('selecionado');
    drink = botao.querySelector('.title').innerHTML
    pricedrink = botao.querySelector('.price').innerHTML
    pricedrink = pricedrink.slice(3, 8).replace(',','.')
    console.log(pricedrink)
    console.log(drink)
    displaybutton();
}

function selecionarSobremesa(seletor){    
    // primeiro vou verificar se existe botao já selecionado
    // buscando um botao com a classe selecionado
    const botaoSelecionadoAnteriormente = document.querySelector('.dessert.selecionado');
    console.log(botaoSelecionadoAnteriormente);
    // se existir botao selecionado, 
    if (botaoSelecionadoAnteriormente !== null){
        //remove a classe selecionado desse botao
        botaoSelecionadoAnteriormente.classList.remove('selecionado');
    }
    // buscar o novo botqo clicado
    const botao = document.querySelector(seletor);
    
    // adiciona a classe selecionado
    botao.classList.add('selecionado');
    dessert = botao.querySelector('.title').innerHTML
    pricedessert = botao.querySelector('.price').innerHTML
    pricedessert = pricedessert.slice(3, 8).replace(',','.')
    console.log(pricedessert)

    console.log(dessert)
    displaybutton();
}
/*
function selecionarSobremesa(seletor){    
    const botaoSelecionadoAnteriormente = document.querySelector('.desserts .selecionado');
    console.log(botaoSelecionadoAnteriormente); 
    if ( botaoSelecionadoAnteriormente !== null ){
        botaoSelecionadoAnteriormente.classList.remove('.selecionado');
    }

    seletor.classList.add('selecionado');
    dessert = seletor
    console.log(dessert)
}*/


function displaybutton() {
    if (dish!== '' &&  drink!== '' && dessert !== '') {
        let botao = document.querySelector('.escolher')
        botao.classList.add('escondido')
        let botao2 = document.querySelector('.confirmar')
        botao2.classList.remove('escondido')
    }
}

function revisarPedido() {
    document.querySelector(".prato").innerHTML(dish)
    document.querySelector(".bebida").innerHTML(drink)
    document.querySelector(".sobremesa").innerHTML(dessert)
    document.querySelector(".pratop").innerHTML(pricedish)
    document.querySelector(".bebidap").innerHTML(pricedrink)
    document.querySelector(".sobremesap").innerHTML(pricedessert)
}



function finalizarPedido() {
   soma = Number(pricedish) + Number(pricedessert) + Number(pricedrink);
  let frase = `Olá, gostaria de fazer o pedido: \n
   -Prato: ${dish}\n %0A
   -Bebida: ${drink}\n %0A 
   -Sobremesa: ${dessert}\n %0A
   Total: R$ ${soma.toFixed(2)}`;
  window.open("https://wa.me/91999999999?text=" + frase);
}


displaybutton();