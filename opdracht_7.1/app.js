let budget = 100;
let product = prompt("Prijs van je product")

function enough(){
    if(budget - product < 0){
    alert("You cannot afford this product")
    } else{
        alert("You can afford this product")
    }
}

enough()

