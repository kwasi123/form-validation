const form = document.querySelector('.form');
const input = document.querySelectorAll('.input');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password1');
const password2 = document.getElementById('password2');
const button = document.getElementById('register-btn');
const errorMsg = document.querySelectorAll('.error-msg');

const errorMessages = {
    default: 'Field is required!',
    email: 'Invalid email!',
    username: 'Username should be 6 to 16 characters long!',
    password: {
        length: 'Password should be 8 to 16 characters long!',
        match: 'Passwords do not match',
    }
}


document.addEventListener('load', defaultErrorText(errorMessages));

function defaultErrorText(msg) {
    errorMsg.forEach(error => {
        error.textContent = msg.default;
    })
}

form.addEventListener('submit', function(event) {
    // event.preventDefault();
});

username.addEventListener('input', (event, error=errorMessages) => {
    if (username.value.length > 5 && username.value.length < 17) {
        document.querySelector('.username .success').style.display = 'block';
        document.querySelector('.username .error').style.display = 'none';
        username.parentNode.children[4].style.display = 'none';
    } else {
        document.querySelector('.username .success').style.display = 'none';
        document.querySelector('.username .error').style.display = 'block';
        username.parentNode.children[4].style.display = 'block';
        username.parentNode.children[4].textContent = error.username;
    }
})

email.addEventListener('input', (event, error=errorMessages) => {
    const emailValue = email.value;
    const pattern = /^[a-z][a-zA-Z0-9.-]+@[a-zA-Z0-9.]+\.[a-z]+$/;
    const result = pattern.test(emailValue);
    
    if (result) {
        document.querySelector('.email .success').style.display = 'block';
        document.querySelector('.email .error').style.display = 'none';
        email.parentNode.children[4].style.display = 'none';
    } else {
        document.querySelector('.email .success').style.display = 'none';
        document.querySelector('.email .error').style.display = 'block';
        email.parentNode.children[4].style.display = 'block';
        email.parentNode.children[4].textContent = error.email;
    }
})

password1.addEventListener('input', (event, error=errorMessages) => {
    const password1Length = password1.value.length;

    if (password1Length > 7 && password1Length < 17) {
        document.querySelector('.password1 .success').style.display = 'block';
        document.querySelector('.password1 .error').style.display = 'none';
        password1.parentNode.children[4].style.display = 'none';
    } else {
        document.querySelector('.password1 .success').style.display = 'none';
        document.querySelector('.password1 .error').style.display = 'block';
        password1.parentNode.children[4].style.display = 'block';
        password1.parentNode.children[4].textContent = error.password.length;
    }
})


password2.addEventListener('input', (event, error=errorMessages) => {
    const password2Value = password2.value;
    const password1Value = password1.value;

    if (password2Value === password1Value) {
        document.querySelector('.password2 .success').style.display = 'block';
        document.querySelector('.password2 .error').style.display = 'none';
        password2.parentNode.children[4].style.display = 'none';
    } else {
        document.querySelector('.password2 .success').style.display = 'none';
        document.querySelector('.password2 .error').style.display = 'block';
        password2.parentNode.children[4].style.display = 'block';
        password2.parentNode.children[4].textContent = error.password.match;
    }
})

