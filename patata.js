// var tupeso = prompt("Cuanto pesas en kg bowling?");
//         var tupeso = parseFloat(tupeso);
//         var planeta = prompt("Que planeta eliges? /n 1 es Marte 2 es Jupiter");
//         if(planeta == 1){
//             var resultado = tupeso*3.27/9.8;
//             var resultado = parseInt(resultado);
//             document.write("En marte pesarias " + resultado + " kg" )
//         }
//         else if (planeta == 2){
//             var resultado = tupeso*24.6/9.8;
//             var resultado = parseInt(resultado);
//             document.write("En Jupiter pesarias " + resultado + " kg");
//         }
//         else{
//             document.write("QUe parte de 1 o 2 no entendiste miserable?")
//         }

var texto = document.getElementById("textito");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", anuncio)
var b = document.getElementById("dibujito");
var lienzo = b.getContext("2d");
function dibujarBurrito(color,xinit,yinit,xfin,yfin,){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinit,yinit);
    lienzo.lineTo(xfin,yfin);
    lienzo.stroke();
    lienzo.closePath();
}
function anuncio(){
    alert("Hola nene");
}
var l=0;
var yi,xf;
for (l = 0; l<300; l+=10){
    yi = l;
    xf = 10 + l;
       dibujarBurrito("blue", yi,0,300,xf);
       dibujarBurrito("blue", 0,yi,xf,300);
    console.log(l);
}
var foca=0;
while(l>=0){
    yi = l;
    xf =  l-10;
     dibujarBurrito("blue", 0,foca,yi,0);
     dibujarBurrito("blue", foca,300,300,yi);
    console.log(l);
    l=l-10;
    foca=foca+10;
}


dibujarBurrito("blue", 0,0,0,300);
dibujarBurrito("blue", 0,300,300,300);