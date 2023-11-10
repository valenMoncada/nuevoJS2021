/*
Json: Array de objetos nativo de javascript
JavaScript Object Notation

Fetch -> peticiones http y cargar archivos de carpetas
*/
function cargarArchivo() {
    fetch('./26.JSON.json')
        .then(res => res.json())
        .then(res => console.log(res));
}

cargarArchivo();