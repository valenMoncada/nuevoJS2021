/* 
Funciones declaradas -> tiene efecto hoisting o elevación
Funciones expresadas -> no existe el efecto hoisting
Funciones flecha
Funciones autoejecutables anonimas o no anonimas

functionName (PARAMETROS)

Elevación de las variables. por eso se puede llamar la función antes de declararla en JS
*/

//Declarada
function saludo(param) {
  console.log("wenaas");

  console.log(`Wenaas ${param}`);
}
saludo("Jose"); //argumento

//Expresadas --> mejor dentro de bloques
const saltar = function () {
  console.log("Estoy saltando");
}
saltar();

//Flecha
const suma = (param) => {
  console.log(param + 3);
}
suma(3);
//flecha una sola linea
const multi = (num1, num2) => console.log(num1 * num2);
multi(2, 2);

//Autoejecutables
const saludo2 = (function () {
  console.log("buenas, buenas");
})();
//Moderna autoejecutable
const saludo3 = (() => {
  console.log("buenas, buenas 2");
})();

//Anonimas autoejecutables (se coloca arriba del todo)
(function () {
  console.log("Anonima clasica");
})();
//moderna autoejecutalbe
(() => {
  console.log("Anonima moderna");
})();