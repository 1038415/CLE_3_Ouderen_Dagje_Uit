window.addEventListener('load', init);

let rotterdamImage
let rotterdamLink

function init()
{
    rotterdamImage = document.getElementById('wijnhavenMap');
    rotterdamImage.addEventListener('click', place);
    rotterdamLink = document.getElementById('wijnhavenLink');
    rotterdamLink.addEventListener('click', place);
}

function place(event){
    event.preventDefault()
    window.location.href = "https://www.google.com/maps/place/Wijnhaven+107,+3011+WN+Rotterdam/@51.9179912,4.4808679,16.18z/data=!4m5!3m4!1s0x47c4335dd6b0b5a3:0x3b8dcf047e6f0073!8m2!3d51.9173974!4d4.4839175?hl=nl";
}
