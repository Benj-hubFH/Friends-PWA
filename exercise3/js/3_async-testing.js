/*
created by Benjamin Lamprecht
15.11.2022
*/

var images = [];
var loadedImages = [];
var InitSrc = "assets/";
var LoadSrc = "assets/assets/";
var container = document.createElement("div");
document.body.appendChild(container);

readJson();
function readJson() {
    fetch("assets/assets/generated.json")
    .then(response => response.json())
    .then(json => {
        this.entries = json;
        console.log("entities read from JSON: "+ this.entries.length);
        for (let i = 0; i < 10; i++) {
            console.log('#' + (i+1) + ": " + this.entries[i].name);
        }
    })
    .catch(function () {
        console.log("JSON went to hell...didn't come back");
    });
 }

srcToImage(InitSrc, "demo1.jpg", "demo2.jpg");
async function srcToImage() {
    for (let i = 1; i < arguments.length; i++) {
        const j = i;
        images[j] = new Image();
        await fetchImage(images[j], arguments[0] + arguments[j]);
        container.appendChild(images[j]);
    }
    return true;
}
async function loadedSrcToImage() {
    for (let i = 1; i < arguments.length; i++) {
        const j = i;
        loadedImages[j] = new Image();
        await fetchImage(loadedImages[j], arguments[0] + arguments[j]);
    }
    return true;
}

function fetchImage(image, str) {
    fetch(str)
        .then(response => response.blob())
        .then(imageBlob => {
            image.src = URL.createObjectURL(imageBlob);
        });
}

var myPromise = new Promise(function (resolve, reject) {
    setTimeout(function() {reject("Timeout Connection Error");}, 5000);
    if (loadedSrcToImage(LoadSrc, "demo1.jpg", "demo2.jpg")) resolve("OK 200");
    else reject("Files not Found Connection Error");
    
});

myPromise.then(
    function (resolve) 
    { 
        console.log("...loading events");
        if(addEventToImages())
        console.log("loading success: " + resolve);
        else
        console.log("events failed to load");
    },
    function (error) {
        console.log("loading failed: " + error);
    }
);

function addEventToImages() {
    for (let i = 1; i < images.length; i++) {
        const j = i;
        images[j].addEventListener('click', function () {
            images[j].src = loadedImages[j].src;
        });
    }
    return true;
}


function writeToConsole(string) {
    console.log(string);
}

function fRun(callback) {
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
        if (Math.floor(Math.random() * 2) == 1) {
            result++;
        } else {
            result--;
        }
    }
    console.log(`Does math random work correct? ('0' if perfectly true): ${result}`);
    callback(result);
}

fRun(writeToConsole);
