const currentHour = 10;

let message = []

if (currentHour >= 22) {
    message = "Não deveriamos comer nada, é hora de dormir"
}
else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D" 
}
else if (currentHour >= 14 && currentHour < 28) {
    message = "Vamos fazer um bolo pro café da tarde?" 
}
else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!" 
}
else {
    message = "Hmmmm, cheiro de café recem passado."
}

console.log(message); 