let numeroSecreto=numeroAleatorio();
let intentos=1;
function AsignarTextoElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;    
    return;
}


function numeroAleatorio(){
    return numAleatorio=Math.floor(Math.random()*10)+1;
   
}
console.log(numeroSecreto);

function verificarIntento(){
    let numeroUsuario =parseInt(document.getElementById("valorUsuario").value);
    console.log(intentos);
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
AsignarTextoElemento("h1","Juego del numero secreto");
AsignarTextoElemento("p","Indique un numero del 1 al 10");


