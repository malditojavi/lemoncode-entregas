import "./style.css";

console.log("Hola amigos");

/*
test
*/

let totalCena = 120
let totalBebidas = 18
let cuantoPagaIndividualmenteCadaComensal = (totalCena - totalBebidas)/6
let lasBebidasCorrenDeMiCuenta = totalBebidas + cuantoPagaIndividualmenteCadaComensal
  
console.log(`Cada comensal pagará ${cuantoPagaIndividualmenteCadaComensal}`)
console.log(`Yo pagaré mi parte ${cuantoPagaIndividualmenteCadaComensal} y las bebidas, haciendo un total de ${lasBebidasCorrenDeMiCuenta}`)

