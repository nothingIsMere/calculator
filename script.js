// Basic arithmetic functions
function add(a,b) {
    if((a + b) > 9999999){
        return (a + b).toExponential(1);
    }else{
        if(!Number.isInteger(a + b)){
            return (a + b).toFixed(2);
        }else{
            return (a + b);
        }
    }
}

function subtract(a,b) {
    if((a - b) > 9999999){
        return (a - b).toExponential(1);
    }else{
        if(!Number.isInteger(a - b)){
            return (a - b).toFixed(2);
        }else{
            return (a - b);
        }
    }
}

function multiply(a,b) {
    if((a*b) > 9999999){
        return (a*b).toExponential(1);
    }else{
        if(!Number.isInteger(a*b)){
            return (a*b).toFixed(2);
        }else{
            return (a*b);
        }
    }
}

function divide(a,b) {
    if(b === 0){
        return ('Nope');
    }else if((a/b) > 9999999){
        return (a/b).toExponential(1);
    }else {
        if(!Number.isInteger(a/b)){
            return (a/b).toFixed(2);
        }else{
            return (a/b);
        } 
    }
 }

// Operate function
function operate(op, a, b) {
    switch(op){
        case `+`:
            return add(Number(a),Number(b));
        case `-`:
            return subtract(Number(a),Number(b));
        case `*`:
            return multiply(Number(a),Number(b));
        case `/`:
            return divide(Number(a),Number(b));
    }
}

function operatorClick(str) {
    if(firstOperation){
        operatorPressed = true;
        values.num1 = currentStr;
        values.operation = str;
        currentStr = '';
        firstOperation = false;

    }else if(equalsPressed){
        operatorPressed = true;
        equalsPressed = false;
        values.operation = str;
        currentStr = '';
    }else{
        if(operatorPressed === true){
            values.num2 = values.num1;
            values.operation = str;
            values.num1 = operate(values.operation, values.num1, values.num2);
            dispText.textContent = values.num1;
            currentStr = '';

        }else {
            operatorPressed = true;
            values.num2 = currentStr;
            values.num1 = operate(values.operation, values.num1, values.num2);
            dispText.textContent = values.num1;
            values.operation = str;
            currentStr = '';

        }
    }
    return;
}

let values = {
    operation: '' , 
    num1: 0,
    num2: 0,
};

let firstOperation = true;
let operatorPressed = false;
let equalsPressed = false;

window.addEventListener("keydown", (e) => { 
    if(e.key === "Backspace"){
        currentStr = currentStr.slice(0, dispText.textContent.length - 1); 
        dispText.textContent = currentStr;
    }
})

let currentStr = ''; 
const dispText = document.getElementById('display-text');
const btns = Array.from(document.querySelectorAll('button'));
btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {  
        switch(btn.id) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if(currentStr.length < 7){
                    operatorPressed = false;
                    currentStr += btn.id;
                    dispText.textContent = currentStr;
                }else{
                    return;
                }
                break;
            case '.':
                if(currentStr.includes('.')){   // Can't have more than one decimal point in an expression
                    return;
                }
                else{
                    currentStr += btn.id;   
                }
                dispText.textContent = currentStr;
                break;
            case 'plus-minus':
                if(operatorPressed){
                    currentStr = `-`;
                    dispText.textContent = currentStr;
                    operatorPressed = false;
                }else{
                    if(currentStr[0] === '-'){
                        currentStr = currentStr.slice(1, currentStr.length);   
                    }
                    else{
                        currentStr = '-' + currentStr; 
                    }
                    dispText.textContent = currentStr;
                }
                
                break;
            case 'clear':
                currentStr = '';
                dispText.textContent = currentStr;
                values = {
                    operation: '' , 
                    num1: 0,
                    num2: 0,
                };
                firstOperation = true;
                operatorPressed = false;
                break;
            case 'del':
                if(equalsPressed || operatorPressed){
                    currentStr = '';
                    dispText.textContent = currentStr;
                    values = {
                        operation: '' , 
                        num1: 0,
                        num2: 0,
                    };
                firstOperation = true;
                operatorPressed = false;
                }else{
                    currentStr = currentStr.slice(0, dispText.textContent.length - 1); 
                }
                dispText.textContent = currentStr;
                break;
            case '+':                              
                operatorClick(e.target.textContent);
                break;
            case '-':
                operatorClick(e.target.textContent);
                break;
            case '*':
                operatorClick(e.target.textContent);
                break;
            case '/':
                operatorClick(e.target.textContent);
                break;
            case '=':
                equalsPressed = true;
                values.num2 = currentStr;
                values.num1 = operate(values.operation, values.num1, values.num2);
                dispText.textContent = values.num1;
                break;
                
        }
    })
})





