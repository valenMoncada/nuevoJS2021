// Scope, 4 tipos
// 1. Super global: Acceso desde cualquier archivo (backend)
// 2. Global: Acceso desde cualquier lugar en el archivo. Entre menos mejor.
var perro = "lucas";
let pez = "tiburon";
//Const se comporta igual que let en los ambitos

console.log(pez);

// 3. Local: Acceso desde una función. Contexto que engloba en una función.
function saltar() {
    var gato = "felino"; //respeta ambito local
    let dinosaurio = "era antigua"; //respeta
}
//console.log(gato);

// 4. Bloque: Contexto que engloba dentro de un bucle o condicional.
let nombre = "Maria";
if (nombre === "Maria") {
    var apellido = "Gonzales"; //no respeta el bloque
    let mascota = "gato"; //respeta
}
/* console.log(apellido);
console.log(mascota); */
