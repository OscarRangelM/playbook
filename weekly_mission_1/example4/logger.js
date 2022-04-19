class Logger {
    constructor(name){
        //creamos la variable this para referenciar el valor del contexto local de esta clase
        this.name = name //atributo 
    }

    //método
    // la variable this se guarda en el contexto local
    //la variable message se le pasa al ejecutar este método
    info (message){
        console.log(`[Objeto con nombre: ${this.name}] info: ${message}`)
    }

    //método
    verbose (message){
        console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`)
    }
}

// la clase se exporta en este módulo
module.exports = Logger
