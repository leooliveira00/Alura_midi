const ListaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom (IdElementoAudio) {
    const elemento = document.querySelector(IdElementoAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } else {
        alert('O Elemento selecionado não é valido.');
    }

}

for (let contador = 0;contador < ListaDeTeclas.length; contador++) {

    const tecla = ListaDeTeclas[contador];
    const instrumento = ListaDeTeclas[contador].classList[1];

    const IdAudio = `#som_${instrumento}`;

    tecla.onclick = function () {
        tocaSom(IdAudio);
    
    }


        const teclaC = tecla.classList;

        tecla.onkeydown = function (evento) {
            if (evento.code === 'Space' || evento.code === 'Enter') {
                teclaC.add('ativa');
            }
        }

        tecla.onkeyup = function () {
            teclaC.remove('ativa');
        }

}



        