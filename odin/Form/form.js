let divMessage = document.createElement('div');
divMessage.textContent = '*Error';
divMessage.setAttribute('class', 'errorMessage');
let password_first = document.querySelector('#password_first');
let password_second = document.querySelector('#password_second');

password_first.addEventListener('blur', () => {
    if (password_first.value == '') {
        password_first.setAttribute('class', 'error')
        console.log(password_first.parentElement)

        password_first.parentElement.appendChild(divMessage);
    }
    else {
        password_first.setAttribute('class', 'valid');
        password_first.parentElement.removeChild(divMessage)
    }
})

password_second.addEventListener('blur', () => {
    if (password_first.value != password_second.value || password_first.value == '') {
        console.log(false);
        password_second.setAttribute('class', 'error');
        password_second.parentElement.appendChild(divMessage);
    }
    else {
        password_second.setAttribute('class', 'valid');
        password_second.parentElement.removeChild(divMessage)
    }
    console.log(password_first.value, password_second.value);
})

console.log('js file');