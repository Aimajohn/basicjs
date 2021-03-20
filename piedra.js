var resultado = function (player1, player2){
        if (player1 === player2){
            console.log("Empate losers");
        }
        else if (player1 == 'papel' && player2=='piedra'  || player1=='piedra' && player2=='tijeras' || player1=='tijeras' && player2=='papel' ) {
            console.log ("Gana player1");
        }
        else if (player2 == 'papel' && player1=='piedra'  || player2=='piedra' && player1=='tijeras' || player2=='tijeras' && player1=='papel' ) {
            console.log ("Gana player2");
        }
        else{
            console.log("Escribe bien truño");
        }
    }

resultado('papel','papel')

var jugar = function(a,b){

    switch {
        case a == b:
            console.log("Empate!")
            break;
        case a==papel && b==piedra || a==tijera && b==papel || a==piedra && b==tijeras:
            console.log("Gana player1")
            break;
        case a==piedra && b=papel || a==papel && b==tijeras || a==tijeras && b==piedra:
            console.log("Gana player2")
            break;
        default:
            console.log("Escribe bien truño mrda")
            break;
    }
}

var pcparts = ["8GB RAM", "UPS", "Tarjeta Gráfica", "SSD"]


var papas = ["papi", "padre", "otosan", "papa", "gfe"];
function expulsarpapas (papa){
    console.log(`Vete truño llamado ${papa}`)
}
for (var i=0 ; i < papas.length; i++){
    expulsarpapas(papas[i]);
}
for (var pedro of papas){
    expulsarpapas(pedro)
    }