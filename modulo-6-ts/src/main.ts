import {resetAllValues, intializeCurrentCardValueAsZero, intializeCurrentTotalCountAsZero} from "./model"
import {callRenderScore, pullGiveMeCardButtonElement, pullRenderCardVariable, pullFinishMatchButtonElement, renderCardUrlPath, renderCardPath, renderFinishMatchButton, pullFinishMatchButtonVariable, pullFinishMatchMessageVariable, pullResetMatchButtonElement, resetFinishMatchMessage, disableGiveMeCardButton, disableFinishMatchButton, pullMatchButtonVariable, renderGiveMeCardButton} from "./ui"
import {createFinishMatchMessage, checkIfMatchIsFinished, renderResetMatchButton, calculateCurrentCardValueAndTotalCount, generateRandomNumber, calculateValueOfSpecialCards, adaptRandomNumberForCard} from "./motor"

generateRandomNumber();

adaptRandomNumberForCard(generateRandomNumber());

intializeCurrentCardValueAsZero();
intializeCurrentTotalCountAsZero();

callRenderScore();

calculateValueOfSpecialCards();

calculateCurrentCardValueAndTotalCount();

pullGiveMeCardButtonElement();

renderGiveMeCardButton();

disableFinishMatchButton();
disableGiveMeCardButton();
resetFinishMatchMessage();

renderCardPath();

resetAllValues();

pullMatchButtonVariable();

pullResetMatchButtonElement();

renderResetMatchButton();

pullFinishMatchButtonVariable();

pullFinishMatchMessageVariable();

checkIfMatchIsFinished();

createFinishMatchMessage();

pullFinishMatchButtonElement();

renderFinishMatchButton();

pullRenderCardVariable();

renderCardUrlPath();


