/*
created by Benjamin Lamprecht
06.12.2022
*/

var local = 0;

try{
    local = localStorage.getItem("visits");
    localStorage.setItem("visits", ++local);
}catch{
    localStorage.setItem("visits", 1);
    local = localStorage.getItem("visits");
}

document.getElementById("local").innerHTML = local;

var session = 0;

try {
    session = sessionStorage.getItem("visits");
    sessionStorage.setItem("visits", ++session);
} catch {
    sessionStorage.setItem("visits", 1);
    session = sessionStorage.getItem("visits");
}

document.getElementById("session").innerHTML = session;
