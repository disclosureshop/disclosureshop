// teste


var prod = '';
var produtos = {"produto":  [
    // {"img": 'assets/logo.jpeg', "nome": '04 - fone de ouvido sem fio bluetooth Pikachu', "link": ''},
    {"img": 'assets/logo.jpeg', "nome": '04 - fone de ouvido sem fio bluetooth Pikachu', "link": ''},
    {"img": 'https://cf.shopee.com.br/file/298a2964003347b84448c9d0972f169a', "nome": '04 - Fone De Ouvido Sem Fio Bluetooth Pikachu', "link": 'https://shope.ee/5KedeQWAxl'},
    {"img": 'https://cf.shopee.com.br/file/8b6cb757b119f3f3589151890e6fa99b', "nome": '03 - Fone De Ouvido Com Capa De Silicone Kuromi Airpods', "link": 'https://shope.ee/8KIFDGt76B'},
    {"img": 'https://cf.shopee.com.br/file/ce5cf94bfd3acbc8bb4c633ad2dbcbb3', "nome": '02 - Caixinha De Som', "link": 'https://shope.ee/1flLMgHhkV'},
    {"img": 'https://cf.shopee.com.br/file/sg-11134201-22100-talzofauerivf4', "nome": '01 - S7 Smart Watch', "link": 'https://shope.ee/7KPi0TLmAj'}
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