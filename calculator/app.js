let n1 = document.getElementById('num_1');
let n2 = document.getElementById('num_2');
let answer = document.getElementById('answer');

function multiply(){
    let num1 = n1.value;
    let num2 = n2.value;
    let answer = num1 * num2;
}

function devide(){
    let num1 = n1.value;
    let num2 = n2.value;
    let answer = num1 / num2;
}

function plus(){
    let num1 = n1.value;
    let num2 = n2.value;
    let answer = Number(num1) + Number(num2);
}
function minus(){
    let num1 = n1.value;
    let num2 = n2.value;
    let answer = num1 - num2;
}
function anw(){
document.getElementById('answer').innerText = answer;
}
anw()






