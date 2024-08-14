let currentValueCounter:number = 1
document.getElementById("currentValueCounter")!.innerHTML = currentValueCounter.toString().padStart(2, '0')

let nextButton = document.getElementById("nextButton")
let previousButton = document.getElementById("previousButton")
let resetButton = document.getElementById("resetButton")

if (nextButton != undefined && nextButton != null){
    nextButton.addEventListener('click', renderNextCount)
}
if (previousButton != undefined && nextButton != null){
    previousButton.addEventListener('click', renderPreviousCount)    
}
if (resetButton != undefined && nextButton != null){
    resetButton.addEventListener('click', resetCount)
}

function renderNextCount() {
    currentValueCounter += 1
    document.getElementById("currentValueCounter").innerHTML = currentValueCounter.toString().padStart(2, '0')
    return currentValueCounter
}

function renderPreviousCount() {
    currentValueCounter -= 1
    document.getElementById("currentValueCounter").innerHTML = currentValueCounter.toString().padStart(2, '0')
    return currentValueCounter
}

function resetCount() {
    currentValueCounter = 0
    document.getElementById("currentValueCounter").innerHTML = currentValueCounter.toString().padStart(2, '0')
    return currentValueCounter
}

// skip numbers

let skipNumber = document.getElementById("skipNumber") as HTMLInputElement
skipNumber.addEventListener('input', monitorSkip)

function monitorSkip() {
    document.getElementById("currentValueCounter").innerHTML = skipNumber.value
    currentValueCounter = parseInt(skipNumber.value)
}

// implement padder

// to do
/*
* enable strict and fix things
*/

