// OK 3 buttons: give me card, reset match, finish match
// OK value cards: 1-7 their value, 8-9 no exist, 10-12 they get a 0.5 value
// OK show messages depending how close you finish the match
// OK keep current count 
// OK block the button when the match is finished + end the match based on the current count
// TO DO: add button to show which one would be the next card


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

// count the current card value and add it to the current count

const intializeCurrentCardValueAsZero = () => {
    let currentCardValue = 0;
    return currentCardValue    
}

const intializeCurrentTotalCountAsZero = () => {
    let currentTotalCount = 0;
    return currentTotalCount    
}

let currentCardValue = 0;
let currentTotalCount = 0;

const assignCardUrlPath = () => { 
    // let currentCardValue = intializeCurrentCardValueAsZero();
    let cardUrlPath = ""
    switch (currentCardValue) {
        
        case 1:
            cardUrlPath = "/copas/1_as-copas.jpg"
            break;
        case 2:
            cardUrlPath = "/copas/2_dos-copas.jpg"
            break;
        case 3:
            cardUrlPath = "/copas/3_tres-copas.jpg"
            break;
        case 4:
            cardUrlPath = "/copas/4_cuatro-copas.jpg"
            break;
        case 5:
            cardUrlPath = "/copas/5_cinco-copas.jpg"
            break;
        case 6:
            cardUrlPath = "/copas/6_seis-copas.jpg"
            break;
        case 7:
            cardUrlPath = "/copas/7_siete-copas.jpg"
            break;
        case 10:
            cardUrlPath = "/copas/10_sota-copas.jpg"
            break;
        case 11:
            cardUrlPath = "/copas/11_caballo-copas.jpg"
            break;
        case 12:
            cardUrlPath = "/copas/12_rey-copas.jpg"
            break; 
        default:
            cardUrlPath = "back.jpg"
    }
    return cardUrlPath
}

const callRenderScore = () => {
    
    let renderScore = document.getElementById('renderScore')
    if (renderScore instanceof HTMLElement) {
        renderScore.textContent = currentTotalCount.toString()
    }
}

const calculateValueOfSpecialCards = () => {
    if (currentCardValue >= 10) {
        currentCardValue = 0.5
    }
}

const calculateCurrentCardValueAndTotalCount = () => {
   //  let currentTotalCount = intializeCurrentTotalCountAsZero();
    currentCardValue = adaptRandomNumberForCard(generateRandomNumber())
    
    assignCardUrlPath()
    renderCardUrlPath()
    calculateValueOfSpecialCards()

    currentTotalCount += currentCardValue

    callRenderScore()
    checkIfMatchIsFinished();
}

const pullGiveMeCardButtonElement = () => {
    let giveMeCardButton = document.getElementById('giveMeCardButton')
    return giveMeCardButton
}

// generate random number once 'give me card' button is clicked

const renderGiveMeCardButton = () => {
    const giveMeCardButton = pullGiveMeCardButtonElement();
    if (giveMeCardButton instanceof HTMLButtonElement) {
        
        giveMeCardButton.addEventListener('click', () => {
            calculateCurrentCardValueAndTotalCount()
        })
    };
}

renderGiveMeCardButton();

// reset match

const disableFinishMatchButton = () => {
    const finishMatchButton = pullFinishMatchButtonVariable();
    if (finishMatchButton instanceof HTMLButtonElement) {
        finishMatchButton.disabled = false
    }
}

const disableGiveMeCardButton = (): void => {
    const giveMeCardButton = pullGiveMeCardButtonElement();
    if (giveMeCardButton instanceof HTMLButtonElement) {
        giveMeCardButton.disabled = false
    }
}

const resetFinishMatchMessage = () => {
    const finishMatchMessage = pullFinishMatchMessageVariable();
    if (finishMatchMessage instanceof HTMLElement) {
        finishMatchMessage.textContent = ""
    }
}

const renderCardPath = () => {
    const renderCard = pullRenderCardVariable();
    if (renderCard instanceof HTMLImageElement) { 
        renderCard.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`      
    }
}

const resetAllValues = () => {
    currentCardValue = 0;
    currentTotalCount = 0;
    callRenderScore();
    disableFinishMatchButton();
    disableGiveMeCardButton();
    resetFinishMatchMessage();
    renderCardPath();
    
}

const pullMatchButtonVariable = () => {
    let resetMatchButton = document.getElementById('resetMatchButton')
    return resetMatchButton
}

const pullResetMatchButtonElement = () => {
    let resetMatchButton = document.getElementById('resetMatchButton')
    return resetMatchButton
}

const renderResetMatchButton = () => {
    const resetMatchButton = pullResetMatchButtonElement();
    if (resetMatchButton instanceof HTMLButtonElement) {
        resetMatchButton.addEventListener('click', () => {
            resetAllValues()
        })
    }
}

renderResetMatchButton();

// stop match

const pullFinishMatchButtonVariable = () => {
    let finishMatchButton = document.getElementById('finishMatchButton')
    return finishMatchButton
}

const pullFinishMatchMessageVariable = () => {
    let finishMatchMessage = document.getElementById('finishMatchMessage')
    return finishMatchMessage
}

const createFinishMatchMessage = () => {
    // const finishMatchButton = pullFinishMatchButtonVariable();
    const finishMatchMessage = pullFinishMatchMessageVariable();
    if (finishMatchMessage instanceof HTMLElement) {
        if (currentTotalCount <= 5) {
            finishMatchMessage.textContent = "Te podías haber arriesgado un poco más"
        } else if (currentTotalCount >= 6 && currentTotalCount <= 7) {
            finishMatchMessage.textContent = "Muy bien, pero podías arriesgarte un poquito más"
        } else if (currentTotalCount === 7.5) {
            finishMatchMessage.textContent = "Lo lograste!"
        } else if (currentTotalCount > 7.5) {
            finishMatchMessage.textContent = "Te pasaste!"
        }
    }
}

const pullFinishMatchButtonElement = () => {
    let finishMatchButton = document.getElementById('finishMatchButton')
    return finishMatchButton
}

const renderFinishMatchButton = () => {
    const finishMatchButton = pullFinishMatchButtonElement();
    if (finishMatchButton instanceof HTMLButtonElement) {
        finishMatchButton.addEventListener('click', () => {
            createFinishMatchMessage()
            checkIfMatchIsFinished()
        })
    }
}

renderFinishMatchButton();

// render card according to current card value

const pullRenderCardVariable = () => {
    let renderCard = document.getElementById('renderCard')
    if (renderCard instanceof HTMLImageElement) {
        renderCard.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`
    }
    return renderCard
}

const renderCardUrlPath = () => {   
    const renderCard = pullRenderCardVariable();
    let cardUrlPath = assignCardUrlPath();
    if (renderCard instanceof HTMLImageElement) { 
        renderCard.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/${cardUrlPath}`  
    }
}

// block the button when the match is finished + end the match based on the current count

const checkIfMatchIsFinished = () => {
    const giveMeCardButton = pullGiveMeCardButtonElement();
    const finishMatchButton = pullFinishMatchButtonVariable();
    if (currentTotalCount > 7.5) {
        if (finishMatchButton instanceof HTMLButtonElement) {
            finishMatchButton.disabled = true
        }
        if (giveMeCardButton instanceof HTMLButtonElement) {
            giveMeCardButton.disabled = true
        }
        let finishMatchMessage = document.getElementById('finishMatchMessage')
        if (finishMatchMessage instanceof HTMLElement) {
            finishMatchMessage.textContent = "Has perdido!"
        }
    }
}

