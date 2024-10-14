import {callRenderScore, renderCardPath, resetFinishMatchMessage, disableGiveMeCardButton, disableFinishMatchButton} from "./ui"

export let currentCardValue = 0;
export let currentTotalCount = 0;

export const setCurrentCardValue = (value: number) => {
    currentCardValue = value;
};

export const setCurrentTotalCount = (value: number) => {
    currentTotalCount = value;
};


export const resetAllValues = () => {
    // currentCardValue = 0;
    setCurrentCardValue(0);
    // currentTotalCount = 0;
    setCurrentTotalCount(0);
    
    callRenderScore();
    disableFinishMatchButton();
    disableGiveMeCardButton();
    resetFinishMatchMessage();
    renderCardPath();
}

export const intializeCurrentCardValueAsZero = () => {
    let currentCardValue = 0;
    return currentCardValue    
}

export const intializeCurrentTotalCountAsZero = () => {
    let currentTotalCount = 0;
    return currentTotalCount    
}