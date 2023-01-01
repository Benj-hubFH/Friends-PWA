/*
created by Benjamin Lamprecht
30.12.2022
*/

var friends = [];

var sendBtn = document.getElementById('sendBtn');
var resetBtn = document.getElementById('back');
var friends = [];
var friend;
var attributes;
var messages;

var dialog = document.getElementById("dialogSendMessage");
var notification = document.getElementById("notification");

async function init() {
    await dummyValues();

    friend = JSON.parse(friends[0]);
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

async function dummyValues() {
    let attributeArray = [];

    attributeArray.push(await createAttribute("Birthday", "31.12.1993"));
    attributeArray.push(await createAttribute("Lieblingsfarbe", "Blau"));
    attributeArray.push(await createAttribute("mein Haustier", "Filomena"));
    attributeArray.push(await createAttribute("wir kennen uns seid", "05.07.2010"));

    let attributes = await JSON.stringify(attributeArray);

    let messageArray = [];
    messageArray.push(await createMessage("I glaub du hast den Kontest für bestes Foto gewonnen. :)", "img/img_dummy.png"));

    let messages = JSON.stringify(messageArray);

    let friend = await createFriend("Stella", "img/stella.jpg", attributes, messages);
    friends.push(friend);
}
