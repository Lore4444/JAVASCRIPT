//------------------------------------------------------------------------------------------------

/*12. Escribir una función flecha de JavaScript que reciba un argumento y retorne el tipo de
dato.*/

/*const mensaje = prompt("Ingrese un dato");

const tipoDeDato = (dato) => {
    const esNumero = !isNaN(parseFloat(dato.replace(",", "."))) && isFinite(dato.replace(",", "."));
    const esBooleano = dato === 'true' || dato === 'false';

    if (esNumero) {
        if (dato.includes(".") || dato.includes(",")) {
            alert("Tipo de dato: número decimal");
        } else {
            alert("Tipo de dato: número entero");
        }
    } else if (esBooleano) {
        alert("Tipo de dato: booleano");
    } else {
        alert("Tipo de dato: string");
    }
};

//console.log(typeof mensaje);

tipoDeDato(mensaje);*/

//------------------------------------------------------------------------------------------------

/*13. Crear un objeto persona, con las propiedades nombre, edad, sexo ('H' hombre, 'M' mujer,
'O' otro), peso y altura. A continuación, muestre las propiedades del objeto JavaScript.*/

/*let persona={
    nombre:"Lore",
    edad:42,
    sexo:"M",
    peso:50,
    altura:1.5,
}

alert(`NOMBRE: ${persona.nombre}
EDAD: ${persona.edad}
ALTURA: ${persona.altura}
SEXO: ${persona.sexo}
`);

console.log(persona);*/

//------------------------------------------------------------------------------------------------

/*14. Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.*/

/*function libro(isbn, titulo, autor, numPag){
    this.isbn = isbn;
    this.titulo = titulo;
    this.autor = autor;
    this.numPag = numPag;

}

function libroNuevo(){
    alert("Ingrese los datos del nuevo libro");

    let isbn = prompt("Ingrese un isbn");
    let titulo = prompt("Ingrese el titulo del libro");
    let autor = prompt("Ingrese el autor del libro");
    let numPag = prompt("Ingrese el numero de paginas del libro");

    let libro1 = new libro(isbn, titulo, autor, numPag);

    libros.push(libro1);
      
    mostrarLibro(libro1);
}

function mostrarLibro(libro1){

    let resultado = `Los datos del libro son:
    ISBN: ${libro1.isbn}
    TITULO: ${libro1.titulo}
    AUTOR: ${libro1.autor}
    NUM DE PAG: ${libro1.numPag}
    `
    alert(resultado);
}

var libros=[];

while (true){
    let continuar = confirm ("Deseas crear un nuevo libro");
    if(!continuar){
        break;
    }

    libroNuevo();
}

/*function mostrarLibros(){

/*for (const iterator of libros) {
    let a=iterator.titulo;
    alert(a);
}*/

/*function mostrarTodosLosLibros() {
    var resultado = "Lista de libros:\n\n";
  
    for (var i = 0; i < libros.length; i++) {
      resultado += `Libro ${i + 1}:\n`;
      resultado += `ISBN: ${libros[i].isbn}\n`;
      resultado += `TITULO: ${libros[i].titulo}\n`;
      resultado += `AUTOR: ${libros[i].autor}\n`;
      resultado += `NumPaginas: ${libros[i].numPag}\n\n`;
    }
  
    alert(resultado);
  }

mostrarTodosLosLibros();*/
//------------------------------------------------------------------------------------------------*/

/*15. Escribe un programa JavaScript para calcular el área y el perímetro de un objeto Círculo
con la propiedad radio. Nota: Cree dos métodos para calcular el área y el perímetro. El
radio del círculo lo proporcionará el usuario.*/

/*let radio = prompt("Ingrese el radio");

    let area = radio => Math.PI * radio**2;
    let perimetro =radio =>2 * Math.PI  * radio;

    alert(`El área de la circunferencia es: ${(area(radio).toFixed(2))}
El perímetro de la circunferencia es: ${(perimetro(radio).toFixed(2))}`);


//------------------------------------------------------------------------------------------------

/*16. Realizar un programa que rellene dos vectores al mismo tiempo, con 5 valores aleatorios
y los muestre por pantalla.*/

/*let vector1=[];
let vector2=[];

for (let index = 0; index < 5; index++) {
    vector1[index]=Math.floor(Math.random()*10);//floor para redondear 
    vector2[index]=Math.floor(Math.random()*10);
}

vector1.forEach(function(elemento1){
    console.log("los valores del vector 1 son: " + elemento1)
});
vector2.forEach(function(elemento2){
    console.log("los valores del vector 2 son: " + elemento2)
});


alert(`Vector 1: ${vector1}`);
alert(`Vector 2: ${vector2}`);

//------------------------------------------------------------------------------------------------

/*17. Realizar un programa que elimine los dos últimos elementos de un array. Mostrar el
resultado*/

/*function eliminarValor(){
    
    const eliminado = document.getElementById('eliminado');
    const inicial = document.getElementById('inicial');
    const array = [1,2,3,4,5,6,7];
    const nuevoArray = array.slice(0,array.length-2);
    inicial.textContent = 'El array original es: ' + array.join(', ');
    eliminado.textContent = 'El nuevo array es: ' + nuevoArray.join(', ');
}

//------------------------------------------------------------------------------------------------*/

