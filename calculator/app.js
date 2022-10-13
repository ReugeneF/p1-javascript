let n1 = document.getElementById('num_1');
let n2 = document.getElementById('num_2');
let answer = document.getElementById('answer');

//Calculates number when using multiply
function multiply(){
    let answer = n1.value* n2.value;

    if(n1.value < 0 && n2.value < 0){
        document.getElementById('answer').innerText = "inavlid number"
    } else{
        document.getElementById('answer').innerText = "Het antwoord is " + answer;
    }
}
//Calculates number when dividing
function devide(){
    let answer = n1.value / n2.value;
    document.getElementById('answer').innerText = answer;
    
    if(n1.value < 0 && n2.value < 0){
        document.getElementById('answer').innerText = "inavlid number"
    } else{
        document.getElementById('answer').innerText = "Het antwoord is " + answer;
    }
}
//Calculates number when using plus
function plus(){
    let answer = Number(n1.value) + Number(n2.value);
    document.getElementById('answer').innerText = answer;
    
    if(n1.value < 0 && n2.value < 0){
        document.getElementById('answer').innerText = "inavlid number"
    } else{
        document.getElementById('answer').innerText = "Het antwoord is " + answer;
    }
}
//Calculates number when using minus
function minus(){
    let answer = n1.value - n2.value;
    document.getElementById('answer').innerText = answer;

    if(n1.value < 0 && n2.value < 0){
        document.getElementById('answer').innerText = "inavlid number"
    } else{
        document.getElementById('answer').innerText = "Het antwoord is " + answer;
    }
} 






