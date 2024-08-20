// OK 3 buttons: give me card, reset match, finish match
// OK value cards: 1-7 their value, 8-9 no exist, 10-12 they get a 0.5 value
// OK show messages depending how close you finish the match
// OK keep current count 
// OK block the button when the match is finished + end the match based on the current count
// extra: add button to show which one would be the next card

// generate random number
const generateRandomNumber = () => {
    return Math.floor(Math.random() * 12) + 1;
}

// adapt random number for card (removes 8, 9 values from the generated random number)
const adaptRandomNumberForCard = (generateRandomNumber: number): number => {
    if (generateRandomNumber > 7 && generateRandomNumber < 10) {
        return generateRandomNumber + 2;
    }
    return generateRandomNumber
}

// generate random number once 'give me card' button is clicked
const giveMeCardButton = document.getElementById('giveMeCardButton');
document.addEventListener('DOMContentLoaded', () => {
    if (giveMeCardButton) {
      giveMeCardButton.addEventListener('click', () => {
        // console.log(adaptRandomNumberForCard(generateRandomNumber()))
      })
    }
});

// count the current card value and add it to the current count

let currentCardValue = 0;
let currentTotalCount = 0;
let renderScore = document.getElementById('renderScore')

let cardUrlPath = ""

const assignCardUrlPath = () => {    
    if (currentCardValue === 1){
        cardUrlPath = "/copas/1_as-copas.jpg"
    } else if (currentCardValue === 2){
        cardUrlPath = "/copas/2_dos-copas.jpg"
    } else if (currentCardValue === 3){
        cardUrlPath = "/copas/3_tres-copas.jpg"
    } else if (currentCardValue === 4){
        cardUrlPath = "/copas/4_cuatro-copas.jpg"
    } else if (currentCardValue === 5){
        cardUrlPath = "/copas/5_cinco-copas.jpg"
    } else if (currentCardValue === 6){
        cardUrlPath = "/copas/6_seis-copas.jpg"
    } else if (currentCardValue === 7){
        cardUrlPath = "/copas/7_siete-copas.jpg"
    } else if (currentCardValue === 10){
        cardUrlPath = "/copas/10_sota-copas.jpg"
    } else if (currentCardValue === 11){
        cardUrlPath = "/copas/11_caballo-copas.jpg"
    } else if (currentCardValue === 12){
        cardUrlPath = "/copas/12_rey-copas.jpg"
    } else {
        cardUrlPath = "back.jpg"
    }
}

const calculateCurrentCardValueAndTotalCount = () => {
    currentCardValue = adaptRandomNumberForCard(generateRandomNumber())
    
    assignCardUrlPath()
    renderCardUrlPath()
    if (currentCardValue >= 10) {
        currentCardValue = 0.5
    }
    
    currentTotalCount += currentCardValue
    if (renderScore) {
        renderScore.textContent = currentTotalCount.toString()
    }
    checkIfMatchIsFinished();
}

if (giveMeCardButton) {
    giveMeCardButton.addEventListener('click', () => {
        calculateCurrentCardValueAndTotalCount()
        
    })
};

// reset match
let resetMatchButton = document.getElementById('resetMatchButton')

const resetAllValues = () => {
    currentCardValue = 0
    currentTotalCount = 0
    if (renderScore) {
        renderScore.textContent = currentTotalCount.toString()
    }
    (renderCard as HTMLImageElement).src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`  
}
if (resetMatchButton) {
    resetMatchButton.addEventListener('click', () => {
        resetAllValues()
    })
}
// stop match

let finishMatchButton = document.getElementById('finishMatchButton')

const createFinishMatchMessage = () => {
    if (currentTotalCount <= 5) {
        console.log("Te podías haber arriesgado un poco más")
    } else if (currentTotalCount >= 6 && currentTotalCount <= 7) {
        console.log("Muy bien, pero podías arriesgarte un poquito más")
    } else if (currentTotalCount === 7.5) {
        console.log("Lo lograste!")
    } else if (currentTotalCount > 7.5) {
        console.log("Te pasaste!")
    }
}

if (finishMatchButton) {
    finishMatchButton.addEventListener('click', () => {
        createFinishMatchMessage()
    })
}

// render card according to current card value

let renderCard = document.getElementById('renderCard')
const renderCardUrlPath = () => {   
    if (renderCard) { 
        (renderCard as HTMLImageElement).src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/${cardUrlPath}`  
    }
}

// block the button when the match is finished + end the match based on the current count

const checkIfMatchIsFinished = () => {
    if (currentTotalCount >= 7.5) {
        if (finishMatchButton) {
            (finishMatchButton as HTMLButtonElement).disabled = true
        }
        let finishMatchMessage = document.getElementById('finishMatchMessage')
        if (finishMatchMessage) {
            finishMatchMessage.textContent = "Has perdido!"
        }
    }
}


