
var nombre = "John" , apellido = "Rodriguez", edadi = "18";
var nombreEnMayusculas = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLocaleLowerCase();
var primeraLetraDelNombre = nombre.charAt(0);
var ultimaLetraDelNombre = nombre.charAt(-1);
var nombreCompleto = `${nombre} ${apellido}`;
var nombreLetrasNumero = nombre.length;
var str = nombre.charAt(1) + nombre.charAt(2);
var str2 = nombre.substr(1,2);
var ultimaNombre = nombre.charAt(-1); var ultimaNombre2 = nombre.substr(-1);
 var vinitodeluzu = 20.3;
 var papas = 2
 var total =Math.round( 3 * vinitodeluzu *100)/100 + papas;
 var totalstr = total.toFixed(2);
 var totalfinal = parseFloat(totalstr);
 var edad = 4;
 var edadDespuesdeaño = edad += 1;
 var dosaños = 2;
 var patata = quiensos(nombre, edadi);
 edad += dosaños;

function quiensos (n, b){
    console.log(`Hola, sabías que ${n} tiene ${b}`)
}