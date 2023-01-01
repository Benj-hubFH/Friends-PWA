/*  
AUTHORS: Müslüm Atas & Mathias Knoll
DESCRIPTION: The following code detects if the PWA is launched as an app or visited as a website.
SOURCE: https://stackoverflow.com/questions/50543163/can-i-detect-if-my-pwa-is-launched-as-an-app-or-visited-as-a-website
LAST CHANGE: 17.12.2022
*/

// Detects if device is on iOS
const isIos = () => {
    const userAgent = window.navigator.userAgent.toLowerCase();
    return /iphone|ipad|ipod/.test( userAgent );
}
// Detects if device is in standalone mode
const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

// Checks if 'install popup notification' should be displayed
if (isIos() && !isInStandaloneMode()) {
    this.setState({ showInstallMessage: true });
}


/*
created by Benjamin Lamprecht
30.12.2022
*/

var friends = [];
var menuBtn = document.getElementById('menuAdd');
var subMenu1 = document.getElementById('subMenu1');
var subMenu2 = document.getElementById('subMenu2');
var btnClicked = false;
var dialog = document.getElementById("comingSoon");

var me = document.getElementById('owner');

async function init() {
    await dummyValues();


    for (let i = 0; i < friends.length; i++) {
        let friend = JSON.parse(friends[i]);
        createLine(friend.name, friend.img);
    }
}

menuBtn.addEventListener('click', event => {
    btnClicked = !btnClicked;

    if(btnClicked) {
        menuBtn.style.transform = 'rotate(45deg)';
        subMenu1.style.visibility = 'visible';
        subMenu2.style.visibility = 'visible';
    }
    else {
        menuBtn.style.transform = 'rotate(0deg)';
        subMenu1.style.visibility = 'collapse';
        subMenu2.style.visibility = 'collapse';
    }
});

subMenu1.addEventListener('click', event => {
    openWindow();
});

subMenu2.addEventListener('click', event => {
    openWindow();
});

async function openWindow()
{
   dialog.showModal();
}

async function closeWindow() {
    dialog.close();
}

init();

function createFriend(name, img, attributes, messages) {
    let friend = {};
    friend.name = name;
    friend.img = img;
    friend.attributes = attributes;
    friend.messages = messages;
    return JSON.stringify(friend);
}

function createAttribute(title, content) {
    let attribute = {};
    attribute.title = title + ":";
    attribute.content = content;
    return JSON.stringify(attribute);
}

function createMessage(text, img) {
    let message = {};
    message.text = text;
    message.img = img;
    return JSON.stringify(message);
}

async function createLine(name, img) {
    let section = document.getElementById("list");
    let friend = document.createElement("div");
    let image = document.createElement("img");
    let nameSpan = document.createElement("span");

    friend.className = "friend"
    image.src = await img;
    nameSpan.innerHTML = name;


    section.appendChild(friend);
    friend.appendChild(image);
    friend.appendChild(nameSpan);

    friend.addEventListener('click', event => {
        friend.href = "friend.html";
        parent.location='friend.html';
    });
}


async function dummyValues() {
    let attributeArray = [];

    attributeArray.push(await createAttribute("Birthday", "31.12.1993"));
    attributeArray.push(await createAttribute("Lieblingsfarbe", "Blau"));
    attributeArray.push(await createAttribute("mein Haustier", "Filomena"));
    attributeArray.push(await createAttribute("wir kennen uns seid", "05.07.2010"));

    let attributes = await JSON.stringify(attributeArray);

    let messageArray = [];
    messageArray.push(await createMessage("I glaub du hast den Kontest für bestes Foto gewonnen. :)", "img\img_dummy.png"));

    let messages = JSON.stringify(messageArray);

    let friend = await createFriend("Stella", "img/stella.jpg", attributes, messages);
    friends.push(friend);
    friends.push(await createFriend("ipsum", "img/img51487947.jpg"));
    friends.push(await createFriend("dolor", "img/img159179884.jpg"));
    friends.push(await createFriend("sit", "img/q6d8h7l8.bmp"));
    friends.push(await createFriend("lorem2", "img/img159179884.jpg"));
    friends.push(await createFriend("ipsum2", "img/img51487947.jpg"));
    friends.push(await createFriend("dolor2", "img/img159179884.jpg"));
    friends.push(await createFriend("sit2", "img/q6d8h7l8.bmp"));
    friends.push(await createFriend("lorem3", "img/img159179884.jpg"));
    friends.push(await createFriend("ipsum3", "img/img51487947.jpg"));
    friends.push(await createFriend("dolor3", "img/img159179884.jpg"));
    friends.push(await createFriend("sit3", "img/q6d8h7l8.bmp"));

}