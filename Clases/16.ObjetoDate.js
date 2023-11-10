//al usar fechar, instanciar en una variable el objeto date
let time = new Date();

//Día del mes -> numero
console.log(time.getDate());

//Día de la semana -> numero (comienza en lunes)
console.log(time.getDay());

//Numero del mes -> comienza en 0
console.log(time.getMonth());

//Año
console.log(time.getFullYear());

//Hora actual en primer parametro de la hora 
console.log(time.getHours());

//Minutos actuales 
console.log(time.getMinutes());

//Segundos actuales 
console.log(time.getSeconds());

//Milisegundos 
console.log(time.getMilliseconds());

//Fecha en formato string 10:07:19 GMT+0200(hora de verano de Europa Central)
console.log(time.toString());

//Fecha en string wed Jun 02 2021
console.log(time.toDateString());

//time to local string  2/6/2021 11:33:10
console.log(time.toLocaleString());

//Convierte time a string la hora usando la actual especificación local 11:33:53
console.log(time.toLocaleTimeString());

//Convierte fecha a string usando la espeficicacion local 2/6/2021
console.log(time.toLocaleDateString());

//Coge la diferencia en minutos entre el tiempo local de la computadora y las coordenadas universales(UTC)
console.log(time.getTimezoneOffset());

//Coge el dia del mes usando las coordenadas universales(UTC)
console.log(time.getUTCDate());

//Coge las horas valor en un objeto time usando las coordenadas de tiempo
console.log(time.getUTCHours());

const hora = document.createElement('h1')
document.body.appendChild(hora)

hora.textContent = 'La fecha de hoy es' + time.getDate() + '/' + (time.getMonth() + 1) + '/' + time.getFullYear();