class Logger {
    constructor(name){ //se guardan los valores con este objeto
        this.count=0
        this.name= name
    }

    log(message){
        this.count++ //se aumenta en 1 el contador interno cada que se llama este método
        console.log('[' + this.name + '] ' + message)
    }
}

//Intanciación del objeto y se exporta
module.exports = new Logger('DEFAULT')