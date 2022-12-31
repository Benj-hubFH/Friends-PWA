/*
created by Benjamin Lamprecht
06.12.2022
*/

let x = document.cookie;

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    // split "all cookie string" to receive one specific cookie
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setKeyValues(key, value) {
    keyValue = key + '=' + value + ';';
    setCookie();
}

var keyValue = "";

function setCookie() {
    var time = new Date();
    time.setMinutes(time.getMinutes() + 60);
    let expires = "expires=" + time.toUTCString();
    document.cookie = keyValue + ";" + expires + ";path=/";
}

function checkCookie(cname, cask) {
    let tmpCookieValue = getCookie(cname);

    if (tmpCookieValue == "" || tmpCookieValue == null) {
        tmpCookieValue = prompt(cask, "");
    }

    setKeyValues(cname, tmpCookieValue);
    return tmpCookieValue;
}

function checkname() {
    let cFirstname = checkCookie("firstname", "Please enter your firstname:");
    let cLastname = checkCookie("lastname", "Please enter your lastname:");
    if (cFirstname != "" && cLastname != "") {
        document.getElementById("firstname").innerHTML = cFirstname;
        document.getElementById("lastname").innerHTML = cLastname;
        return;
    }

    checkname();
}

checkname();
