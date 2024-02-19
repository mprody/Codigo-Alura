/*function HolaMundo(){
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

//Segundas practicas

function indiceMasaCorporal(altura,peso){
    return imc=peso/Math.pow(altura,2);
}
function factorial(numero){
    let resultado=1;
    for(let i=1;i<=numero;i++){
        resultado=resultado*i;
    }
    
    return resultado;
}

function conversion(dolar){
    return reales=dolar*4.80;

}

function perimetro(altura,anchura){
    return peri=altura+altura+anchura+anchura;
}


console.log(indiceMasaCorporal(1.70,130));
console.log("El factorial del numero ingresado es:",factorial(6));
console.log("La conversion del dolar a real es de:",conversion(120));
console.log("El perimetro del rectangulo es de:",perimetro(4,6),"cm");
*/
//Ejercicio 2
let lenguajesProgramacion =["Javascript","C","C++","Kotlin","Python"];
console.log(lenguajesProgramacion);
//Ejercicio 3
lenguajesProgramacion.push("Java","Ruby","GoLang");
console.log(lenguajesProgramacion);
//Ejercicio 4
function mostrarArray(){
    return console.log("Estoy utilizando una funcion para mostrar el arreglo",lenguajesProgramacion);
}
mostrarArray();
//Ejercicio 5

function arrayInverso(){
    return console.log("Este es el array dado vuelta ",arrayInverso=lenguajesProgramacion.reverse());
}
arrayInverso();
//Ejercicio 6
function promedioArreglo(){
    let numeros=[2,3,3,5,7,10];
    let suma=0;
    let total=0;
    for(let i=0; i < numeros.length ;i++){
        suma+=numeros[i];
    }
    return total=suma/numeros.length;
   
}
console.log("El promedio de los elementos del arreglo es: ",promedioArreglo());
//Ejercicio 7
function MenorMaximoArray(){
    let arreglo=[1,2,3];
    let total=0;
    let maximo=Math.max(...arreglo);
    let minimo=Math.min(...arreglo);
    
    console.log("Este es el numero mas grande del arreglo",maximo);
    console.log("Este es el numero mas pequeño del arreglo",minimo);
}

console.log(MenorMaximoArray());
//Ejercicio 8
function sumaArray(){
    let arreglo=[1,2,3,4,5];
    let suma=0;
    for(let i=0; i < arreglo.length ; i++){
        suma+=arreglo[i];
    }
    return suma;
}

console.log("La suma de los elementos del arreglo es de: ",sumaArray())

//Ejercicio 9
function posicionArreglo(posicion){
    let arreglo=[1,2,3,4];
    let valor=0;
    valor=arreglo[posicion];

    return valor;
}
console.log("La posicion seleccionada tiene el valor de ",posicionArreglo(3));
//Ejercicio 10
function sumaArreglos(){
    let arreglo1=[1,2,3];
    let arreglo2=[4,5,6];
    let suma=0;
    let suma1=0;
    let total=0;

    for (let i =0; i<arreglo1.length;i++){
        suma+=arreglo1[i];
    }
    for(let e=0;e<arreglo2.length;e++){
        suma1+=arreglo2[e];
    }
    return total=suma+suma1;
}
console.log("La suma de los arreglos es de ",sumaArreglos());
//Ejercicio 11
function elevarCuadrado(){
    let arreglo1=[2,3,4,5,6,7];
    let arreglo2=arreglo1.map(elemento=>elemento**2);

    console.log(`Arreglo 1 es :${arreglo1} elevado al cuadrado es ${arreglo2}`);
}

console.log(elevarCuadrado());
