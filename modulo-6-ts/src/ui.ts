import {currentCardValue, currentTotalCount} from "./model"
import {createFinishMatchMessage, checkIfMatchIsFinished, calculateCurrentCardValueAndTotalCount} from "./motor"

export const assignCardUrlPath = () => { 
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

export const callRenderScore = () => {
    
    let renderScore = document.getElementById('renderScore')
    if (renderScore instanceof HTMLElement) {
        renderScore.textContent = currentTotalCount.toString()
    }
}

export const pullGiveMeCardButtonElement = () => {
    let giveMeCardButton = document.getElementById('giveMeCardButton')
    return giveMeCardButton
}

// render card according to current card value

export const pullRenderCardVariable = () => {
    let renderCard = document.getElementById('renderCard')
    if (renderCard instanceof HTMLImageElement) {
        renderCard.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`
    }
    return renderCard
}

export const pullFinishMatchButtonElement = () => {
    let finishMatchButton = document.getElementById('finishMatchButton')
    return finishMatchButton
}

export const renderCardUrlPath = () => {   
    const renderCard = pullRenderCardVariable();
    let cardUrlPath = assignCardUrlPath();
    if (renderCard instanceof HTMLImageElement) { 
        renderCard.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/${cardUrlPath}`  
    }
}

export const renderCardPath = () => {
    const renderCard = pullRenderCardVariable();
    if (renderCard instanceof HTMLImageElement) { 
        renderCard.src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg`      
    }
}

export const renderFinishMatchButton = () => {
    const finishMatchButton = pullFinishMatchButtonElement();
    if (finishMatchButton instanceof HTMLButtonElement) {
        finishMatchButton.addEventListener('click', () => {
            createFinishMatchMessage()
            checkIfMatchIsFinished()
        })
    }
}

export const pullFinishMatchButtonVariable = () => {
    let finishMatchButton = document.getElementById('finishMatchButton')
    return finishMatchButton
}

export const pullFinishMatchMessageVariable = () => {
    let finishMatchMessage = document.getElementById('finishMatchMessage')
    return finishMatchMessage
}

export const pullResetMatchButtonElement = () => {
    let resetMatchButton = document.getElementById('resetMatchButton')
    return resetMatchButton
}

export const resetFinishMatchMessage = () => {
    const finishMatchMessage = pullFinishMatchMessageVariable();
    if (finishMatchMessage instanceof HTMLElement) {
        finishMatchMessage.textContent = ""
    }
}

export const disableGiveMeCardButton = (): void => {
    const giveMeCardButton = pullGiveMeCardButtonElement();
    if (giveMeCardButton instanceof HTMLButtonElement) {
        giveMeCardButton.disabled = false
    }
}

export const disableFinishMatchButton = () => {
    const finishMatchButton = pullFinishMatchButtonVariable();
    if (finishMatchButton instanceof HTMLButtonElement) {
        finishMatchButton.disabled = false
    }
}

export const pullMatchButtonVariable = () => {
    let resetMatchButton = document.getElementById('resetMatchButton')
    return resetMatchButton
}

export const renderGiveMeCardButton = () => {
    const giveMeCardButton = pullGiveMeCardButtonElement();
    if (giveMeCardButton instanceof HTMLButtonElement) {
        
        giveMeCardButton.addEventListener('click', () => {
            calculateCurrentCardValueAndTotalCount()
        })
    };
}