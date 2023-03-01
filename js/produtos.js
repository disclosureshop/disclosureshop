// teste


var prod = '';
var produtos = {"produto":  [
    {"img": 'https://cf.shopee.com.br/file/sg-11134201-22100-hp92pecueriv45', "nome": '01 - S7 SMART WATCH', "link": 'https://shope.ee/7KPi0TLmAj'},
    {"img": 'https://cf.shopee.com.br/file/ce5cf94bfd3acbc8bb4c633ad2dbcbb3', "nome": '02 - CAIXINHA DE SOM', "link": 'https://shope.ee/1flLMgHhkV'},
    {"img": 'https://cf.shopee.com.br/file/8b6cb757b119f3f3589151890e6fa99b', "nome": 'Capa De Silicone Kuromi Airpods', "link": 'https://shope.ee/8KIFDGt76B'},
    {"img": 'assets/logo.jpeg', "nome": 'Carregador de celular4', "link": 'https://google.com.br'}
]};

for (let i = 0; i < produtos.produto.length; i++) {
    prod += "<div class='col-6 mb-3 p-0'><div class='container'><a class='card' target='_blank' href='"+produtos.produto[i].link+"' width='500px'><img src='"+produtos.produto[i].img+"' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+produtos.produto[i].nome+"</h5></div></a></div></div>";
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