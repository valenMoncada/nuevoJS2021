const frutas = ['sandia',
    'manzana',
    'pera',
    'melon',
    'uva',
    'sandia'
];

const verduras = ["lechuga",
    "pepino",
    "tomate"
];

//Concat -> une
//console.log(frutas.concat(verduras));

//every -> todos los elementos del array cumplen con determinada condición
//Arrow function
frutas.every((fruta) => {
    console.log(fruta == 'sandia');
    //colocar return para evitar errores
});

//inline callback function
let holi = frutas.every(function (fruta) {
    return fruta === "sandia";
});
console.log("inline callback " + holi);

console.log(frutas.every(fruta => { fruta == "sandia" }));

//some -> devuelte elemento por elemento true o false
frutas.some(fruta => {
    console.log(fruta === "sandia");
});

//filter -> filtra el array, devuelve array con las condiciones indicadas
frutas.filter(fruta => {
    if (fruta.length > 5) {
        console.log(`${fruta} tiene más de 5 caracteres`);
    } else {
        console.log(`${fruta} tiene menos de 5 caracteres`);
    }
});

//find -> busca y retorna coincidencias
frutas.find(fruta => {
    if (fruta !== "melon") {
        console.log(fruta);
    }
});

//foreach -> por cada elemento recorre el array
frutas.forEach(fruta => {
    console.log(fruta);

    if (fruta.length > 5) {
        console.log(`${fruta} tiene más de 5`);
    }
});

//includes -> retorna true o false si existe el elem en el array
console.log(frutas.includes("melon"));

//indexOf -> retorna <0 si no encuentra elem en array, o su index (si hay más de uno retorna el primero)
console.log(frutas.indexOf("pera"));
console.log(frutas.indexOf("sandia"));

//join -> separa elementos del array segun indicación
console.log(frutas.join('-')); //retorna pera-uva-mora...

//lastIndexOf -> encuentra el ultimo (como includes)
console.log(frutas.lastIndexOf("sandia"));

//length (propiedad)-> tamaño del array
console.log(frutas.length);

let casa = "casa";
console.log(casa.length); //cuenta letras

//map -> itera arrays y arrays de objetos y retorna array
const empresa = [
    {
        id: 0, //se acostumbra coincidir con la pos o index
        nombre: "alguien",
        edad: 34
    },
    {
        id: 1,
        nombre: "alguien p",
        edad: 64
    },
    {
        id: 2,
        nombre: "alguien pp",
        edad: 24
    }
];

empresa.map(em => {
    document.body.innerHTML += `
    <ul>
        <li>
            Id: ${em.id} <br>
            Nombre: ${em.nombre} <br>
            Edad: ${em.edad}
        </li>
    </ul>
     `
});

//pop -> elimina y retorna ultimo elm de un array
console.log(frutas.pop());
console.log(frutas);

//push -> agrega al final del array nuevo elem indicado y retorna length del array
console.log(frutas.push("Fresa"));

//reduce -> reduce array a un solo elemento
frutas.reduce(fruta => {
    console.log(fruta);
});

//reverse -> return ar5ray invertido
console.log(frutas.reverse());

//slice -> return elems entre el primero y segundo index no incluido
console.log(frutas.slice(1, 4));

//sort -> ordena el array alfabeticamente
console.log(frutas.sort());

//unshift -> agrega al inicio del array el elem, return length
console.log(frutas.unshift("mora"));

//shift -> elimina al principio del array y lo retorna
console.log(frutas.shift());

/* 
splice -> returna elem teniendo en cuenta 2 indices
1 -> donde empieza a contar (index) 
2 -> cuantos a eliminar (si es 0 no elimina ninguno)
3 -> los que se añadiran
*/
frutas.splice(0, 4, "mango");
console.log(frutas);