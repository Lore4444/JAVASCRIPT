// EJERCICIOS JAVASCRIPT
/*1. Escribir un algoritmo en el cual se consulte al usuario que ingrese ¿cómo está el día de
hoy? (soleado, nublado, lloviendo). A continuación, mostrar por pantalla un mensaje que
indique “El día de hoy está ...”, completando el mensaje con el dato que ingresó el usuario.*/

/*let clima = prompt ("¿cómo está el día de hoy? (soleado, nublado, lloviendo)")
alert("el día de hoy está "+clima);*/

/*class estadoDia{
    static mostrarEstadoDia(){
        //Obtener el valor ingresado por el usuario
        const estadoDia=document.getElementById('estadoDiaInput').Value;

        //Mostrar el mensaje con el estado ingresado por el usuario
        switch(estadoDia.toLowerCase()){
            case 'soleado':
                alert('El dia de hoy esta soleado');
                break;
            case 'nublado':
                alert('El dia de hoy esta nublado');
                break;
            case 'lloviendo':
                alert('El dia de hoy esta lloviendo');
                break;
            default:
                alert('opcion no valida');
                break;

        }
    }
}

function mostrarEstadoDia(){
    estadoDia.mostrarEstadoDia();
}*/

//------------------------------------------------------------------------------------------------

/*2. Conocido el número en matemática PI π, pedir al usuario que ingrese el valor del radio
 de una circunferencia y calcular y mostrar por pantalla el área y perímetro. Recuerde que
 para calcular el área y el perímetro se utilizan las siguientes fórmulas:
 area = PI * radio^2
 perimetro = 2 * PI * radio*/

/*let rad= prompt("Ingrese el valor del radio")
 alert("el área es igual a "+ Math.PI*(rad**2))
 alert("el perímetro es igual a "+2*Math.PI*rad)*/

 //------------------------------------------------------------------------------------------------

/*3. Escriba un programa en donde se pida la edad del usuario. Si el usuario es mayor de
edad se debe mostrar un mensaje indicándolo.*/

/*let edad = prompt("Ingrese su edad")
alert (edad>=18? "es MAYOR de edad":"es MENOR de edad");*/

//------------------------------------------------------------------------------------------------

/* 4. Realiza un programa que sólo permita introducir los caracteres ‘S’ y ‘N’. Si el usuario
ingresa alguno de esos dos caracteres se deberá de imprimir un mensaje por pantalla
que diga “CORRECTO”, en caso contrario, se deberá imprimir “INCORRECTO”.*/

/*let answer = prompt("Ingrese un caracter S/N")
answer=answer.toUpperCase();
if(answer=="S"||answer=="N"){
    alert("CORRECTO")
}else{
    alert("INCORRECTO")
};*/

//------------------------------------------------------------------------------------------------

/* 5.Construir un programa que simule un menú de opciones para realizar las cuatro
operaciones aritméticas básicas (suma, resta, multiplicación y división) con dos valores
numéricos enteros. El usuario, además, debe especificar la operación con el primer
carácter de la operación que desea realizar: ‘S' o ‘s’ para la suma, ‘R’ o ‘r’ para la resta, ‘M’
o ‘m’ para la multiplicación y ‘D’ o ‘d’ para la división.*/

/*let n1 =parseInt(prompt("Ingrese el primer número entero"))
let n2 =parseInt( prompt("Ingrese el segundo número entero"))
let op = prompt("¿Qué operación desea realizar? (S/R/M/D)")
op = op.toUpperCase();
switch (op) {
    case "S": alert(n1 + n2)
        break;
    case "R": alert(n1 - n2);
        break;
    case "M": alert(n1 * n2);
        break;
    case "D": alert(n1 / n2);
        break;
}*/

//------------------------------------------------------------------------------------------------

/*6. Realizar un programa que, dado un número entero, visualice en pantalla si es par o impar.
En caso de que el valor ingresado sea 0, se debe mostrar “el número no es par ni impar”.*/

//let n=prompt("Ingrese un número entero")
//alert(n==0? "El numero no es PAR ni IMPAR": (n%2==0? "El numero es PAR" : "El numero es IMPAR"));

//------------------------------------------------------------------------------------------------

/*7. Escriba un programa en el cual se ingrese un valor límite positivo, y a continuación
solicite números al usuario hasta que la suma de los números introducidos supere el
límite inicial.*/

/*let lim= prompt("Ingrese el valor límite positivo")
let sum=0, num;
do {
    num= parseInt(prompt("Ingrese un número para sumar"));
    sum+=num
    alert("La suma es "+ sum);
} while (sum<lim);
alert("Ha alcanzado el límite");*/

//------------------------------------------------------------------------------------------------

/*8. Escribir un programa que lea números enteros hasta teclear 0 (cero). Al finalizar el
programa se debe mostrar el máximo número ingresado, el mínimo, y el promedio de
todos ellos.*/
/*let arreglo= [];
let sum=0, num;
do {
    num = parseInt(prompt("Ingrese un numero y finalice con 0"));
    if (num !== 0) {
        arreglo.push(num);
        sum += num;
    }
} while (num !== 0);
alert("El numero maximo es " + Math.max(...arreglo) 
+ "\nEl numero minimo es " + Math.min(...arreglo) 
+ "\nEl promedio de los numeros ingresados es " + sum/arreglo.length);*/

//------------------------------------------------------------------------------------------------

/*9. Realizar un programa que pida una frase y el programa deberá mostrar la frase con un
espacio entre cada letra. La frase se mostrara así: H o l a. Nota: recordar el
funcionamiento de la función Substring().*/

/*let frase = prompt("Ingrese una frase");
let letter;
let frase2=""
for (let i = 0; i < frase.length; i++) {
   letter=frase.substring(i,i+1);    
   frase2=frase2.concat(letter.concat(" "));
   //frase2=frase2+letter+" ";
}
alert("La frase con espacios es:\n"+ frase2);*/

//------------------------------------------------------------------------------------------------

//10. Escribir una función flecha que reciba una palabra y la devuelva al revés.

/*let word=prompt("Ingrese una palabra");
let inv = frase => frase.split("").reverse().join("");
alert("La frase invertida es " + inv(word));*/

//------------------------------------------------------------------------------------------------

/*11. Escribir una función que reciba un String y devuelva la palabra más larga.
String Ejemplo: “Guia de JavaScript”
Resultado esperado : “JavaScript”*/

/*function encontrarPalabraMasLarga(frase) {
    const palabras = frase.split(' ');
    let palabraMasLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

const inputFrase = prompt("Ingrese una frase");
const palabraMasLarga = encontrarPalabraMasLarga(inputFrase);
alert("Palabra más larga:"+ palabraMasLarga);
console.log("Palabra más larga:", palabraMasLarga);

//------------------------------------------------------------------------------------------------*/

