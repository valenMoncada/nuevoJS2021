import { ctx } from "./app.js";

class Jugador {
    constructor(posX, posY, width, height, velocidad) {
        this.posX = posX;
        this.posY = posY;
        this.width = width;
        this.height = height;
        this.velocidad = velocidad;
    }

    dibujar() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.posX, this.posY, this.width, this.height)
    }

    update(direccion, deltaTime) {
        switch (direccion) {
            case "down":
                this.posY += this.velocidad * deltaTime;
                break;
            case "up":
                this.posY -= this.velocidad * deltaTime;
                break;
            case "downStop":
                this.posY += this.velocidad * 0;
                break;
            case "upStop":
                this.posY -= this.velocidad * 0;
                break;
        }
    }

    mover(deltaTime) {
        document.addEventListener("keydown", (e) => {
            if (e.key == "ArrowDown" && this.posY <= 400) {
                this.update("down", deltaTime);
            }

            if (e.key == "ArrowUp" && this.posY > 0) {
                this.update("up", deltaTime);
            }
        });

        document.addEventListener("keyup", (e) => {
            if (e.key == "ArrowDown") {
                this.update("downStop");
            }
            if (e.key == "ArrowUp") {
                this.update("upStop");
            }
        });
    }
}

export let jugador = new Jugador(20, 200, 20, 100, 0.03);