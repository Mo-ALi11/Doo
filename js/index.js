const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const validUsername = 'AdminSEF123';
    const validPassword = 'SeF@ctORy$$456';
    if (username === validUsername && password === validPassword) {
        window.location.href = './pages/todo.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
});