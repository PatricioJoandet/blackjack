let carta1 = 0;
let carta2 = 0;
let cartaPc = 0;
let cartaPc2 = 0;
let mano = 0;
let manoPc = 0;
let win = 0;
let lost = 0;


function repartir(){
    carta1 = Math.floor(Math.random() * (11 - 1) + 1);
    carta2 = Math.floor(Math.random() * (11 - 1) + 1);
    mano = carta1 + carta2;
    cartaPc = Math.floor(Math.random() * (11 - 1) + 1);
    cartaPc2 = Math.floor(Math.random() * (11 - 1) + 1);
    manoPc = cartaPc + cartaPc2;
    
}

function jugar(){
    alert("Mesa de Blackjack. El objetivo es llegar a 21, o lo mas cercano, sin pasarse. Si te pasas, perdes.")
    repartir()
    alert(`Tus cartas son: ${carta1} y ${carta2}. Suman ${mano}
La Casa tiene un ${cartaPc} y una carta oculta.`)
}

jugar();