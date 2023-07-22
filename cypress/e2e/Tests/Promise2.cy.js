function esperarTresSegundos(a) {
    setTimeout(function() {
      a();
    }, 3000);
  }
  
  function mensaje() {
    console.log("Han pasado tres segundos");
  }
  
  esperarTresSegundos(mensaje);