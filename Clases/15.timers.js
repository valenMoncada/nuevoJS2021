//setTimeout --> al pasar x tiempo, pasa algo

const bd = document.querySelector("body");

let retardo = setTimeout(() => {
    bd.style.background = "green";
    clearTimeout(retardo);
    console.log("Clean");
}, 10000)

//setInterval --> Se sigue ejecutando cada cierto tiempo
let ct = 0;
let newContador = setInterval(() => {
    ct > 10 ? clearInterval() : console.log(ct++);
}, 1000);

//window.requestAnimationFrame -> animaciones, frames por segundo
function holaMundo() {
    let saludo = window.requestAnimationFrame(holaMundo); //Se repite muchas veces por segundo
    console.log("Holi");
    saludo > 1000 ? window.cancelAnimationFrame(saludo) : null;
}
holaMundo(); //Es necesario para iniciar el animationFrame