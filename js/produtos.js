// teste


var prod = '';
var produtos = {"produto":  [
    // {"img": 'assets/logo.jpeg', "nome": '04 - fone de ouvido sem fio bluetooth Pikachu', "link": ''},
    {"img": 'https://down-br.img.susercontent.com/file/ed63b17a61f99b9fee031aa72ac2adb7', "nome": '13 - Tapete Grama Sintetica 2,00m x 1,00m', "link": 'https://shope.ee/2L1ZQ67PMY'},
    {"img": 'https://down-br.img.susercontent.com/file/63375dc696bede5d2f1ed5a9baddedc4', "nome": '12 - Pipoqueira de Silicone', "link": 'https://shope.ee/5ALc6uUzcB'},
    {"img": 'https://cf.shopee.com.br/file/br-11134201-22120-xt3g1wivdqkvcb', "nome": '11 - Contact para geladeira fogao microondas e etc.', "link": 'https://shope.ee/2feDslSQOv'},
    {"img": 'https://cf.shopee.com.br/file/27a1dc4f41ba48dd31960d774929772c', "nome": '10 - Películas de vidro para Iphones', "link": 'https://shope.ee/2feBwcwkgC'}, 
    {"img": 'https://cf.shopee.com.br/file/fea8f61f4a0678df3caf6185cfcaebcb', "nome": '09 - Capinha de Silicone para Iphones', "link": 'https://shope.ee/9KB5tVeZzU'},
    {"img": 'https://cf.shopee.com.br/file/e76c1efb6b1ef420763bb3a0e79153c1', "nome": '08 - Placa Ripada 30 x 30CM kit com 22peças 260 reais', "link": 'https://shope.ee/4pidpLGk0S'},
    {"img": 'https://cf.shopee.com.br/file/b21dc08deb5ca92c8b6a7b9c37afb0ce', "nome": '07 - Jogo de Panela Antiaderente de 150 reais', "link": 'https://shope.ee/4KmLAexeNc'},
    {"img": 'https://cf.shopee.com.br/file/cd7ac136a61f6fc9b6086d1f48f77b70', "nome": '06 - Chapéu Pelucia Polvo-mau', "link": 'https://shope.ee/8KIFMyJH2P'},
    {"img": 'https://cf.shopee.com.br/file/sg-11134201-22110-fygvzsdk2hjvcc', "nome": '05 - Placa decorativa 3D PVC', "link": 'https://shope.ee/1Ap6LbohgC'},
    {"img": 'https://cf.shopee.com.br/file/298a2964003347b84448c9d0972f169a', "nome": '04 - Fone De Ouvido Sem Fio Bluetooth Pikachu', "link": 'https://shope.ee/5KedeQWAxl'},
    {"img": 'https://cf.shopee.com.br/file/8b6cb757b119f3f3589151890e6fa99b', "nome": '03 - Fone De Ouvido Com Capa De Silicone Kuromi Airpods', "link": 'https://shope.ee/8KIFDGt76B'},
    {"img": 'https://cf.shopee.com.br/file/ce5cf94bfd3acbc8bb4c633ad2dbcbb3', "nome": '02 - Caixinha De Som', "link": 'https://shope.ee/1flLMgHhkV'},
    {"img": 'https://cf.shopee.com.br/file/sg-11134201-22100-talzofauerivf4', "nome": '01 - S7 Smart Watch', "link": 'https://shope.ee/7KPi0TLmAj'},
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