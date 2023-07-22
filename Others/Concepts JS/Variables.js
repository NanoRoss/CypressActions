var variable = "Mariano"
var variable2 = 10
var variable3 = true
var name = "mary"
var unde

console.log(variable,variable2,variable3,variable2+variable3,name,unde);


var jugador = { 
    'username': 'Nano',  
    'score': 43,
    'hours': 13,
    "proffessional": true,
    "friends":['Agus','Bauti']
}

console.log(jugador)
console.log(jugador.score)
console.log(jugador.friends[1])


var num1 = 10
var num2 = "10"
console.log(num1==num2)  // Value
console.log(num1===num2) // Value+DataType
console.log(num1!=num2)  // !Value
console.log(num1!==num2) // !Value+DataType


// VAR/LET/CONST ////////////////////////////////////////////////////////////

var name1 = "Nano1"          
let name2 = "Nano2"         
const name3 = "Nano3"           

// var: Permite declarar variables disponibles en todos los ámbitos y que pueden ser reasignadas y redeclaradas.
// let: Permite declarar variables limitadas al ámbito de bloque en el que se declaran y que pueden ser reasignadas, pero no redeclaradas.
// const: Permite declarar variables limitadas al ámbito de bloque en el que se declaran y que no pueden ser reasignadas ni redeclaradas.



// Template literals ////////////////////////////////////////////////////////////  Para manejar Strings de forma mas facil.       `


var name = "Mariano"

console.log("Hello, how are you", name)

console.log(`Hello 
how are you ${name}`)


console.log(`The Sum for 2 and 3 is ${2+3}`)


console.log(`${(name === "Mariano") ? "El nombre es Mariano" : "El nombre no es Mariano"}`)