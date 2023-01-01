/*
created by Benjamin Lamprecht
30.12.2022
*/



var sendBtn = document.getElementById('sendBtn');
var resetBtn = document.getElementById('back');

var friend;
var attributes;
var messages;

var dialog = document.getElementById("dialogSendMessage");
var notification = document.getElementById("notification");

function getSession() {
    return sessionStorage.getItem("friend");
}

async function init() {
    friend = JSON.parse(getSession());
    let attributes = JSON.parse(friend.attributes);
    for (let i = 0; i < attributes.length; i++) {
        let attribute = JSON.parse(attributes[i]);
        await createAttributeLine(attribute.title, attribute.content);
    }

    let messages = JSON.parse(friend.messages);
    for (let i = 0; i < messages.length; i++) {
        let message = JSON.parse(messages[i]);
        await createMessageLine(message.text, message.img);
    }

}

async function openWindow()
{
   dialog.showModal();
}

async function sendMessage() {
    dialog.close();

    notification.innerHTML = document.getElementById('content').value;
    notification.showModal();

    setTimeout(function (){
        notification.close();
        console.log("goddammit!")
    }, 3000);
}

function back() {
    parent.location='friends.html';
}

init();

async function createAttributeLine(titleTxt, contentTxt) {
    let section = document.getElementById("listAttributes");
    let attribute = document.createElement("div");
    let title = document.createElement("span");
    let content = document.createElement("span");
    let image = document.createElement("img");
    image.src = "img/attribute.png";

    attribute.className = "attribute";
    title.className = "title";
    content.className = "content";

    title.innerHTML = titleTxt;
    content.innerHTML = contentTxt;

    section.appendChild(attribute);
    attribute.appendChild(image);
    attribute.appendChild(title);
    attribute.appendChild(content);
}

async function createMessageLine(messageText, img) {
    let section = document.getElementById("listMessages");
    let container = document.createElement("div");
    let text = document.createElement("p");
    let image = document.createElement("img");

    container.className = "message";
    text.innerHTML = messageText;
    image.src = await img;

    section.appendChild(container);
    container.appendChild(text);
    container.appendChild(image);
}
