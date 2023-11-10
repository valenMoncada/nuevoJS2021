/* 
Break corta la ejecución del programa
Continue lo salta
*/
const animales = ["perro", "gato", "loro", "gallina", "jirafa", "león"];

for (let i = 0; i < animales.length; i++) {
    if (i === 4) {
        break;
    } else if (i === 2) {
        continue;
    } else {
        console.log(animales[i]);
    }
}

for (const animal in animales) {
    if (animal == 3) {
        break;
    } else {
        console.log(animales[animal]);
    }
}

function saludo(nombre) {
    return `Hola que tal ${nombre}`;
}
console.log(saludo("Antonio"));