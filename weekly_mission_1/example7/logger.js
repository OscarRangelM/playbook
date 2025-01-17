//Este modulo se comporta como si fuera un objeto que contiene todo lo definido 

//exports a funcion 
export function log (message){
    console.log(message)
}

//exports a constant
export const DEFAULT_LEVEL ='info'

//exports an object
export const LEVELS={
    error: 0,
    debug: 1,
    warn: 2,
    data: 3,
    info: 4,
    verbose: 5
}

//exports a class
export class Logger{
    constructor(name){
        this.name=name
    }

    log(message){
        console.log(`[${this.name}] ${message}`)
    }
}