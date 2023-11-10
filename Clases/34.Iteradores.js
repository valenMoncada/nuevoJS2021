//Set permite hacer un array sin repetir elem
let numbers = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
let iterador = numbers[Symbol.iterator]();

/*
Nos va a dar dos valores en consola {uno, dos}
uno es el indice del set 
dos es el done que return true si la lista a terminado 
*/

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());