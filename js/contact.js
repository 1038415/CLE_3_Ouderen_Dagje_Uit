window.addEventListener('load', init);

let rotterdamImage
let rotterdamLink
let goBack

let showButton
let favDialog
let outputBox
let selectEl
let confirmBtn

function init()
{
    //brings you to a map
    rotterdamImage = document.getElementById('wijnhavenMap');
    rotterdamImage.addEventListener('click', place);

    rotterdamLink = document.getElementById('wijnhavenLink');
    rotterdamLink.addEventListener('click', place);

    //brings you back to the homepage
    goBack = document.getElementById('backToHome');
    goBack.addEventListener('click', homePage);

    showButton = document.getElementById('send');
    showButton.addEventListener('click', buttonShow)

    favDialog = document.getElementById('favDialog');


    outputBox = document.querySelector('output');


    selectEl = document.getElementById('valueReturn');
    selectEl.addEventListener('change',elSelect)


    confirmBtn = document.getElementById('seeValue');
}

function place(event){
    event.preventDefault()
    window.open("https://www.google.com/maps/place/Wijnhaven+107,+3011+WN+Rotterdam/@51.9179912,4.4808679,16.18z/data=!4m5!3m4!1s0x47c4335dd6b0b5a3:0x3b8dcf047e6f0073!8m2!3d51.9173974!4d4.4839175?hl=nl", '_blank');
}

function homePage(event){
    event.preventDefault()
    document.location.href = 'index.html'
}








showButton.addEventListener('click', () => {
    favDialog.showModal();
});

selectEl.addEventListener('change', (e) => {
    confirmBtn.value = selectEl.value;
});

favDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});

