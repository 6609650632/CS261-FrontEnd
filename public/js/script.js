document.getElementById('loginForm').addEventListener('input', checkFormCompletion);

function checkFormCompletion() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const loginButton = document.getElementById('loginButton');

    if (username && password && role) {
        loginButton.disabled = false;
    } else {
        loginButton.disabled = true;
    }
}

function submitLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (!username || !password || !role) {
        document.getElementById('message').innerText = 'Please fill out all fields.';
        return;
    }

    fetch('https://restapi.tu.ac.th/api/v1/auth/Ad/verify', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Application-Key': 'TU726eac9dabb2e80f852781cc5ca76bf1faaeacd6c2cd46d9808f88e704870576bee95fc4cce8321baff0af755c8e5e8a'
            //Application-Key ของเพื่อนค่ะ เนื่องจากคิวอาโค้ดมีปัญหาค่ะ
        },
        body: JSON.stringify({ username, password, role })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('message').innerText = data.message;
    })
    .catch(error => console.error('Error:', error));
}

function call_REST_API_Hello() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const url = (
        'http://localhost:8080/hello?' +
        new URLSearchParams({ myName: username, lastName: password }).toString()
    );
    
    fetch(url)
    .then(response => response.text())
    .then(text => {
        document.getElementById('message').innerText = text;
    })
    .catch(error => console.error('Error:', error));
}

document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordField.setAttribute('type', type);
    this.textContent = type === 'password' ? '👁️' : '👁‍🗨️';
});

