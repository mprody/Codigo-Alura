let numeroSecreto=0;
let intentos=1;
let listaNumerosSorteados =[];
let numeroMaximo=10;

function AsignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;    
    return;
}

function verificarIntento(){
    let numeroUsuario =parseInt(document.getElementById("valorUsuario").value);
    
    if(numeroUsuario === numeroSecreto){
        AsignarTextoElemento("p",`Adivinaste el numero en ${intentos} ${(intentos ===1)? "vez":"veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        //Aqui el usuario no adivino
        if(numeroUsuario > numeroSecreto){
            AsignarTextoElemento("p","El numero secreto es menor");
        }else{
            AsignarTextoElemento("p","El numero secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    } 
    return;
}

function limpiarCaja(){
    document.getElementById("valorUsuario").value="";
    
}


function numeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;


    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if(listaNumerosSorteados.length == numeroMaximo){
        AsignarTextoElemento("p","Ya se asignaron todos los numeros posibles!");
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return numeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    return;
}


function condicionesIniciales(){
    AsignarTextoElemento("h1","Juego del numero secreto");
    AsignarTextoElemento("p",`Indique un numero del 1 al ${numeroMaximo}`);
    numeroSecreto=numeroAleatorio();
    intentos=1;
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}

condicionesIniciales();


