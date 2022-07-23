/*
1. Dado un string de dos palabras realizar una funcion que devuelva la palabra mas larga

input: 'Programacion JavaScript'

output:'Programacion'
*/

//forma 1
function findLongestWord(str){
    let words = str.split(" ");
    let maxSize = Math.max(...words.map(word => word.length))
    return words.filter(word => word.length === maxSize);
}

    //console.log(findLongestWord(prompt("digite una frase")))

//forma 2
function longestWord(word1, word2){
    word1.length > word2.length ? alert("La primera palabra es mas grande..." + word1):alert("La segunda palabra es mas grande..." + word2)
}
longestWord(prompt("Proporciona la primera palabra: "),prompt("Proporciona la segunda palabra: "))


/*
2. crear un programa que permita detectar si una frase finaliza con punto, 
dicho programa debe estar encapsulada en una funcion y recibir el o los parametros necesarios.

frase. 'Hola soy un desarrollador FullStack.'

output: 'finalizó en punto'

frase. 'Hola soy un desarrollador FullStack'

output: 'No finalizó en punto D:'
*/
//forma 1
 let phrase = prompt("Digita una frase")
    if(phrase.endsWith(".")){
        console.log('finalizó en punto')
    }else{
        console.log('No finalizó en punto D:')
    }

//forma 2

const getPrase = (phrase) => {
    let search =  phrase.charAt(phrase.length-1);
    if(search === "."){
        console.log('finalizó en punto')
    }else{
        console.log('No finalizó en punto D:')
    }
}

//getPrase(prompt("digita una frase")) // solo encuentra 2 veces la palabra

//forma 3
function endDot (frase1) {
    frase1.charAt(frase1.length-1) === "." ? alert('finalizó en punto') : alert('No finalizó en punto D:')
}

/*
3. Crear un programa que le permita al usuario retornar el numero de coincidencias de una palabra 
en una frase que el mismo usuario ingrese.

input:
palabra a buscar 'Hola'
frase 'Hola me llamo Jonathan Reyes, Hola otra vez'

output: 'el numero de coincidencias de ${palabra a buscar} es de 2 veces :D'
*/
//forma 1
var prhasee = "Hola, me llamo Jonathan Reyes, Hola otra vez"

function getCoincidencias(frase){
    let palabra = prompt("palabra a buscar")
    var re = new RegExp(palabra, "gi"); // lo combierte asi /pattern/modifiers
    console.log(re)
    let number = frase.match(re)
    console.log(number)
    console.log(number.length)
    if(number.length === undefined){
        console.log("error")
    }else{
        console.log("el numero de coincidencias de "+palabra+" es de "+number.length+" veces :D")
    }
} 

//getCoincidencias(prhasee)

// forma 2

const lookforWord = ( word, string ) => {
stringSplitted = string.split(" ")
let a = stringSplitted.reduce((accum, word1)=>{
    if(word1 === word){
        console.log(word)
        accum += 1
    }
    return accum
},0)
return console.log("La palabra "+ word +" se repite " +a)
}
word = "hola"
string = "hola me llamo Jonathan Reyes, hola otra vez hola y hola otra vez hola"

//console.log(lookforWord(word, string))

//forma 3

function getword(){
    let num = 0
    let frase = prompt("Ingrese una frase")
    let word = prompt("Ingresa la palabra para buscar coincidencias: ")
    let wordArray = word.split(" ")
    let fraseArray = frase.split(" ")
    let searchWord = fraseArray.forEach((item) => item === word ? num += 1 : null)
    console.log(num)
}
//intentar con filter

getword()

//forma 4
function coincidenceWord ( word1, frase2 ) {
let contador = 0
frase2.forEach( item => { // filter terneario con null y espanglish
    if(item === word1){
        contador = contador + 1
    }
    alert( 'hay '+contador+' veces de palabras en la frase...' )
});
}

coincidenceWord(prompt('proporciona una frase a buscar'), frase = prompt('proporciona una frase').split(' '))

/*
4. Crear un programa que le permita al ususario extraer una subcadena de una frase dada.

input:
cadena a extraer: 'desarrollador'
frase: 'soy un desarrollador FullStack´

output; 'desarrollador'

*/

//forma 1 (pueda manejar diferentes casos, si la palabra no esta o si esta 2 veces que haria.
//  Que el usuario reciva el primero y despues el segundo y validarlo)
var str = "soy un desarrollador FullStack"
var extraerStr = str.match(/desarrollador/gi);
console.log(extraerStr)

//forma 2 (falta camel case, escri}bir en ingles, pasarlo a una funcion)
let frase = prompt("Escriba una frase")
let buscar_palabra = prompt("que palabra desea buscar dentro de la frase anterior")
let muestra_palabra = ""
if(muestra_palabra = frase.includes(buscar_palabra)) {
    alert("Palabra "+ buscar_palabra +" encontrada")
}else{
    alert("palabra no encontrada")
}

/*
5. crear un programa que permita comnparar dos palabras dadas por el usuario y determinar si son iguales.

inputs:
palabra1: 'hola'
palabra2: 'hola'

output: 'Son iguales :D'

inputs:
palabra1: 'hola'
palabra2: 'hi'

output: 'No son iguales D:'

*/

const ejercicio5= (word1, word2 ) => {
    console.log(word1)
    console.log(word2)
    if(word1.toUpperCase() === word2.toUpperCase()){
        console.log('Son iguales :D')
    }else{
        console.log('No son iguales D:')
    }
}

ejercicio5("hola","Hola")
ejercicio5("hola","adios")

/*

7. Realizar un programa que permita a una cadena de texto mostrar el signo '-' entre cada caracter.

inputs:
cadena: 'hola soy un desarrollador'

output: 'h-o-l-a- -s-o-y- -u-n- -d-e-s-a-r-r-o-l-l-a-d-o-r'
*/

//forma 1
const cadena = 'hola soy un desarrollador'

let suma = ""
for(let i = 0 ; i < cadena.length; i++ ){
//console.log(cadena.charAt(i))
suma = suma + cadena.charAt(i) + "-"
}
console.log(suma)

//forma 2
var frase0 = prompt("ingresa una frase")
console.log( frase0.replace(/\s/g, '').split('').join('-') )

/*
 9. crear un programa que devuelva la cantidad de vocales que tenga una frase dada por un usuario.
 
 input:
 cadena: 'soy un desarrollador'

 output. 'La cadena tiene 8 vocales'
 */

console.log(cadena.replace(/ a|e|i|o|u/gi,))

 /*
 10. crear un programa que permita devolver una cadena de texto de fdorma inversa a la que el usuario lo ingresa.

inputs:
cadena 'Hola'

output: 'aloH'
*/

let dato = prompt("digita una frase")

console.log(dato.split().reverse().join())