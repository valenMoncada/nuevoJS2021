let arrayData = [];
let arrayValidation = [];
let data;
const formulario = document.querySelector('#registro');
const access = document.querySelector('#acceso');
const content = document.querySelector(".content");
const btnCerrar = document.querySelector(".cerrar");
const btnBorrar = document.querySelector(".borrar");

access.addEventListener('submit', (e) => {
    e.preventDefault();
});

// Validate data
function validarNombre(nombre) {
    if (nombre.trim() && nombre.length < 10) {
        arrayData.push(nombre)
        arrayValidation.push("nombre");
    } else {
        console.log("Error en el nombre");
    }
}

function validarApellido1(apellido1) {
    if (apellido1.trim() && apellido1.length < 10) {
        arrayData.push(apellido1)
        arrayValidation.push("apellido1");
    } else {
        console.log("Error en el apellido1");
    }
}

function validarApellido2(apellido2) {
    if (apellido2.trim() && apellido2.length < 10) {
        arrayData.push(apellido2)
        arrayValidation.push("apellido2");
    } else {
        console.log("Error en el apellido2");
    }
}

function validarContra(contra) {
    if (contra.trim() && contra.length < 10) {
        arrayData.push(contra)
        arrayValidation.push("contra");
    } else {
        console.log("Error en el contra");
    }
}

function showData(datos) {
    data = JSON.parse(localStorage.getItem(`${datos}`));
    content.style.display = 'block';
    btnBorrar.style.display = 'block';
    btnCerrar.style.display = 'block';
    const html = `<h3>${data[0]}</h3>
                    <h3>${data[1]}</h3>
                    <h3>${data[2]}</h3>`;
    content.innerHTML = html;
}

function verificarAcceso(passAcceso) {
    if (localStorage.length > 0 && localStorage.getItem(passAcceso)) {
        showData(passAcceso);
    } else {
        console.log("no existe");
    }
}

// Read form
window.document.addEventListener("change", (e) => {
    e.preventDefault();

    if (e.target.matches("#nombre"))
        validarNombre(e.target.value);

    if (e.target.matches("#apellido1"))
        validarApellido1(e.target.value);

    if (e.target.matches("#apellido2"))
        validarApellido2(e.target.value);

    if (e.target.matches("#password"))
        validarContra(e.target.value);

    if (e.target.matches("#passAcceso"))
        verificarAcceso(e.target.value);
});

// Save data
formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    let actual = localStorage.length;
    if (actual > 0 && arrayData.length == 4) {
        for (let i = 0; i < localStorage.length; i ++) {
            if(localStorage.key(i) != arrayData[3]) {
                localStorage.setItem(`${arrayData[3]}`, JSON.stringify(arrayData));
            } else {
                console.log('no repita contraseña');
                break;
            }
        }
    } else if (arrayData.length == 4) {
        localStorage.setItem(`${arrayData[3]}`, JSON.stringify(arrayData));
    } else {
        console.log(arrayData);
        console.log('ingrese bien los datos');
    }

    document.querySelector('#nombre').value = "";
    document.querySelector('#apellido1').value = "";
    document.querySelector('#apellido2').value = "";
    document.querySelector('#password').value = "";
    arrayData.splice(0, 4);
});

window.addEventListener("click", (e) => {

    if (e.target.matches(".cerrar")) {
        window.location.reload();
    }

    if (e.target.matches(".borrar")) {
        localStorage.removeItem(`${data[3]}`);
        content.innerHTML = "<h3>Los datos se han borrado exitosamente</h3>";
        btnBorrar.style.display = "none";
    }
});