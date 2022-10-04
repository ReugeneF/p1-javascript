// Oefening 1
let one = 1;
let two = 2;

function calculate(one, two){
    return one + two;
}

document.getElementById("oef1").innerHTML = calculate(one, two);


//oefening 2

function multiplyByFive(first){
    return 5 * first;
}
document.getElementById("oef2").innerHTML = multiplyByFive(6);

//oefening 3

function checkInput(one, two){
    if(one > two){
        console.log(one);
    } else{
        console.log(two)
    }
}

checkInput(1,2);

//oefening 4

function calculateMinutes(value){
    return value / 60;
}
document.getElementById("oef4").innerHTML = calculateMinutes(3600);
