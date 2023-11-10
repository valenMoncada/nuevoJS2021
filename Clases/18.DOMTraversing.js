/*
DOM TRAVERSING (Recorriendo el DOM)
Tipos de nodos:
Elementos: Fuerza 1
Atributos: Fuerza 2
Text Nodes: Fuerza 3, texto dentro de etiquetas
Comentarios: Fuerza 8
Documentos: Fuerza 9
doctype: Fuerza 10
*/

const lista = document.querySelector('#lista');

//Hijos de la lista
console.log(lista.children);
console.log(lista.children.children);

//DOM TRAVERSING (HIJOS A PADRES) usamos el parentElement  
console.log(lista.parentElement.parentElement);

//DOM TRAVERSING (ENTRE HERMANOS)
console.log(lista.previousSibling);
console.log(lista.nextSibling.nextSibling);