const closed = document.querySelector('.closed');
const open = document.querySelector('.open');

//als je erop
closed.addEventListener('click', function () { //functie van closed
    if (closed.classList.contains('active')) { //checkt of het er is
        closed.classList.remove('active');//haalt het weg
        open.classList.add('active');//zet het erin
    }
});

open.addEventListener('click', function () {//functie van open
    if (open.classList.contains('active')) {//checkt of het er is
        open.classList.remove('active');//haalt het weg
        closed.classList.add('active');//zet het erin
    }
})

