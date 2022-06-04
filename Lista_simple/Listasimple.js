class Nodo{
    constructor(pokemon){
        this.pokemon= pokemon
        this.siguiente = null

    }

}

class ListaPokemon{ // siempre que creo una lista hay una cabeza
    constructor(){
        this.cabeza = null


    }

    // metodos de la lista
    // insertar

    agregarPokemon(nombrepokemon){
        var tempo = new Nodo(nombrepokemon)
        tempo.siguiente = this.cabeza
        this.cabeza = tempo
    }

    // mostrar

    mostrarlistapokemon(){
        var temporal = this.cabeza
        while (temporal!= null){
            console.log(temporal.pokemon)
            temporal = temporal.siguiente
        }

    }

}

var lista = new ListaPokemon()
lista.agregarPokemon("Pikachu")
lista.agregarPokemon("Lapras")
lista.agregarPokemon("Shinx")


lista.mostrarlistapokemon()