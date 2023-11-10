/* 
OPERADORES DE COMPARACIÓN
< Menor que
> mayor que
>= mayor o igual que 
<= menor o igual que
== igual que (valor)
=== estrictamente igual (valor y tipo de dato)
!= diferente que (valor)
!== estrictamente diferente que (valor y tipo de dato)
*/

console.log(5 == '5'); //true porque tienen el mismo valor
console.log(5 === 5); //false pq mismo valor pero no tipo de dato

let edadMaria = 37;
let edadJose = 34;
let edadAntonio = 14;
let edadCarmen = 15;
let edadCasimiro = 36;

if (edadMaria === edadJose) {
    console.log("misma edad");
} else {
    console.log("diferente edad");
}

/* 
OPERADORES ARITMETICOS
+ suma
- resta
* multiplicacion
/ division
% modulo (restante en division)

OPERADORES LÓGICOS
! not o negación
&& and 
|| or
*/

let nombre = "alguien";

if (nombre) {
    console.log(`La variable tiene valor y es ${nombre}`);
} else {
    console.log(`No tiene nombre`);
}

