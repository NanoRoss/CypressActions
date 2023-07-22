
// Callback & Promises | Asynchronous vs Synchronous  ////////////////////////////////////////////////////////////

// La ejecución síncrona significa que el código se ejecuta de manera secuencial, una línea a la vez. Esto significa que cuando se encuentra una línea de código que toma tiempo, como una llamada a una API externa, el programa se detendrá hasta que esa llamada se complete antes de continuar con la siguiente línea de código.
// La ejecución asíncrona, por otro lado, permite que el programa continúe ejecutando otras líneas de código mientras se espera a que se complete otra cosa, ej una llamada a una API externa q demora.
// La ejecucion asincrona se logra a través del uso de callbacks o promesas, que permiten que el programa se registre para ser notificado cuando la llamada a la API se complete, y luego ejecutar el código apropiado en respuesta.

//Promesa: Permite ejecutar codigo y cuando este listo se devuelve y si hay error retorna ese error:
////////////////////////////////////////////////////////////
console.log("///////////////////////////// PROMESAS")


function primero(){
    return "PRIMERO"
}

function segundo(){
    setTimeout(() => {
        return "SEGUNDO"
    }, 5000);
}

function tercero(){
    return "TERCERO"
}

// console.log(primero())
// console.log(segundo()) // Cuando se ejecuta secuencialmente el consolelog en segundo() el dato no existe aun, genera UNDEFINED.
// console.log(tercero())

// Usando una Promesas y await puedo corregir el error anterior:

function segundop(){
    return new Promise((resolve,reject)=>{
        if (19<2){
            reject (new Error("Se genero un Error en la Promesa"))
        }
        setTimeout(() => {
            var valorSegundo = "SEGUNDO"
            resolve(valorSegundo)
        }, 4000);
    })
}   

async function promisify(promise) {
    try {
      const result = await promise;
      return result;
    } catch (error) {
      console.error(error);
      return null;
    }
  }


console.log(primero())

console.log(promisify(segundop())) // con el await espero que se ejecute una funcion asincrona si o si para seguir.

console.log(tercero())


//Callbacks: Son funciones que se pasan como parametro dentro de otras funciones,nos sirve para asegurarnos que un codigo no se ejecuta hasta q otro termine.
////////////////////////////////////////////////////////////
console.log("///////////////////////////// CALLBACKS")

function primeroCall(segundoCall){
    setTimeout(() => {
        console.log("PRIMERO CALL")
        segundoCall()
    }, 5000);
}

function segundoCall(){
    console.log("SEGUNDO CALL")
}

primeroCall(segundoCall)
