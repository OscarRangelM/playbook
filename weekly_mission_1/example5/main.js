const logger = require('./logger')

//Ahora se puede usar directamente el objeto intanciando en el módulo logger
logger.log('This is an informational message')

/*
Tambien se pued ehacer de esta manera:
    const customLogger = new logger.constructor('CUSTOM')
    customLogger.log('This is an informational message')
*/ 