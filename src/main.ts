import "./style.css";

console.log("Hola amigos");

/*Tienes un grupo de 6 amigos y quieres invitarlos a cenar por tu cumpleaños.
Solo puedes permitirte invitar a las bebidas, ya que estás un poco ajustado de dinero.
Tienes un ticket de cena que cuesta 120 € y en el que ya se incluyen 
las bebidas por un valor de 18 €.
Calcula cuánto tendría que pagar cada comensal para dividir los costos de manera equitativa.
Utiliza JavaScript para hacer el cálculo y mostrar el resultado por consola.
*/

let totalCena = 120
let totalBebidas = 18
let cuantoPagaIndividualmenteCadaComensal = (totalCena - totalBebidas)/6
let lasBebidasCorrenDeMiCuenta = totalBebidas + cuantoPagaIndividualmenteCadaComensal
 
console.log(`Cada comensal pagará ${cuantoPagaIndividualmenteCadaComensal}`)
console.log(`Yo pagaré mi parte ${cuantoPagaIndividualmenteCadaComensal} y las bebidas, haciendo un total de ${lasBebidasCorrenDeMiCuenta}`)

