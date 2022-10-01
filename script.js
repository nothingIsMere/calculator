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

console.log(operate(`/`, 3, 0));



