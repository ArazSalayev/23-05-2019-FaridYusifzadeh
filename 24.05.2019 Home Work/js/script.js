

function checkUppercase(word) {
    for (i = 0; i < word.length; i++) {
        if (word[i] === word[i].toUpperCase() && isNaN(word[i])) {
            return true;
        }

    }
    return false;
}

function alertText(str) {
    var small = document.createElement("small");
    small.classList.add("text-danger");
    small.id="errortext"
    small.innerText = str;
    return small;
}

function changemsg(str, tagname) {
    var msg = alertText(str)
    document.getElementById(tagname).parentNode.appendChild(msg)
}

document.querySelector("#submit").onclick = function () {

    var passwordfirst = document.getElementById("password").value;
    var passwordsecond = document.getElementById("passwordagain").value;
    var button = document.querySelector("#submit");
    if (passwordfirst.length < 8) {
        changemsg("Şifrə 8 simvoldan ibarət olmalıdır\t", "password")
    }
    else if (passwordfirst != passwordsecond) {
        changemsg("Bərabər deyil\t", "password")
    }

    else if (!checkUppercase(passwordfirst)) {
        changemsg("Böyük hərf yoxdur\t", "password")
    }

    else if (passwordfirst.indexOf(" ") != -1) {
        changemsg("Şifrədə ara buraxmaq olmaz\t", "password")
    }
    else {
        changemsg("ugurlu", "submit")
        document.getElementById("submit")
        errors = document.querySelectorAll("#errortext")
        for(i=0;i<errors.length - 1;i++){
           
            errors[i].remove()
        }
    }
   
}

secondinput = document.getElementById("passwordagain")
secondinput.addEventListener("focus", function() {
    var passwordfirst = document.getElementById("password").value;
    var passwordsecond = document.getElementById("passwordagain").value;
    var button = document.querySelector("#submit");
    if (passwordfirst.length < 8) {
        changemsg("Şifrə 8 simvoldan ibarət olmalıdır\t", "password")
    }
    else if (passwordfirst != passwordsecond) {
        changemsg("Bərabər deyil\t", "password")
    }

    else if (!checkUppercase(passwordfirst)) {
        changemsg("Böyük hərf yoxdur\t", "password")
    }

    else if (passwordfirst.indexOf(" ") != -1) {
        changemsg("Şifrədə ara buraxmaq olmaz\t", "password")
    }
    else {
        changemsg("ugurlu", "submit")
        document.getElementById("submit")
        errors = document.querySelectorAll("#errortext")
        for(i=0;i<errors.length - 1;i++){
           
            errors[i].remove()
        }
    }
   
})






