let frase = "Mi perro es un pastor aleman, es lindo";
let frase2 = ", y es muy inteligente";

//anchor -> return texto en enlace
console.log(frase.anchor());

//big -> return texto en formato más grande
document.write(frase);
document.write(frase.big());

//bold -> return texto en bold
document.write(frase.bold());

//charAt -> return caracter que coincida con index. default -> 0
document.write(frase.charAt());
document.write(frase.charAt(3));

//charCodeAt -> return unicode que coincida con index. default 0
document.write(frase.charCodeAt())
document.write(frase.charCodeAt(3));

//concat -> concaneta o une string y pasa variable
document.write(frase.concat(frase2));
document.write(frase.concat(`  griego ${frase2}`));

//endsWith -> return si el string ends with los parametros
document.write(frase.endsWith("hola"));
document.write(frase.endsWith("aleman"));

//fontColor -> cambiar color texto string
document.write(frase.fontcolor('red'));

//fontsize -> tamaño del texto con número en argumento
document.write(frase.fontsize(1));

//includes -> boolean si el caracteres o string está incluido
document.write(frase.includes("perro"));

//indexOf -> si existe el caracter/string, retorna index o -1
document.write(frase.indexOf("perro"));

//italics -> convierte texto a cursiva
document.write(frase.italics());

//lastIndexOf -> ultima pos del string/caracter del argumento o -1
document.write(frase.lastIndexOf("es"));

//length (prop) -> longitud incluyendo espacios
document.write(frase2.length);

//link -> return enlace y da el attr href 
document.write(frase.link("#"));

//match -> return coincidencia si existe o null
document.write(frase.match("es"));
document.write(frase.match("nope"));

//repeat -> return repite el string las veces del argumento
document.write(frase.repeat(3));

/*
replace -> reemplaza parte del string por otro
1 index -> lo que se quiere reemplazar
2 index -> el reemplazo
*/
document.write(frase.replace("pastor aleman", "boyero australiano"));

//slice -> devuelve porción de string que indiquemos entre 2 números. 2 index no incluido
document.write(frase.slice(0, 4));

//small -> string pequeño
document.write(frase2.small());

//split -> división según se indique y la cantidad que requiera
document.write(frase.split(" ", 4));

//startsWidth -> boolean si empieza por letra
document.write(frase.startsWith("M"));

//sub -> return string as subtitle (por debajo de la linea normal)
document.write(frase.sub());

//substring -> return substring entre 2 indices, no incluye el 2 index
document.write(frase.substring(4, 10));

//toLocaleLowerCase -> return string en minuscula solo en local
document.write(frase.toLocaleLowerCase());

//toLocalUpperCase -> mayuscula en local
document.write(frase.toLocaleUpperCase());

//toLowerCase -> minuscula en todos los sitios, no solo local
document.write(frase.toLowerCase());

//toUpperCase -> mayuscula en todos los sitios
document.write(frase.toUpperCase());