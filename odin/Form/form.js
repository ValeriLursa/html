password_second.addEventListener('blur', () => {
    let password_first = document.querySelector('#password_first');
    let password_second = document.querySelector('#password_second');
    if (password_first.value != password_second.value) {
        console.log(false);
    }
    else console.log(true);
    console.log(password_first.value, password_second.value);
})

console.log('js file');