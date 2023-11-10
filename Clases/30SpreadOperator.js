/* 
Unir arrays y objetos
*/
const cities = [
    'Madrid',
    'Londres',
    'Berlin'
];

const countries = [
    'Spain',
    'Belgium',
    'Italy'
];

const mundo = [...cities, ...countries];
console.log(mundo);

//Si hay objetos repetidos, los sobreescribe, a menos de que esté dentro de otro objeto
const modelsWoman = {
    Sara: "Spain",
    Kelly: "England",
    Fionella: "Italia",
    Fionella2: {
        Fionella: "Francia"
    }
}

const modelsMan = {
    Pepe: "Spain",
    Jordan: "United States",
    Korea: "Kim Yom Ul"
}

const models = { ...modelsWoman, ...modelsMan };
console.log(models); //Parece retornarlos en orden alfabetico