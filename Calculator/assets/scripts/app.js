const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// Generates and writes calculation log
function  createAndWriteOutput(operator, resultBeforeCalculation, CalculationNumber){
    const calculatorDescription = `${resultBeforeCalculation} ${operator} ${CalculationNumber}`;
    outputResult(currentResult, calculatorDescription); // from vendor file
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult){
    const logEntry = {
        operation: operationIdentifier,
        prevResult: prevResult,
        number: operationNumber,
        result: newResult
    };
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    let matchOperator;
    if(calculationType === 'ADD') {
        currentResult += enteredNumber;
        matchOperator = '+';
    } else if (calculationType === 'SUBTRACT') {
        currentResult -= enteredNumber;
        matchOperator = '-';
    } else if (calculationType === 'MULTIPLY') {
        currentResult *= enteredNumber;
        matchOperator = '*';
    } else {
        currentResult /= enteredNumber;
        matchOperator = '/';
    }
    
    createAndWriteOutput(matchOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('ADD');
}

function subtract () {
    calculateResult('SUBTRACT');
}

function multiply () {
    calculateResult('MULTIPLY');
}

function divide () {
    calculateResult('DIVIDE');
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);