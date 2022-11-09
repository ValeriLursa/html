let divMessage = document.createElement('div');
divMessage.textContent = '*Error';
divMessage.setAttribute('class', 'errorMessage');
let password_first = document.querySelector('#password_first');
let password_second = document.querySelector('#password_second');

password_first.addEventListener('blur', () => {
    if (password_first.value == '') {
        password_first.setAttribute('class', 'invalid')
        password_first.parentElement.appendChild(divMessage);
    }
    else {
        password_first.setAttribute('class', 'valid');
        if (password_first.parentElement.children.length == 3)
            password_first.parentElement.removeChild(divMessage)
    }
})

// password_first.oninvalid = (event) => {
//     event.target.setCustomValidity('Password cannot be empty');
// }

password_second.addEventListener('blur', () => {
    if (password_first.value != password_second.value || password_first.value == '') {
        console.log(false);
        password_second.setAttribute('class', 'invalid');
        password_second.parentElement.appendChild(divMessage);
    }
    else {
        password_second.setAttribute('class', 'valid');
        if (password_second.parentElement.children.length == 3)
            password_second.parentElement.removeChild(divMessage)
    }
    console.log(password_first.value, password_second.value);
})

let messageInput = {
    "first_name": 'Name should start with a capital letter and contain only letters. e.g. Mike',
    "last_name": 'Name should start with a capital letter and contain only letters. e.g. Wazowski',
    'email': 'Email should contain symbol @ and .',
    'phone': 'Phone number must be numeric and contain 10 characters'
}

let patternInput = {
    "first_name": /^[A-Z]{1}[a-z]{1,14}$/,
    "last_name": /^[A-Z]{1}[a-z]{1,14}$/,
    "email": /^[a-zA-Z0-9_.+-]+@[a-z0-9-]+\.[a-z]{2,}$/,
    "phone": /^[0-9]{10}$/
}

let inputArray = document.querySelectorAll('.inputArray');
inputArray.forEach(elem => {
    // elem.oninvalid = (event) => {
    //     event.target.setCustomValidity(messageInput[elem.id]);
    //     // elem.setAttribute('class', 'error');
    // }

    elem.addEventListener('blur', () => {
        let result = elem.value.match(patternInput[elem.id]);
        if (result && elem.value === elem.value.match(patternInput[elem.id]).input) {
            // if (result){
            // console.log('true');
            elem.classList.remove('invalid');
            elem.classList.remove('valid');
            elem.classList += ' valid';
        }
        else {
            // console.log('false');
            elem.classList.remove('valid');
            elem.classList.remove('invalid');
            elem.classList += ' invalid';
        }
    })

    elem.addEventListener('focus', () => {
        return true;
    })
});

let firstName = document.getElementById('first_name');
// firstName.oninvalid = function (event) {
//     event.target.setCustomValidity('Name should start with a capital letter and contain only letters. e.g. Mike');
//     firstName.setAttribute('class', 'error');
// }

let lastName = document.getElementById('last_name');
// lastName.oninvalid = function (event) {
//     event.target.setCustomValidity('Name should start with a capital letter and contain only letters. e.g. Wazowski');
//     lastName.setAttribute('class', 'error');
// }

// email.oninvalid = (event) => {
//     event.target.setCustomValidity('Email should contain symbol @ and .');
//     email.setAttribute('class', 'error');
// }

console.log('js file');

//test pattern
