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

const numStrings = [`1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `0`,];
const disp = document.getElementById('display');
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
            case '.':
                disp.textContent += btn.id;
                break;
            case 'plus-minus':
            case 'clear':
                disp.textContent = '';
                break;
            case 'del':
                disp.textContent = disp.textContent.slice(0, disp.textContent.length - 1);
                break;
            case '+':
            case '-':
            case '*':
            case '/':
            case '=':
                // do specified operation, display results
        }
    })
})




