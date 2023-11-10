let isFrio = true;

if (isFrio) {
    console.log("abrigo");
} else {
    console.log("no abrigo");
}

let hora = 19;

if (hora >= 8 && hora <= 10) {
    console.log("cafe en oferta");
} else if (hora > 10 && hora <= 12) {
    console.log("Paila socio");
} else {
    console.log("Todo en oferta. YOLO");
}

//Condicional ternario -> simplifica condicional simple
hora >= 8 && hora <= 10 ? console.log("cafesito") : console.log("pailas");
hora > 10 && hora <= 12 ? console.log("oferta") : console.log("free");

//Switch case

let edad = 22;
switch (edad) {
    case 18:
        console.log("Champaña");
        break;
    case 19:
        console.log("Cerveza");
        break;
    case 20:
        console.log("Ron");
        break;
    default:
        console.log("Vodka");
}