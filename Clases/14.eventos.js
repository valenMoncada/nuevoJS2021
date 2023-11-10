/*
onblur(): se pierde el foco. FORM
onchange(): al modificar el valor del componente. FORM
onbeforeunload(): se lanza al intentar cerrar una ventana.
onclick(): al hacer clic en un elemento.
ondblclick(): al hacer doble click.
onerror(): si se produce un error al cargar la página web o una imagen.
onfocus(): cuando un componente obtiene el foco. FORM
onkeydown(): al pulsar cualquier tecla.
onkeypress(): al pulsar una tecla correspondiente a un carácter.
onkeyup(): al leventar cualquier una tecla.
onload(): se produce al terminar de cargarse la página web o una imagen.
onmousedown(): al presionar un botón del ratón.
onmousemove(): se ha movido el ratón.
onmouseout(): el cursor del ratón sale del área ocupada por un elemento.
onmouseover(): el cursor del ratón entra en el área ocupada por un elemento.
onmouseup(): al dejar de presionar un botón del ratón.
onresize(): al redimensionar una ventana o frame.
onselect(): cuando se selecciona un texto.
onunload(): al salir de la página web.

something.addEventListener('eventoSinOn',...)
*/

const btn = document.querySelector("button");
const bd = document.querySelector("body");

function pulsar() {
    alert('Has pulsado correctamente');
}

window.addEventListener('resize', (e) => {
    bd.style.backgroundColor = 'green'
    bd.style.width = '100%'
    bd.style.height = '1000px'
});

window.addEventListener("resize", pulsar);