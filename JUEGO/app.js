import { jugador } from "./jugador.js";
import { pelota } from "./pelota.js";

const canvas = document.querySelector("#juego");
//el export no es del todo necesario siempre, pero como lo usaré en jugador.js, lo necesito
export const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 500;

const body = document.querySelector("body");
const container = document.querySelector(".container");

const perfectFrameTime = 1000/60;
let deltaTime = 0;
let lastTimestamp = 0;

function start() {
    requestAnimationFrame(animate);

}

function animate (timestamp) {
    requestAnimationFrame(animate);
    deltaTime = (timestamp - lastTimestamp) / perfectFrameTime;
    lastTimestamp = timestamp

    canvas.width = 800;
    canvas.height = 500;

    jugador.dibujar();
    jugador.mover(deltaTime);

    pelota.dibujar();
    pelota.mover(deltaTime);
    pelota.colisiones();
    pelota.renderizarMarcador();
}

//animate();
start();
