class Pokemon {
    constructor(name){
        this.name = name
    }

    sayHello() {
        console.log(' Mi pokemon ' + this.name + ' te saluda!! ')
    }
    
    sayMessage() {
        console.log(' Mi pokemon ' + this.name + ' dice: Heey! ')
    }
    
}

module.exports= Pokemon

//funcion sayHello()
//funcion sayMessage()
//exporta la clase para main.js
//Mi pokemon pikachu te saluda!!!