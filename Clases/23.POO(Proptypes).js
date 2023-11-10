//Manera nativa de manejar objetos en JavaScript
function Tiburon(nombre, cientifico) {
    this.nombre = nombre;
    this.cientifico = cientifico;
}

//Metodos 
Tiburon.prototype.atacar = function () {
    console.log('cuidado fuera del agua');
}

//Instancia de tiburon 
const tintorera = new Tiburon('tintorera', 'prionace glauca');
console.log(tintorera.atacar());

//Herencia en los prototipos (No se recomienda)
function TiburonToro(nombre, cientifico, peligrosidad) {
    this.super = Tiburon;
    this.super(nombre, cientifico);
    this.peligrosidad = peligrosidad;
}

//Instancia de tiburon toro 
const costero = TiburonToro.prototype = new Tiburon();
TiburonToro.prototype.constructor = Tiburon;

//Sobreescritura de metodos: Heredar de otra clase y reescribir el metodo
TiburonToro.prototype.atacar = function () {
    console.log('Cuidado fuera del agua ,toro en las proximidades');
}

//Metodos 
TiburonToro.prototype.mutilar = function () {
    console.log('Riesgo de amputacion si se produce un ataque');
}

costero.atacar();
costero.mutilar();