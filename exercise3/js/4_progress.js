/*
created by Benjamin Lamprecht
03.12.2022
*/

var progresscontainer = document.createElement("header");
var progressbar = document.createElement("div");
var container = document.createElement("div");
document.body.appendChild(progresscontainer);
document.body.appendChild(container);

fileProgressBar();

function getProgress(req) {
    req.onprogress = function (e) {
        progress.max = e.total;
        progress.value = e.loaded;
        var percent = (e.loaded / e.total) * 100;
        percent = Math.floor(percent);
        progressbar.style.width = percent + "%";
    }
}

function fileProgressBar() {
    progresscontainer.style.backgroundColor = "grey";
    progressbar.style.width = "1%";
    progressbar.style.backgroundColor = "red";
    progressbar.style.height = ".5em";
    progresscontainer.appendChild(progressbar);
}

function displayInfo(data) {
    container.innerHTML += data + "<br>";
}


const progress = new CustomEvent("progess");


let req = new XMLHttpRequest();
let loadJsonPromise = new Promise(function(myResolve, myReject) {
    req.open('GET', "assets/assets/generated.json");
    req.onload = function() {
        if (req.status == 200) {
            myResolve(req.response); // success
        } else {
            myReject("File not Found"); // failure or error
        }
    };
    getProgress(req);
    req.send();
    document.body.removeChild(progresscontainer);
});

loadJsonPromise.then(
    function(value) { printJson(JSON.parse(value)) }, // success
    function(error) {displayInfo(error);}  // failure
)

function printJson(json) {
    this.entries = json;
    displayInfo("entities read from JSON: " + this.entries.length);
        for (let i = 0; i < 10; i++) {
            displayInfo('#' + (i + 1) + ": " + this.entries[i].name);
            console.log('#' + (i + 1) + ": " + this.entries[i].name)
        }
}
