import {currentTotalCount, resetAllValues, setCurrentCardValue, currentCardValue, setCurrentTotalCount} from "./model"
import {pullGiveMeCardButtonElement, pullFinishMatchButtonVariable, pullFinishMatchMessageVariable, pullResetMatchButtonElement, assignCardUrlPath, renderCardUrlPath, callRenderScore} from "./ui"

export const checkIfMatchIsFinished = () => {
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

export const createFinishMatchMessage = () => {
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

export const renderResetMatchButton = () => {
    const resetMatchButton = pullResetMatchButtonElement();
    if (resetMatchButton instanceof HTMLButtonElement) {
        resetMatchButton.addEventListener('click', () => {
            resetAllValues()
        })
    }
}

export const calculateCurrentCardValueAndTotalCount = () => {
    //  let currentTotalCount = intializeCurrentTotalCountAsZero();
     // currentCardValue = adaptRandomNumberForCard(generateRandomNumber())
     setCurrentCardValue(adaptRandomNumberForCard(generateRandomNumber()))
     
     assignCardUrlPath()
     renderCardUrlPath()
     calculateValueOfSpecialCards()
 
     // currentTotalCount += currentCardValue
     setCurrentTotalCount(currentTotalCount + currentCardValue)
 
     callRenderScore()
     checkIfMatchIsFinished();
 }


export const generateRandomNumber = () => {
    return Math.floor(Math.random() * 12) + 1;
}

export const calculateValueOfSpecialCards = () => {
    if (currentCardValue >= 10) {
        setCurrentCardValue(0.5)
    }
}

export const adaptRandomNumberForCard = (generateRandomNumber: number): number => {
    if (generateRandomNumber > 7 && generateRandomNumber < 10) {
        return generateRandomNumber + 2;
    }
    return generateRandomNumber
}