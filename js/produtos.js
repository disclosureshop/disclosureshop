var prod = '';
var produtos = {"produto":  [
    {"img": 'assets/logo.jpeg', "nome": 'Carregador de celular1', "link": 'www.google.com.br'},
    {"img": 'assets/logo.jpeg', "nome": 'Carregador de celular2', "link": 'www.google.com.br'},
    {"img": 'assets/logo.jpeg', "nome": 'Carregador de celular3', "link": 'www.google.com.br'},
    {"img": 'assets/logo.jpeg', "nome": 'Carregador de celular4', "link": 'www.google.com.br'}
]};


for (let i = 0; i < produtos.produto.length; i++) {
    prod += `<div class='col-6 mb-3 p-0' onclick='linkPage(${produtos.produto[i].link})'><div class='container'><div class='card' width='500px'><img src='./${produtos.produto[i].img}' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>${produtos.produto[i].nome}</h5></div></div></div></div>`;

    function linkPage(a) {
        window.location.href = `${a}`;
    }
}
document.getElementById("produtos").innerHTML = prod;


function searchProd() {
    var input, filter, cards, cardContainer, title, i;
    input = document.getElementById("myFilter");
    filter = input.value.toUpperCase();
    cardContainer = document.getElementById("produtos");
    cards = cardContainer.getElementsByClassName("card");
    for (i = 0; i < cards.length; i++) {
        title = cards[i].querySelector(".card-title");
        if (title.innerText.toUpperCase().indexOf(filter) > -1) {
        cards[i].style.display = "";
        } else {
        cards[i].style.display = "none";
        }
    }
}