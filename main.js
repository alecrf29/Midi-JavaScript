function tocaSom (seletorAudio) {

    const elemento = document.querySelector(seletorAudio);

    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento ou seletor não encontrado.')
    }

}


const listaDeTeclas = document.querySelectorAll('.tecla');


for (contador = 0; contador < listaDeTeclas.length; contador++) {

    const teclado = listaDeTeclas[contador];
    const instrumento = teclado.classList[1]; //Estamos acessanndo as classes de cada som da tecla
    const idAudio = `#som_${instrumento}` //Template string


    teclado.onclick = function () {
        tocaSom(idAudio);
    }

    teclado.onkeydown = function (evento) {
        //Evento do código onkeydown
        if (evento.code === 'Enter' || evento.code === 'Space') {
            teclado.classList.add('ativa')
        }
    }

    teclado.onkeyup = function () {
        teclado.classList.remove('ativa');
    }

}


