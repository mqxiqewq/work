function cal() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) + parseInt(number2.value) ;
    result.innerHTML = sum;
}
function cal1() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) - parseInt(number2.value) ;
    result.innerHTML = sum;
}
function cal2() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) * parseInt(number2.value) ;
    result.innerHTML = sum;
}
function cal3() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) / parseInt(number2.value) ;
    result.innerHTML = sum;
}
function cal4() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) % parseInt(number2.value) ;
    result.innerHTML = sum;
}
function cal5() {
    let number1 = document.getElementById("number1");
    let number2 = document.getElementById("number2");
    let result = document.getElementById("result");
    let sum = parseInt(number1.value) ** parseInt(number2.value) ;
    result.innerHTML = sum;
}
function cal6() {
    let number3 = document.getElementById("number3");
    let result = document.getElementById("result");
    let sum = parseInt(number3.value) * 0.078 ;
    result1.innerHTML = sum;
}

