/*
this hace referencia a que "marca" pertenece a automovil
Método si es una función dentro de una clase

Getter y setter se llaman como prop
*/
class Automovil {
    constructor(marca, modelo, fechaLanzamiento, combustible, color) {
        this.marca = marca;
        this.modelo = modelo;
        this.fechaLanzamiento = fechaLanzamiento;
        this.combustible = combustible;
        this.color = color;
    }

    //getter 
    get getColor() {
        return this.color;
    }

    //setter 
    set setColor(color) {
        this.color = color;
    }

    //Métodos
    velocidad(velocidad) {
        if (velocidad > 200) {
            return "Ya no debes acelerar más esto es el máximo ¡¡¡PELIGRO!!";
        } else {
            return `Para alcanzar tu velocidad máxima faltan ${200 - velocidad}Km/h`;
        }
    }

    //Métodos estáticos: no va a cambiar. Se llama desde la clase automovil
    static ruedas() {
        return "Tengo las ruedas de serie";
    }
}

//Instancias de clase 
const coche = new Automovil('seat', 'ibiza', 2015, 'gasolina', 'rojo');

console.log(coche);

coche.setColor = 'verde';
console.log(coche.getColor);
console.log(coche.velocidad(100));
console.log(Automovil.ruedas());

/*
Herencia -> extends
En el constructor y super primero todo lo que se va a heredar
después las nuevas props que voy a agregar
*/

class Nautica extends Automovil {
    constructor(marca, modelo, materialCasco, tipoMotor) {
        super(marca, modelo); //Viene de clase padre

        this.materialCasco = materialCasco;
        this.tipoMotor = tipoMotor;
    }
}

//Instancia de nautica 
const titanic = new Nautica('metal', 'carbón', 'titanic', 'titanicModel');
console.log(titanic);
console.log(titanic.color = "verde");