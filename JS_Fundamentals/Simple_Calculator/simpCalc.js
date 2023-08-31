//This is a program to design the logic for a simple calculator
function addNumbers(number1, number2){
    number1= parseFloat(number1);
    number2= parseFloat(number2);
    return(number1 + number2);
}

function subtractNumbers(number1, number2){
    number1= parseFloat(number1);
    number2= parseFloat(number2);
    return(number1 - number2);
}
function multiplyNumbers(number1, number2){
    number1= parseFloat(number1);
    number2= parseFloat(number2);
    return(number1 * number2);
}
function divideNumbers(number1, number2){
    number1= parseFloat(number1);
    number2= parseFloat(number2);
    return(number1 / number2);
}
function performButton() {
    let operation = prompt("Welcome! Please state the operation you wish to perform. ('+', '-', '/', '*'): ");
    let num1 = prompt("First Number: ");
    let num2 = prompt("Second Number: ");

    switch(operation){
        case "+":
            result = addNumbers(num1,num2);
            document.write(result);
            break;
        
        case "-":
            result = subtractNumbers(num1,num2);
            document.write(result);
            break;
    
        case "*":
            result = multiplyNumbers(num1,num2);
            document.write(result);
            break;
    
        case "/":
            result = divideNumbers(num1,num2);
            document.write(result);
            break;
        
        default:
            alert("Please enter a valid operator");
    }
    
}
