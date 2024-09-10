function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/close_white_36dp.svg";
    }
}

function filtroShow() {
    let menuMobile = document.querySelector('.cumpons_divs_lojas_escondido'); // Corrigido o seletor
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('icon_cupom').src = "img/close_white_36dp.svg"; // Corrigido para o ícone de filtro
    } else {
        menuMobile.classList.add('open');
        document.querySelector('icon_cupom').src = "img/close_white_36dp.svg"; // Ícone de fechar
    }
}