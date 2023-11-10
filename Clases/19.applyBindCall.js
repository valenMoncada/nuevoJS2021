//Acceder desde los datos de un objeto a otro para acceder a sus funciones
const cafeteria = {
    nombre: 'Los pinos',
    actividades(juego1, juego2) {
        console.log(`Soy ${this.nombre} y estamos jugando al ${juego1} y ${juego2}`);
    }
}

const persona = {
    nombre: 'Emilio'
}

//call (acceder al contexto de otro objeto) Primer param es contexto
let accederCall = cafeteria.actividades.call(persona, 'billar', 'soccer');

//apply (acceder al contexto de otro objeto) Segundo param entre []
let accederApply = cafeteria.actividades.apply(persona, ['poker', 'soccer']);

//bind (retorna una nueva función con el nuevo contexto)
const jugar = cafeteria.actividades.bind(persona);

jugar('futbolin', 'algo');
jugar('cartas', 'natación');