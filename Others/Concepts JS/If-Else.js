//OPERADORES TERNARIOS ////////////////////////////////////////////////////////////

var a = 1
var b = 1
var isDead = (a==b) ? "EsIgual" : 22
console.log(isDead)
var isDead = (a!=b) ? "EsIgual" : 22
console.log(isDead)

var x = 1000
var tern = (x == 1000) ? "Bingo!" : "No es el numero"
console.log(tern)


// IF ELSE ////////////////////////////////////////////////////////////

var hsmañana = [1,2,3,4,5,6,7,8,9,10,11]
var hstarde =  [12,13,14,15,16,17,18,19,20,21,22,23,24]
var hora = 3
if (hsmañana.includes(hora)){
    console.log("Es la Mañana")
}else if (hstarde.includes(hora)){
    console.log("Es la tarde")
}else {
    console.log("No es un horario valido")
}