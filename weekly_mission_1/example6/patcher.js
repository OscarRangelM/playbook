// require('./logger) da el objeto creado
// require('./logger').Logger regresara la clase
//agregamos una funcion más al objeto instanciado y no a la clase
require('./logger').customMessage=function(){
    console.log('This is a new functionality')
}
