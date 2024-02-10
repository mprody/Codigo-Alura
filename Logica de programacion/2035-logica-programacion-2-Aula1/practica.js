function HolaMundo(){
    console.log("Hola Mundo!");
}

function HolaNombre(nombre){
    console.log(`Hola ${nombre}!`);
}

function numeroDoble(numero){
    let doble=numero*2;
    return console.log(doble);
}

function promedio(numero1,numero2,numero3){
    let numPromedio=(numero1*numero2*numero3)/3;
    return console.log(numPromedio);
}

function mayorQue(numero1,numero2){
    if(numero1>numero2){
        console.log(`El ${numero1} es mayor que ${numero2} `);
    }else{
        console.log(`El ${numero2} es mayor que ${numero1} `);
    }
}

function multiplicacion(numero){
    let resultado=numero*numero;
    return console.log(resultado);
}
HolaMundo();
HolaNombre("Mario");
numeroDoble(10);
promedio(3,3,3);
mayorQue(0,1);
multiplicacion(5);

