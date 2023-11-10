//Estructura de control de flujo que se van repitiendo dependiendo de la condición dada

let timer = 0;
while (timer < 5) {
    timer++;
    console.log(`timer: ${timer}`);
}

do {
    timer--;
    console.log(`timer: ${timer}`);
} while (timer > 2);

let frutas = ["Naranja", "Sandia", "Melón"];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

//for of: Recorrer array, return elem
for (const fruta of frutas) {
    console.log(fruta);
}

//for in: recorre array, return index
for (const fruta in frutas) {
    console.log(fruta);
}
//recorre objetos
const mascota = {
    nombre: "bongo",
    raza: "boyero australiano",
    edad: "9 meses",
    propietario: "todos"
}

for (const prop in mascota) {
    console.log(`key: ${prop}, value: ${mascota[prop]}`);
}