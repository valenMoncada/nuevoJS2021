//Son como arrays pero no nos permiten repetir datos 

let mochila = new Set([
  'linterna',
  'libro',
  'cuchillo',
  'lata sardinas'
]);

//Has: Comprobar si un elemento se encuentra dentro del set 
console.log(mochila.has('naranja'));

//Delete: Eliminamos elementos del set 
mochila.delete('libro');
console.log(mochila);

//Add: Añadimos elementos en el set 
mochila.add('fruta');
mochila.add('naranja');

//Size: Tamaño del set  
console.log(mochila.size);

//Add: intentamos repetir un dato, no retorna pero si ya está no agrega
mochila.add('linterna');

//Convertimos el set en un array 
const mochilaArray = [...mochila];
console.log(mochilaArray);