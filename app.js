let botonPiedra = document.querySelector('.piedra')
let botonPapel = document.querySelector('.papel')
let botonTijera = document.querySelector('.tijera')

let manoUsuario = document.querySelector('.mano-usuaria')
let manoCompu =  document.querySelector('.mano-computadora')

let puntajeUsuario = document.querySelector('.puntaje-usuaria p')
let puntajeComputadora = document.querySelector('.puntaje-computadora p')

let labelResultado = document.querySelector('.resultado')

let tablero = document.querySelector('.tablero')

let eleccionUsuario = ""
let eleccionComputador = ""

let contadorUsuario = 0
let contadorComputador = 0

Swal.fire(
    'Jugamos?',
    'Gana el primero que tenga 3 puntos',
    'success'
)

const eleccionComputadora = () =>{
    let opcionAlzar = Math.floor(Math.random()*3);

    //Opcion piedra
    if (opcionAlzar == 0) {
        manoCompu.src = "assets/piedra_computadora.png";
        eleccionComputador = "piedra";
    }
    else if (opcionAlzar == 1){
        manoCompu.src = "assets/papel_computadora.png";
        eleccionComputador = "papel";
    }
    else{
        manoCompu.src = "assets/tijera_computadora.png";
        eleccionComputador = "tijera";
    }
};

const resultado = () =>{
    if (eleccionUsuario == "piedra") {
        if (eleccionComputador == "piedra") {
            labelResultado.textContent = "Empate";
        };
        if (eleccionComputador == "papel") {
            labelResultado.textContent = "Perdio";
            contadorComputador ++;
            puntajeComputadora.textContent = contadorComputador;
            ganador(contadorUsuario,contadorComputador)
        };
        if (eleccionComputador == "tijera") {
            labelResultado.textContent = "Gano";
            contadorUsuario ++;
            puntajeUsuario.textContent = contadorUsuario;
            ganador(contadorUsuario,contadorComputador)
        };
    };
    if (eleccionUsuario == "papel") {
        if (eleccionComputador == "piedra") {
            labelResultado.textContent = "Gano";
            contadorUsuario ++;
            puntajeUsuario.textContent = contadorUsuario;
            ganador(contadorUsuario,contadorComputador)
        };
        if (eleccionComputador == "papel") {
            labelResultado.textContent = "Empate";
        };
        if (eleccionComputador == "tijera") {
            labelResultado.textContent = "Perdio";
            contadorComputador ++;
            puntajeComputadora.textContent = contadorComputador;
            ganador(contadorUsuario,contadorComputador)
        };
    };
    if (eleccionUsuario == "tijera") {
        if (eleccionComputador == "piedra") {
            labelResultado.textContent = "Perdio";
            contadorComputador ++;
            puntajeComputadora.textContent = contadorComputador;
            ganador(contadorUsuario,contadorComputador)
        };
        if (eleccionComputador == "papel") {
            labelResultado.textContent = "Gano";
            contadorUsuario ++;
            puntajeUsuario.textContent = contadorUsuario;
            ganador(contadorUsuario,contadorComputador)
        };
        if (eleccionComputador == "tijera") {
            labelResultado.textContent = "Empate";
        };
    };
    
};

function ganador(usu, com) {
    if (usu == 3) {
        Swal.fire(
            'Gano!'
        )  
        contadorUsuario = 0
        puntajeUsuario.textContent = contadorUsuario;
        contadorComputador = 0
        puntajeComputadora.textContent = contadorComputador;
    };
    if (com == 3) {
        Swal.fire(
            'Perdio!'
        )
        contadorUsuario = 0
        puntajeUsuario.textContent = contadorUsuario;
        contadorComputador = 0
        puntajeComputadora.textContent = contadorComputador;
    };
};

botonPiedra.onclick = () => {
    manoUsuario.src = "assets/piedra_user.png";
    manoCompu.src = "assets/piedra_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout(() =>{
        eleccionUsuario = "piedra";
        manoUsuario.src = "assets/piedra_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonPapel.onclick = () => {
    manoUsuario.src = "assets/papel_user.png";
    manoCompu.src = "assets/papel_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout(() =>{
        eleccionUsuario = "papel";
        manoUsuario.src = "assets/papel_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};

botonTijera.onclick = () => {
    manoUsuario.src = "assets/tijera_user.png";
    manoCompu.src = "assets/tijera_computadora.png";
    labelResultado.textContent = '...';
    tablero.classList.add("jugando");
    setTimeout(() =>{
        eleccionUsuario = "tijera";
        manoUsuario.src = "assets/tijera_user.png";
        eleccionComputadora();
        resultado();
        tablero.classList.remove("jugando");
    }, 200);
};


