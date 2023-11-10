const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const contrasena = document.querySelector('#password');
const formulario = document.querySelector('#formulario');

const emailRegex = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/;
const apellidoRegex = /^[a-zA-Z]{3,16}$/;
const passwordRegex = /^[a-z0-9_-]{6,18}$/;
const nombreRegex = /^[a-zA-Z]{3,16}$/;

//Si el campo está totalmente validado, se agrega al array
const arrayValidation = [];
const BD = [];

const valorNombre = (nombreValue) => {
	//.trim no está vacio
	if (nombreValue.trim()) {
		if (nombreRegex.test(nombreValue)) {
			arrayValidation.push('nombre');
			BD.push(nombreValue);
		}
	}
};

const valorApellido = (apellidoValue) => {
	if (apellidoValue.trim()) {
		if (apellidoRegex.test(apellidoValue)) {
			arrayValidation.push('apellido');
			BD.push(apellidoValue);
		}
	}
}

const valorEmail = (emailValue) => {
	if (emailValue.trim()) {
		if (emailRegex.test(emailValue)) {
			arrayValidation.push('email');
			BD.push(emailValue);
		}
	}
}

const valorPassword = (passwordValue) => {
	if (passwordValue.trim()) {
		if (passwordRegex.test(passwordValue)) {
			arrayValidation.push('password');
			BD.push(passwordValue);
		}
	}
}

//Cuando el form sea enviado
formulario.addEventListener('submit', (e) => {
	//Efecto burbuja para enviarlo cuando nosotros queramos
	e.preventDefault();
	if (arrayValidation.length == 4) {
		//${BD[2]}: Clave de la info, JSON.stringify(BD): la info
		localStorage.setItem(`${BD[2]}`, JSON.stringify(BD));
		window.location.reload();
		alert('Datos guardados correctamente');
	}
});

document.addEventListener('change', (e) => {
	//Si el evento coindice con el id...
	e.target.matches('#nombre') ? valorNombre(e.target.value) : null;
	e.target.matches('#apellido') ? valorApellido(e.target.value) : null;
	e.target.matches('#email') ? valorEmail(e.target.value) : null;
	e.target.matches('#password') ? valorPassword(e.target.value) : null;
});