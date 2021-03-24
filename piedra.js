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

    var formas = ["cuadrado", "rectangulo" , "tringulo", "circulo"];
    function saludarformas (pedro){
        console.log(`Hola pequeño ${pedro}`);
    }
    //´pop shift unshift push
    while (formas.length > 0){
        var pedro = formas.shift();
        saludarformas(pedro);
    }
    
    var mipc = {
        placa: "Asus Prime B450 MA",
        cpu: "Ryzen 3 3200G",
        SSD: "Kingston m.2 250GB",
        Fuente: "Azza 550W 80+bronze",
        RAM: "8GB DDR4 3000Ghz HP V6",
        datallespc: function (){
            console.log(`PC con ${this.cpu} de placa ${this.placa}`);
        }
    };
    
    function base (placa, cpu, SSD, fuente, RAM){
        this.placa = placa;
        this.cpu = cpu;
        this.SSD = SSD;
        this.fuente = fuente;
        this.RAM = RAM;
    }

    var pcgamermia = new base("Asus Prime", "Ryzen 3 32000G", "Kingston 250GB", "AZZA 550W", "HP V6 300Ghz 8GB");
    var pcgamernice = new base("Asrock Steel Legend", "Ryzen 5 3400G", "Kingston 500GB", "AZZA 550W", "2x HP V8 3200Ghz 8GB");
    var pcgamernub = new base("Asus A320k", "Ryzen 2 2400G", "Kingston 120GB", "AZZA 550W", "HP V6 300Ghz 8GB");
    var pcgamerpro = new base("msi Tomahawk", "Ryzen 5 5400G", "NVme Samsung 1TB", "Corsair 700w", "2x Corsair 3200Ghz 8GB");

    var pcs = (pcgamermia, pcgamernice, pcgamernub, pcgamerpro);
    function mostrar(pc){
        console.log(`Mira esta ${pc}`);
    }
    while (pcs.length > 0){
        var pc = pcs.shift();
        mostrar(pc);
    }
    
    

    for (var i=1 ; i<=100 ; i++){
        if ( i % 2 == 0){
            console.log(i);
        };
    }
    var num = 0;
    count =50;
    for (num = 0 ; num+2 ; count =50; count = count-1){
        console.log(num)
    }
    
    function sumea(a,b){
        console.log(a+b)
        }
        var a = sumeaa(2,1)
 /*funcionrecursiv, se cit sí misma */ 
function cuentregret(numero){
        numero -= 1;
        if (numero > 0){
        console.log(numero);
        cuentregret(numero);
        }
        else{
        console.log("Feliz Jueves");
        }
        }
        function broli(a){
            for (let i = a; i > 0; i-- ){
                console.log(i)
        }
        }
        broli(5)
/*Lo mismo de arriba*/ 

        let nums = [8, 60, 5, 3, 12, 11];
        function segundo(numeros){
            let first = numeros[0];        
            let second = 0;
            for(let i=0; i<numeros.length; i++){
                if (numeros[i]>first){
                    second = first;
                    first = numeros[i];
                }
                else if (numeros[i]<first && numeros[i]>second){
                    second = numeros[i];
                }
            }
            return (second)
        }
        console.log(segundo(nums))


function swap_text(s){
    for (var i=0; i<s.length; i++){
        if swap_text == swap_text.toLowerCase(){
            return (swap_text.toUpperCase())
        }
        if swap_text == swap_text.toLowerCase(){
            return (swap_text.toLowerCase())
        }
    }
}
console.log(swap_text("HOLA"))