const btnStart = document.getElementById('btn-grabar');
const btnStop = document.getElementById('btn-parar');

let rec = window.webkitSpeechRecognition || window.SpeechRecognition;

let recognition = new rec();

recognition.lang = "es-Es";
recognition.continuous = true;

// Results
const bd = document.querySelector('body');

const pantalla = function (frase) {
    let col;

    //coloca según color
    switch (frase) {
        case "rojo":
            col = "red";
            break;
        case "verde":
            col = "green";
            break;
        case "amarillo":
            col = "yellow";
            break;
        case "negro":
            col = "black";
            break;
        default:
            col = "blue";
    }

    localStorage.setItem("colorActual", col);

    bd.style.backgroundColor = col;
    bd.style.width = window.innerWidth;
    bd.style.height = window.innerHeight;
}

window.addEventListener('DOMContentLoaded', () => {
    let colorStorage = localStorage.getItem("colorActual");

    bd.style.backgroundColor = colorStorage;
    bd.style.width = window.innerWidth;
    bd.style.height = window.innerHeight;
});

// Event
recognition.onstart = function () {
    console.log("Micro working");
}

recognition.onresult = function (e) {
    const results = e.results;
    console.log(results);
    let frase = results[results.length - 1][0].transcript;
    frase = frase.replace(/\s/g, '');
    console.log(frase);
    pantalla(frase);
}

btnStart.addEventListener('click', () => {
    recognition.start();
});

btnStop.addEventListener('click', () => {
    recognition.abort();
});

