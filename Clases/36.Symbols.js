/*
Es un dato primitivo que nos permite crear identificadores unicos 
y evitar colisiones 
Symbol es un tipo de mapa para encapsulamiento y garantizar unique keys
*/

let nom1 = 'nombre';
let nom2 = 'nombre';
//Return true
console.log(nom1 == nom2);
console.log(nom1 === nom2);

let nombre1 = Symbol('nombre');
let nombre2 = Symbol('nombre');

//Return false porque tienen identificación unico
console.log(nombre1 == nombre2);
console.log(nombre1 === nombre2);


//Obtener en valor de c/u retornara tru
console.log(String(nombre1) == String(nombre2));
console.log(String(nombre1) === String(nombre2));

let obj = {
    nombre1: 'Peter'
}
obj.nombre1 = 'Pedro';
console.log(obj.nombre1); //Return Pedro

let objeto = {
    [nombre1]: 'Peter'
}

//los [] hacen que esté protegido, entonces no cambia
objeto.nombre1 = 'Antonio';
console.log(objeto[nombre1]); //Return Antonio

objeto[nombre1] = 'Luis'; //Para poderlo cambiar
console.log(objeto[nombre1]); //Return Luis
