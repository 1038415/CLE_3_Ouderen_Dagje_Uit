const form = document.querySelector('#login-form');
const loginResult = document.querySelector('#login-result');
const registerBtn = document.querySelector('#register-btn');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Client-side validation
    if (!username || !password) {
        loginResult.innerText = 'Please fill in all fields';
        return;
    }

    // Send data to server using AJAX
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = () => {
        if (xhr.status === 200) {
            if (xhr.responseText === 'success') {
                // Set login status in localStorage
                localStorage.setItem('isLoggedIn', true);
                localStorage.setItem('username', username);
                // Redirect to home page
                window.location.href = 'logout.html';
            } else {
                loginResult.innerText = xhr.responseText;
            }
        } else {
            loginResult.innerText = 'Error logging in';
        }
    };
    xhr.send(`username=${username}&password=${password}`);
});

// Check localStorage for login status and username on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const username = localStorage.getItem('username');

    if (isLoggedIn === 'true' && username) {
        // Set greeting with username
        const greeting = document.createElement('p');
        greeting.innerText = `Welcome back, ${username}!`;
        document.body.appendChild(greeting);
    }
});

registerBtn.addEventListener('click', () => {
    window.location.href = 'register.html';
});