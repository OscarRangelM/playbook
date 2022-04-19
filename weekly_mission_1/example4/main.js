// Invocas al modulo que contiene la clase
const Logger = require('./logger')

//creamos un objeto
const dbLogger = new Logger('DB')
// esto crea un objeto nuevo, esto llama por default el constructor de la clase

//invocación del método
dbLogger.info('This is an informational message')

//Creación de otro objeto
const accessLogger = new Logger('ACCESS')
accessLogger.verbose('This is a verbose message')