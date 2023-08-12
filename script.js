function mostraResposta(id) {
    var respostas = document.getElementsByClassName('faq');
    for (var i = 0; i < respostas.length; i++) {
        respostas[i].classList.remove('active');
    }

    var clicada = document.getElementById(id);
    clicada.classList.add('active');
}

function filterByCategory(category) {
    var links = document.querySelectorAll('[data-category]');
    for (var i = 0; i < links.length; i++) {
        if (category === 'all' || links[i].getAttribute('data-category') === category) {
            links[i].style.display = 'block';
        } else {
            links[i].style.display = 'none';
        }
    }
}

function filterByCategory(category) {
    var links = document.querySelectorAll('[data-category]');
    for (var i = 0; i < links.length; i++) {
        if (category === 'all' || links[i].getAttribute('data-category') === category) {
            links[i].style.display = 'block';
        } else {
            links[i].style.display = 'none';
        }
    }

    // Also, hide all content on the right side
    var respostas = document.getElementsByClassName('faq');
    for (var i = 0; i < respostas.length; i++) {
        respostas[i].classList.remove('active');
    }
}

function toggleDropdown() {
    var dropdown = document.getElementById('category-dropdown');
    dropdown.classList.toggle('active');
}


