const logger1 = require('./logger_1')
const logger2 = require('./logger_2')

//las dos maneras de llamar la función
logger1('This is an informational message')
logger2.verbose('This is a verbose message')