
var altura = 0;
var largura = 0;
var vidas = 1;
var tempo = 10;
var criaAlvoTempo = 1500;

var nivel = window.location.search;
nivel = nivel.replace('?', '');

if(nivel === 'normal'){
    criaAlvoTempo = 1500;
} else if(nivel === 'dificil'){
    criaAlvoTempo = 1000;
} else if(nivel === 'god'){
    criaAlvoTempo = 750;
}

function ajustaTamanhoPalcoJogo() {
    altura = window.innerHeight;
    largura = window.innerWidth;

    console.log(altura, largura)
}

ajustaTamanhoPalcoJogo();

var cronometro = setInterval(function() {

    tempo -= 1;

    if(tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaAlvo);
        window.location.href = 'win.html';
    } else {
        document.getElementById('cronometro').innerHTML = tempo;
    }

}, 1000);

function posicaoRandomica() {

    //Remover skull anterior caso exista
    if(document.getElementById('skull')){
        document.getElementById('skull').remove();

        if(vidas > 3){
			
            window.location.href = 'game-over.html';
        } else{
            document.getElementById('v' + vidas).src = "images/coracao_vazio.png";
            vidas++;
        }

    }

    var posicaoX = Math.floor(Math.random() * largura) - 90;
    var posicaoY = Math.floor(Math.random() * altura) - 90;

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    console.log(posicaoX, posicaoX)

    //Cria o elemento HTML
    var skull = document.createElement('img');
    skull.src = 'images/Skulls.png';
    skull.className = tamanhoAleatorio() + ' ' + ladoAleatorio();
    skull.style.left = posicaoX + 'px';
    skull.style.top = posicaoY + 'px';
    skull.style.position = 'absolute';
    skull.id = 'skull';
    skull.onclick = function(){
        this.remove();
    }
    
    document.body.appendChild(skull);
}

function tamanhoAleatorio() {
    var classe = Math.floor(Math.random() * 3);

    switch(classe){
        case 0:
            return 'skull1'

        case 1:
            return 'skull2'

        case 2:
            return 'skull3'
    }
}

function ladoAleatorio() {
    var classe = Math.floor(Math.random() * 2);

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'

    }
}
