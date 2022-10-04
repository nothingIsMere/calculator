// Basic arithmetic functions
function add(a,b) {
    return (a + b).toFixed(2);
}

function subtract(a,b) {
    return (a - b).toFixed(2);
}

function multiply(a,b) {
    return (a*b).toFixed(2);
}

function divide(a,b) {
    if(b === 0){
        console.log("No. Just no.");
        return;
    }
    else{
        return (a/b).toFixed(2);   
    }
}

// Operate function
function operate(op, a, b) {
    switch(op){
        case `+`:
            return(add(a,b));
        case `-`:
            return(subtract(a,b));
        case `*`:
            return(multiply(a,b));
        case `/`:
            return(divide(a,b));
    }
}

let values = {
    operation: '' , 
    num1: 0,
    num2: 0,
};

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
                currentStr += btn.id;
                dispText.textContent = currentStr;
                console.log(values);
                break;
            case '.':
                if(dispText.textContent.includes('.')){   // Can't have more than one decimal point in an expression
                    return;
                }
                else{
                    dispText.textContent += btn.id;   
                }
                break;
            case 'plus-minus':
                if(dispText.textContent[0] === '-'){
                    dispText.textContent = dispText.textContent.slice(1, dispText.textContent.length);   
                }
                else{
                    dispText.textContent = '-' + dispText.textContent; 
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
                break;
            case 'del':
                dispText.textContent = dispText.textContent.slice(0, dispText.textContent.length - 1);
                break;
            case '+':
                values.num1 = parseInt(currentStr);
                values.operation = '+';
                currentStr = '';
                console.log(values);
                break;
            case '-':
                values.num1 = parseInt(currentStr);
                values.operation = '-';
                break;
            case '*':
                values.num1 = parseInt(currentStr);
                values.operation = '*';
                break;
            case '/':
                values.num1 = parseInt(currentStr);
                values.operation = '/';
                break;
            case '=':
                values.num2 = parseInt(currentStr);
                values.num1 = operate(values.operation, values.num1, values.num2); 
                dispText.textContent = values.num1;
                console.log(values);
                break;
                
        }
    })
})




