window.addEventListener('load', init);

let uitjesLink
let overonsLink
let contactLink
let inlogLink

function init()
{
    uitjesLink = document.getElementById('uitjes');
    uitjesLink.addEventListener('click', uitjesRedirect);
    overonsLink = document.getElementById('overons');
    overonsLink.addEventListener('click', overonsRedirect);
    contactLink = document.getElementById('contact');
    contactLink.addEventListener('click', contactRedirect);
    inlogLink = document.getElementById('inlog');
    inlogLink.addEventListener('click', inlogRedirect);
}

function uitjesRedirect(event){
    event.preventDefault()
    window.location.href = "uitjes.html";
}

function overonsRedirect(event){
    event.preventDefault()
    window.location.href = "overOns.html";
}

function contactRedirect(event){
    event.preventDefault()
    window.location.href = "contact.html";
}

function inlogRedirect(event){
    event.preventDefault()
    window.location.href = "login.html";
}
