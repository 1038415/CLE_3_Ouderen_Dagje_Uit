window.addEventListener('load', init);

let registerForm
let firstNameField
let lastNameField
let mailField
let passwordField
let confirmField
let registerSubmit
let registerCancel

let xhttp = new XMLHttpRequest()

function init () {
    registerForm = document.getElementsByClassName("columns")
    firstNameField = document.getElementById("first_name")
    lastNameField = document.getElementById("last_name")
    mailField = document.getElementById("email")
    passwordField = document.getElementById("password")
    confirmField = document.getElementById("verify")
    registerSubmit = document.getElementById("geregistreerd")
    registerCancel = document.getElementById("geannuleerd")
    registerForm.addEventListener("submit", registerSubmitHandler)
}

function registerSubmitHandler(event) {
    event.preventDefault()
    xhttp.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200){
            let response = this.responseText;
            console.log(response);
        }
    }
    let data = new FormData;
    data.append("first_name", firstNameField.value)
    data.append("last_name", lastNameField.value)
    data.append("email", mailField.value)
    data.append("password", passwordField.value)
    xhttp.open("POST", "../php/registreren.php", true)
    xhttp.send(data)
    console.log(data)
}