let modal = document.getElementById('myModal');
let button = document.getElementById('button');
let span = document.getElementsByClassName('close')[0];
let outputText = document.getElementById('outputText');
let modalBackground = document.getElementById('modalBackground');

let age = document.getElementById('age');


button.onclick = function () {

    if (age.value < 18) {
        outputText.innerText = 'Helaas je bent te jong';
        outputText.style.color = 'white';
        modalBackground.classList.add('denied');
    } else {
        outputText.innerText = 'Je mag de website betreden';
        outputText.style.color = 'white';
        modalBackground.classList.add('granted');
    }

    modal.style.display = 'block';
}

span.onclick = function () {
    modal.style.display = "none";
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}