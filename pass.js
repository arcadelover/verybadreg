const container = document.querySelector(".alert-container");
let pass1 = "";
let pass2 = "";
let trollflag = false;
let trollflag1 = false;

function outmessage(text)
{
    const alert = document.createElement("p");
    alert.textContent = text;
    container.appendChild(alert);
}

function matchingpass()
{
    pass1 = document.getElementById("password").value;
    pass2 = document.getElementById("passwordapprove").value;
    if (pass1 == pass2) {return true;}
    else {return false;}
}

function lessthaneight()
{
    pass1 = document.getElementById("password").value;
    if (pass1.length < 8) {return false;}
    else {return true;}
}

function morethaneight()
{
    pass1 = document.getElementById("password").value;
    if (pass1.length > 8) {return false;}
    else {return true;}
}

function containsOnlyLettersAndNumbers(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }
  

function specialchars()
{
    pass1 = document.getElementById("password").value;
    return containsOnlyLettersAndNumbers(pass1);
}

function firsthalf()
{
    pass1 = document.getElementById("password").value;
    if (pass1[0] == "p" && pass1[1] == "a" && pass1[2] == "s" && pass1[3] == "s") {return true;}
    else {return false;}
}

function secondhalf()
{
    pass1 = document.getElementById("password").value;
    if (pass1[4] == "w" && pass1[5] == "o" && pass1[6] == "r" && pass1[7] == "d") {return true;}
    else {return false;}
}

document.getElementById("submitbutton").addEventListener("click", function (event) {
    event.preventDefault();
    if (!matchingpass()) { outmessage("Пароли не совпадают!"); }
    else if (!lessthaneight()) { outmessage("Пароль должен содержать не менее 8ми символов!");}
    else if (!morethaneight()) { outmessage("Пароль должен содержать не более 8ми символов!");}
    else if (trollflag == false && specialchars()) { 
        outmessage("Пароль должен содержать как минимум один спец.символ");
        if (trollflag1 == false) {trollflag1 = true;}}
    else if (!specialchars()) { 
        outmessage("Пароль не должен содержать ни один спец.символ");
        if (trollflag1 != false) {trollflag = true;}}
    else if (!firsthalf()) { outmessage("Пароль должен начинаться со слова 'pass'");}
    else if (!secondhalf()) { outmessage("Пароль должен заканчиваться словом 'word'");}
    else {window.location.href = "secondpage.html";}
  });