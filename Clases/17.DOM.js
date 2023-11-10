//Acceder al body
console.log(document.body);

//Crear etiquetas desde JS 
let caja = document.createElement('div');
let caja2 = document.createElement('div');

//Estilos a los div creados
caja.style.width = '100px';
caja.style.height = '100px';
caja.style.backgroundColor = 'green';
caja.style.borderRadius = '50%';
caja2.style.width = '100px';
caja2.style.height = '100px';
caja2.style.backgroundColor = 'blue';
caja2.style.borderRadius = '50%';

//Renderizar los elementos nuevos
document.body.appendChild(caja);
document.body.appendChild(caja2);
document.body.append(caja, caja2);
/*
DIFERENCIAS ENTRE APPEND Y APPENDCHILD 
1.appendchild no permite renderizar más de un elemento 
2.append si permite renderizar dos o más
3.appendchild no permite renderizar string o cadenas 
4.append si permite meter varios elementos 
*/

//Saber codificación de caracteres 
console.log(document.characterSet);

//Cuantos hijos tiene el doc
console.log(document.childElementCount);

//Nodos hijos del doc
console.log(document.childNodes);

//Return hijos del doc
console.log(document.children);

/*
CLONAR EL DOCUMENTO  
Se le pase un boolean true o false en función 
de si queremos que nos clone también el contenido 
*/
let clonadoBody = document.body.cloneNode(true);
console.log(clonadoBody);

//Como saber el tipo de contenido
console.log(document.contentType);

//Seleccionar atributos  
let subtitulo1 = document.querySelector('#sub1')
let subtitulo2 = document.querySelector('#sub2')

//Creando atributos
let subtitulo3 = document.querySelector('#sub3');
subtitulo3.setAttribute('class', 'tituloClase');

subtitulo1.style.color = 'red';
subtitulo2.style.color = 'green';
subtitulo2.textContent = 'AHORA CAMBIO';

//Crear comentario
let comentario = document.createComment('soy un comentario');
console.log(comentario);

//Crear fragment  
let container = document.createDocumentFragment();
document.appendChild(container);

//Crear nodo texto
const textNode = document.createTextNode('Soy un nodo de texto');
document.body.appendChild(textNode);

//Acceder a etiqueta HTML/doctype
console.log(document.doctype);

//Return elemento HTML
console.log(document.documentElement);

//URI -> dirección
console.log(document.documentURI);

//Conocer dominio o domain
console.log(document.domain);

//Primer hijo del doc, primera etiqueta
console.log(document.firstChild);

//Primer elemento hijo
console.log(document.firstElementChild);

//Query selector all: para que funcione necesita un array
const enlaces = [...document.querySelectorAll('a')];

enlaces.map(enlace => {
    enlace.style.color = 'red'
    enlace.style.backgroundColor = 'pink'
});