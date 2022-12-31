/*
created by Benjamin Lamprecht
09.11.2022
*/

var text;
const myEvent = new CustomEvent('myEvent');

// Listen for the event.
document.addEventListener("myEvent", (e) => {
    document.getElementById('output').innerHTML += (text.value);
    document.getElementById('output').innerHTML += "<br>";
});

// Dispatch the event when key pressed.
document.addEventListener("keydown", (e) => {
    if (e.key == 'Enter') {
        text = document.getElementById('text');
        document.dispatchEvent(myEvent);
    }
}, false);
