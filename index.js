const a = window.document.querySelector("#meu-link");

var card = window.document.getElementById('card')
var icon1 = window.document.getElementById('icon1')
var icon2 = window.document.getElementById('icon2')


function Voltz(){
    a.href = "https://wa.me/5521981233514?text=Gostaria+de+saber+mais+sobre+a+moto+Voltz%21";
    card.src = 'Imagens/card-voltz.svg'
    icon1 = setAttribute("onclick", "Honda()")
    icon2 = setAttribute("onclick", "Honda()")
    
}
function Honda(){
    a.href = "https://wa.me/5521981233514?text=Gostaria+de+saber+mais+sobre+a+moto+Honda%21";
    card.src = 'Imagens/card-honda-cb.svg'
    icon1 = setAttribute("onclick", "Voltz()")
    icon2 = setAttribute("onclick", "Voltz()")
}

