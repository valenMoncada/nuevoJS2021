//Destructurando objetos
const mascota = {
    raza: 'Salchicha',
    color: "Pardo",
    edad: 3,
    propietario: "Daniel Gutierrez"
}

console.log(mascota.edad);

const { raza, color, edad, propietario } = mascota;
console.log(edad);
console.log(propietario);

//Destructurando arrays
const camareras = ['Juanita', 'Carla', 'Michaella', 'Gabriela'];

const [Juanita, Carla, Michaella, Gabriela] = camareras;
console.log(Carla);