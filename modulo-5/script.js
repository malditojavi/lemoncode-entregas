let renderCarta = document.querySelector("#renderCarta")
let renderScore = document.querySelector("#renderScore")
let currentTotal = 0
let currentScore = 0 
let resetButton = document.querySelector("#resetButton")
let mePlantoButton = document.querySelector("#mePlantoButton")
let dameCartaButton = document.querySelector("#dameCartaButton")
let randomNumberAsString = ""

// 1. Mostrar puntuación
function muestraPuntuacion() {
  renderScore.innerHTML = currentScore.toFixed(1)
}

// 2. Pedir carta
dameCartaButton.addEventListener("click", function(){
  dameCarta()
})


function dameCarta() {
  let randomNumber = Math.floor(Math.random() * 12) + 1;
  let cardValue = randomNumber;

  // Asignar 0.5 puntos para sota, caballo y rey
  if (randomNumber >= 10) {
    cardValue = 0.5;
  }

  currentScore += cardValue;
  checkGameOver();

  if (randomNumber === 8 && randomNumber < 10 || randomNumber === 9 && randomNumber < 10 ) {
    randomNumber += 2
    switch (randomNumber) {
      case 1:
        randomNumberAsString = "as";
        break;
      case 2:
         randomNumberAsString = "dos";
        break;
      case 3:
        randomNumberAsString = "tres";
        break;
      case 4:
        randomNumberAsString = "cuatro";
        break;
      case 5:
        randomNumberAsString = "cinco";
        break;
      case 6:
        randomNumberAsString = "seis";
        break;
      case 7:
        randomNumberAsString = "siete";
      break;
      case 10:
        randomNumberAsString = "sota";
      break;
      case 11:
        randomNumberAsString = "caballo";
      break;
      case 12:
        randomNumberAsString = "rey";
      break;
      default:
      randomNumberAsString = "no";
    }
    renderCarta.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/` + randomNumber + `_` + randomNumberAsString + `-copas.jpg`
  } else {
      switch (randomNumber) {
      case 1:
        randomNumberAsString = "as";
        break;
      case 2:
         randomNumberAsString = "dos";
        break;
      case 3:
        randomNumberAsString = "tres";
        break;
      case 4:
        randomNumberAsString = "cuatro";
        break;
      case 5:
        randomNumberAsString = "cinco";
        break;
      case 6:
        randomNumberAsString = "seis";
        break;
      case 7:
        randomNumberAsString = "siete";
      break;
      case 10:
        randomNumberAsString = "sota";
      break;
      case 11:
        randomNumberAsString = "caballo";
      break;
      case 12:
        randomNumberAsString = "rey";
      break;
      default:
      randomNumberAsString = "no";
    }
    renderCarta.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/` + randomNumber + `_` + randomNumberAsString + `-copas.jpg`
    
  }  
}

// 3. Mostrar carta

function muestraCarta(){
  // TO DO
  // const mostrarCarta = (carta: number) : void
  // Cuando el usuario pulse en el bóton Dame Carta llama a DameCarta() y con el resultado llama a muestraCarta()
}

// 4. Sumar puntuación
  // listen to 'dameCarta' clicked
  // render currentScore along with text
  dameCartaButton.addEventListener("click", function(){
    document.querySelector("#renderScore").innerHTML = currentScore
  })

// 5. Game over
    function checkGameOver() {
        if (currentScore > 7.5) {
            console.log("Game over! You lost!");
            document.querySelector("#gameOver").style.display = "block";
            disableButtons(); // Optional: disable buttons after losing
        }
    }

    function disableButtons() {
        dameCartaButton.disabled = true;
        mePlantoButton.disabled = true;
    }
// 6. Me planto

mePlantoButton.addEventListener("click", function() {
  if (currentScore <= 5) { 
    document.querySelector("#plantaoMessage").innerHTML = "vaya cagao"
  } else if (currentScore <= 6){
    document.querySelector("#plantaoMessage").innerHTML = "por los pelos"
  } else if (currentScore <= 7) {
    
    document.querySelector("#plantaoMessage").innerHTML = "casi casi"
  } else if (currentScore = 7.5) {
    
    document.querySelector("#plantaoMessage").innerHTML = "puto crack"
  }
})

// 7. Nueva partida

resetButton.addEventListener("click", function() {
  renderCarta.src="https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg"
  currentTotal = 0
  currentScore = 0
  dameCartaButton.disabled = false;
  mePlantoButton.disabled = false;
  document.getElementById("renderScore").innerHTML = 0
  document.querySelector("#gameOver").style.display = "none";
  document.querySelector("#plantaoMessage").innerHTML = ""
})

// 8. Styling

// 9. Bonus feature - show the next card
