// console.log('Hi');

const new_project = document.getElementById('new_project');
const div_menu = document.querySelector('.menu');

let count = 0;

new_project.addEventListener('click', () => {
    // console.log('Создал новый проект');

    div_menu.appendChild(button_for_project('Новый проект ' + count++, 0));
})