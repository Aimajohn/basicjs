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
