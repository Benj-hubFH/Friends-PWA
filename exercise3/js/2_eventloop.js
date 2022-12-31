/*
created by Benjamin Lamprecht
08.11.2022
*/

function fRun() {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        if (Math.floor(Math.random() * 2) == 1) {
            result++;
        } else {
            result--;
        }
    }
    console.log(`Does math random work correct? ('0' if perfectly true): ${result}`);
    return result;
}

var sumOfRuns = 0;
var runs = 0;
var averageDifference = 0;

function testRun() {
    let result = fRun();
    sumOfRuns += result;
    averageDifference = sumOfRuns / ++runs;
    console.log("AVERAGE DIFFERENCE: " + averageDifference);
}

//Buttons
var btn1 = document.getElementById('ev1');
var btn2 = document.getElementById('ev2');
var btn3 = document.getElementById('ev3');

btn1.addEventListener('click', event => {
    testRun();
    setTimeout(function (){btn2.click();
    console.log("goddammit JIM!")
}, 3000);
    btn3.click();
    console.log("WAIT JIM IS COMING!")
});

btn2.addEventListener('click', event => {
    console.log("¯\_(ツ)_/¯"); 
});

btn3.addEventListener('click', event => {
    btn3.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
});

