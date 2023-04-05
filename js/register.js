const form = document.querySelector('#registration-form');
const cancelBtn = document.querySelector('#cancel-btn');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const firstName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const passwordVerify = document.querySelector('#password-verify').value;

    // Client-side validation
    if (password !== passwordVerify) {
        alert('Passwords do not match');
        return;
    }

    // Send data to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/register.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            alert(xhr.responseText);
            window.location.href = '../html/login.html';
        } else {
            alert('Error registering user');
        }
    };
    xhr.send(`first-name=${firstName}&last-name=${lastName}&email=${email}&password=${password}`);
});

cancelBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
});