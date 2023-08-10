function mostraResposta(id) {
    var respostas = document.getElementsByClassName('faq');
    for (var i = 0; i < respostas.length; i++) {
        respostas[i].classList.remove('active');
    }

    var clicada = document.getElementById(id);
    clicada.classList.add('active');
}
