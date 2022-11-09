let password_first = document.querySelector('#password_first');
let password_second = document.querySelector('#password_second');

let messageInput = {
    "first_name": 'Name should start with a capital letter and contain only letters. e.g. Mike',
    "last_name": 'Name should start with a capital letter and contain only letters. e.g. Wazowski',
    'email': 'Email should contain symbol @ and .',
    'phone': 'Phone number must be numeric and contain 10 characters',
    'password_first': 'Password must be more than 7 characters long, contain at least one uppercase letter and a special character (!@#$%^&*_), can contain numbers',
    'password_second': 'Cell values do not match'
}

let patternInput = {
    "first_name": /^[A-Z]{1}[a-z]{1,14}$/,
    "last_name": /^[A-Z]{1}[a-z]{1,14}$/,
    "email": /^[a-zA-Z0-9_.+-]+@[a-z0-9-]+\.[a-z]{2,}$/,
    "phone": /^[0-9]{10}$/,
    'password_first': /^(?=.*[0-9])(?=.*[!@#$%^&*_])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*_]{6,}$/
    // 'password_first': /^[0-9]+$/
}

function removeClass(elem) {
    elem.classList.remove('invalid');
    elem.classList.remove('valid');
}

function checkInputPattern(elem) {
    let result = elem.value.match(patternInput[elem.id]);
    if (result) {
        matchTrue(elem);
    }
    else {
        matchFalse(elem);
    }
    return true;
}

function matchTrue(elem) {
    removeClass(elem);
    elem.classList += ' valid';
    elem.setCustomValidity('')
}

function matchFalse(elem) {
    removeClass(elem);
    elem.classList += ' invalid';
    elem.setCustomValidity(messageInput[elem.id]);
}

function checkPassword(elem1, elem2){
    if (elem1.value != elem2.value) {
        matchFalse(elem2);
        return;
    }
    matchTrue(elem2);
}

password_first.addEventListener('blur', () => {
    checkInputPattern(password_first);
})

password_first.addEventListener('input', () => {
    password_first.setCustomValidity('');
})

password_second.addEventListener('input', () => {
    password_second.setCustomValidity('');
})

password_second.addEventListener('blur', () => {
    checkPassword(password_first, password_second);
})


let inputArray = document.querySelectorAll('.inputArray');
inputArray.forEach(elem => {
    elem.addEventListener('blur', () => {
        checkInputPattern(elem);
    })

    elem.addEventListener('input', () => {
        elem.setCustomValidity('');
    })
});

let firstName = document.getElementById('first_name');

let lastName = document.getElementById('last_name');

console.log('js file');

let button = document.getElementById('button');

button.addEventListener('click', () => {
    inputArray.forEach(elem => {
        checkInputPattern(elem);
    })
    checkInputPattern(password_first);
    checkPassword(password_first, password_second);
})