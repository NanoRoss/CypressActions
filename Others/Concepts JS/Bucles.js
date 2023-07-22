
var numeros =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
for (let index = 0; index < numeros.length; index++) {
    console.log("posicionArray  "+index+" tiene el valor: "+numeros[index])
}

for (var n in numeros){
    console.log(numeros[n])
}


var jugadores = {
    'username': 'Nano',  
    'score': 43,
    'hours': 13,
    "proffessional": true,
    "friends":['Agus','Bauti']
}

for (var n in jugadores){
    console.log(n+":"+jugadores[n])
}

var i = 0
while (i < 10){
    console.log(i)
    i++
}