/*18. A partir del siguiente array: var valores = [true, 5, false, "hola", "adios", 2]:
a) Determinar cual de los dos elementos de texto es mayor
b) Utilizando exclusivamente los dos valores booleanos del array, determinar los
operadores necesarios para obtener un resultado true y otro resultado false
c) Determinar el resultado de las cinco operaciones matemáticas realizadas con los
dos elementos numéricos*/

//var valores = [true, 5, false, "hola", "adios", 2];

/*function encontrarPalabraMasLarga(valores) {
    let frase = `${valores[3]} ${valores[4]}`
    const palabras = frase.split(' ');
    let palabraMasLarga = '';

    for (let palabra of palabras) {
        if (palabra.length > palabraMasLarga.length) {
            palabraMasLarga = palabra;
        }
    }

    return palabraMasLarga;
}

const palabraMasLarga = encontrarPalabraMasLarga(valores);
alert("Palabra más larga:"+ palabraMasLarga);
console.log("Palabra más larga:" + palabraMasLarga);*/

/*function booleano(valores){
    let true1 = valores[0];
    let false1 = valores[2];

    alert(true1 && false1);//false
    alert(true1 || false1);//true
    
}

booleano(valores);*/

/*let num= parseInt(valores[1]);
let num2=parseInt(valores[5]);
let suma = num + num2;
let multiplicacion = num * num2;
let division = num / num2;
let resta = num - num2;
let potencia = num ** num2;

alert(`Suma: ${suma} 
Resta: ${resta}
Division: ${division}
Multiplicacion: ${multiplicacion}
Potencia: ${potencia}`);*/

//------------------------------------------------------------------------------------------------

/*19. Realizar un programa en Java donde se creen dos arreglos: el primero será un arreglo A
de 50 números reales, y el segundo B, un arreglo de 20 números, también reales. El
programa deberá inicializar el arreglo A con números aleatorios y mostrarlo por pantalla.
Luego, el arreglo A se debe ordenar de menor a mayor y copiar los primeros 10 números
ordenados al arreglo B de 20 elementos, y rellenar los 10 últimos elementos con el valor
0.5. Mostrar los dos arreglos resultantes: el ordenado de 50 elementos y el combinado
de 20.*/

/*let arregloA=[];
for (let index = 0; index < 50; index++) {
    arregloA[index]=Math.floor(Math.random()*(100-(-100)) );//floor para redondear 
};

arregloA.sort(function(a,b){
    return a-b;
});

alert(`Arreglo A: ${arregloA}`);


let arreglo = arregloA.slice(0,10);
let arregloB= [...arreglo, ...new Array(10).fill(0.5)];//para rellenar los ultimos 10 lugares con un valor constante
alert(`Arreglo B: ${arregloB}`);*/

//------------------------------------------------------------------------------------------------

/*20. Realizar un programa que obtenga la siguiente matriz [[3], [6], [9], [12], [15]] y devuelve y
muestre el siguiente array [6, 9, 12, 15, 18].*/

// Definir la matriz original
/*const matrizOriginal = [[3], [6], [9], [12], [15]];

// Función para transformar la matriz
function transformarMatriz(matriz) {
  const nuevoArray = [];
  for (let i = 0; i < matriz.length; i++) {
    nuevoArray.push(matriz[i][0] + 3);
  }
  return nuevoArray;
}

// Obtener el nuevo array
const nuevoArray = transformarMatriz(matrizOriginal);

// Mostrar el nuevo array en la consola

alert(`El nuevo array es: ${nuevoArray}`)*/

//------------------------------------------------------------------------------------------------

/*21. Escribir un programa para obtener un array de las propiedades de un objeto Persona.
Las propiedades son nombre, edad, sexo ('H' hombre, 'M' mujer, 'O' otro), peso y altura.*/

/*let persona={
    nombre: "Chikis",
    edad: 12,
    sexo: "H",
    peso: 20,
    altura: 120,
}
 
 let propiedadesPersona = Object.keys(persona);

alert(`Las propiedades de la persona: ${Object.keys(persona)}`);// tambien se puede colocar solamente el nombre del array

/*const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.keys(object1));
  // Expected output: Array ["a", "b", "c"]*/

  //------------------------------------------------------------------------------------------------

/*22. Escribir un programa de JavaScript que al clickear un botón muestre un mensaje a
elección.*/

/*function mostrarMsg(){
    
    const msg = document.getElementById('msg');
    msg.textContent = 'Hola Mundo';
    alert("Un nuevo Mundo");
}
//--------------------otra forma
document.addEventListener("DOMContentLoaded",()=>{
    document.body.innerHTML = `<button>Clickea aquí</button>`; //body : cambia todo el body

    document.querySelector("button").addEventListener("click",()=>{
        document.body.innerHTML = `<h1> Hola Mundo!!</h1>`
    });
});*/

//------------------------------------------------------------------------------------------------

/*23. Resalte todas las palabras de más de 8 caracteres en el texto del párrafo

TEXTO = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus 
tempore doloremque pariatur quis explicabo quidem illum, veritatis nam id voluptas 
esse officia laboriosam iure ducimus ratione, voluptates harum commodi.