console.log("Hola mundillo")

//creamos un objeto con las siguientes propiedades.

let myCar = new Object(); //creamos el objeto
    myCar.make = 'Ford'; //guardamos los valores que tiene el objeto
    myCar.model = 'Mustang';
    myCar.year = 1969;

console.log(myCar) //Para imprimir el obejto en consola

//variables locales y públicas

const myModule = (() =>{ //creamos un modulo
    // variables de contexto local
    const privateFoo ="Soy un valor privado, solo me usan dentro de este objeto y no me puede ver el usuario"
    const privateBar =[1,2,3,4,5,6]
    const baz ="Soy un valor que va ser expuesto y me puede ver el usuario"

    //guardamos las variables locales en una variable
    const exported ={
        publicFoo: "Valor público, pueden verme desde donde me llamen",
        publicBar: "Otro valor publico",
        publicBaz: baz
    }

    //exponemos la variables locales
    return exported //nos retorna lo que vamos a poder ver
})() //terminamos el modulo que va a ser llamado despues

console.log(myModule) //imprimimos el modulo en la consola
