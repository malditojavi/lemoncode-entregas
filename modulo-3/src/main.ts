import "./style.css";

/*
Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).
Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde.
*/


interface Grupo {
    nombre: string
    añoFundación: number
    activo: boolean 
    género: string
}

let rockStyle= "🎸 Rock"
let hardRockStyle= "🤘 Hard Rock"
let popRockStyle= "🎵 Pop Rock"
let classicStyle= "🎼 Clásica"
let styling= "font-weight: 700; background-color: green"

const grupoBeatles: Grupo = {
    nombre: "The Beatles",
    añoFundación: 1960,
    activo: true,
    género: popRockStyle
}

const grupoQueen: Grupo = {
    nombre: "Queen",
    añoFundación: 1970,
    activo: true,
    género: rockStyle
}

const grupoACDC: Grupo = {
    nombre: "ACDC",
    añoFundación: 1973,
    activo: true,
    género: hardRockStyle
}

const grupoLudwig: Grupo = {
    nombre: "Ludwig",
    añoFundación: 1770,
    activo: true,
    género: classicStyle
}

const grupoRolling: Grupo = {
    nombre: "Rolling",
    añoFundación: 1962,
    activo: true,
    género: rockStyle
}


console.log("%c" + grupoBeatles.nombre, styling)
console.log(grupoBeatles)
console.log("%c" + grupoQueen.nombre, styling)
console.log(grupoQueen)
console.log("%c" + grupoACDC.nombre, styling)
console.log(grupoACDC)
console.log("%c" + grupoLudwig.nombre, styling)
console.log(grupoLudwig)
console.log("%c" + grupoRolling.nombre, styling)
console.log(grupoRolling)

