class Animales {
    constructor(tipoAnimal,sonido){
    this.tipoAnimal = tipoAnimal
    this.sonido = sonido
}
ejecutarAnimal(){
return 'Soy un '+this.tipoAnimal+' y mi sonido hace: '+this.sonido
    }
}

animal1 = new Animales("Perro","Guau Guau!!")
animal2 = new Animales("Gato","Miauuuuuuu")

console.log(animal1.ejecutarAnimal())
console.log(animal2.ejecutarAnimal())



class Mascota extends Animales{
    constructor(tipoAnimal,sonido,dueño,ciudad){
        super(tipoAnimal,sonido)
        this.dueño = dueño
        this.ciudad = ciudad
    }
    ejecutarInfoMascota(){
        return 'Soy un '+this.tipoAnimal+' y mi sonido hace: '+this.sonido+'. Mi dueño se llama: '+this.dueño+" y vivo en: "+this.ciudad
    }
}


const mascota1 = new Mascota("Perro","Guau Guau!!","Mariano","Junin")

console.log(mascota1.ejecutarInfoMascota())