let numeroSecreto=0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;


console.log(numeroSecreto);

//Generalizamos el llamado de los elementos para luego editarlos en JS
function asignarTextoElemento(elemento, texto){ 
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

//Entramos en el juego del número secreto
//Cuando se acierta
function verificarIntento(){ 
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    //Cuando no se acierta
    //Condicionales para hayar el número secreto
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');//Se habilita el botón NUEVO JUEGO
    }else{
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
    }
    intentos++;
    limpiarCaja();
    return;
}

//Hacer que la caja quede limpia cuando se hace un nuevo intento
function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}


//Generación y comprobación del número secreto
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    }else{
        //Si el número generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

//Edición de los elementos de HTML en JS y condiciones iniciales
function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos = 1;
}

//Método para reiniciar el juego
function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números
    //Generar el número de intentos
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();