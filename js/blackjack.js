let carta1 = 0;
let carta2 = 0;
let cartaPc = 0;
let cartaPc2 = 0;
let mano = 0;
let manoPc = 0;
let won = 0;
let lost = 0;
let draw = 0;


function repartir(){
    carta1 = Math.floor(Math.random() * (11 - 1) + 1);
    carta2 = Math.floor(Math.random() * (11 - 1) + 1);
    mano = carta1 + carta2;
    cartaPc = Math.floor(Math.random() * (11 - 1) + 1);
    cartaPc2 = Math.floor(Math.random() * (11 - 1) + 1);
    manoPc = cartaPc + cartaPc2;
    
}

function pedir(){
    carta1 = Math.floor(Math.random() * (11 - 1) + 1);
    mano += carta1; 
}

function jugar(){
    again = true;
    let x = 0;
    do{
        repartir()
        alert(`Tus cartas son: ${carta1} y ${carta2}. Suman ${mano}. La Casa tiene un ${cartaPc} y una carta oculta.`)
        if(mano === 21){
            alert("Blackjack! Ganaste!")
            won++;
            x = prompt("Seguir jugando? SI - NO")
            if(x === "SI"){
                again = true;
            }else if(x === "NO"){
                fin()
                again = false;
            }
        }
        while(mano!=21 && mano<21){
            let op = prompt("PEDIR carta o QUEDARSE?");    
            if(op == "pedir"){
                pedir();
                alert(`Tu carta es un ${carta1} y tu mano vale ${mano}`);
                if(mano === 21){
                    alert("BLACKJACK!")
                    x = prompt("Seguir jugando? SI - NO")
                    if(x === "SI"){
                        again = true;
                        break;
                    }else if(x === "NO"){
                        fin()
                        again = false;
                        break;
                    }
                }else if(mano>21){
                    alert("Te pasaste!");
                    lost += 1;
                    x = prompt("Seguir jugando? Si - No")
                    if(x === "SI"){
                        again = true;
                        break;
                    }else if(x === "NO"){
                        fin()
                        again = false;
                        break;
                    }   
                } 
            }else if(op === "quedarse"){
                alert(`Te quedaste con ${mano}. La Casa tiene ${manoPc}`)
                if(mano === 21){
                    alert("Blackjack")
                    x = prompt("Seguir jugando? Si - No")
                    if(x === "SI"){
                        again = true;
                        break;
                    }else if(x === "NO"){
                        fin()
                        again = false;
                        break;
                    }
                }else if(mano<manoPc){
                        alert(`La casa gana con ${manoPc}`)
                        x = prompt("Seguir jugando? Si - No")
                        if(x === "SI"){
                            again = true;
                            break;
                        }else if(x === "NO"){
                            fin()
                            again = false;
                            break;
                        }
                }else if(mano>manoPc){
                        alert(`Ganaste con ${mano}`)                
                        won+=1;
                        x = prompt("Seguir jugando? Si - No")
                        if(x === "SI"){
                            again = true;
                            break;
                        }else if(x === "NO"){
                            fin()
                            again = false;
                            break;
                        }
                }
            }
        }
    }while(again==true);
}


function inicio(){
    alert("Mesa de Blackjack. El objetivo es llegar a 21, o lo mas cercano, sin pasarse. Si te pasas, perdes.")
    jugar();
}

function fin(){
    alert(`Resultados finales:
    Victorias: ${won}
    Derrotas: ${lost}
    Empates: ${draw}`)
}


inicio();
