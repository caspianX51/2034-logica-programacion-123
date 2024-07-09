//Variables
let dificultad = parseInt(prompt('Decide la dificultad del juego. El numero secreto estará entre 1 y :'))
let numeroSecreto = Math.floor(Math.random() * dificultad) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximoIntentos = 5;
console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre 1 y ${dificultad} por favor:`));

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${(intentos > 1) ? "veces" : "vez"}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos++
        //Se añade un numero maximo de intentos
        if (intentos > maximoIntentos) {
            alert(`Lo siento haz llegado al numero maximo de ${maximoIntentos} intentos`)
            break;
        }
    }
}
