window.addEventListener('load', init);

let rotterdamImage
let rotterdamLink
let goBack

let showModal
let favDialog
let modalCloseButton


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

    showModal = document.getElementById('showDialog');
    showModal.addEventListener("click", buttonShow)

    modalCloseButton = document.getElementById('modalClose');
    modalCloseButton.addEventListener('click', closeModal);

    favDialog = document.getElementById('favDialog');
    favDialog.addEventListener('close', closeModal)
}

function place(event){
    event.preventDefault()
    window.open("https://www.google.com/maps/place/Wijnhaven+107,+3011+WN+Rotterdam/@51.9179912,4.4808679,16.18z/data=!4m5!3m4!1s0x47c4335dd6b0b5a3:0x3b8dcf047e6f0073!8m2!3d51.9173974!4d4.4839175?hl=nl", '_blank');
}

function homePage(event){
    event.preventDefault()
    document.location.href = 'index.html'
}

//clicking
function buttonShow(event) {
    event.preventDefault()
    favDialog.showModal();
}

function closeModal(event) {
    event.preventDefault();
    favDialog.close();
}









favDialog.addEventListener('close', () => {
    outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});

