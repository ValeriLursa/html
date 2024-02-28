function button_for_project(text, count) {
    const div_element = document.createElement('div');
    const element = document.createElement('button');
    element.textContent = text;
    element.id = text;
    element.getAttribute('class', 'button_prject');

    element.addEventListener('click', () => {
        console.log('Кликаем', count++);
        const content = document.querySelector('.content');
        clear_div_content(content);
        content.appendChild(project_panel(element.textContent));
    });

    div_element.appendChild(element);

    const button_delet_project = document.createElement('button');
    button_delet_project.textContent = 'x';
    button_delet_project.id = text + ' del';

    button_delet_project.addEventListener('click', () => {
        console.log('Удаляю проект');
    })

    div_element.appendChild(button_delet_project);

    return div_element;
}

function clear_div_content(div_content) {
    while (div_content.firstChild)
        div_content.removeChild(div_content.firstChild);
}

function project_panel(name_project) {
    const element = document.createElement('div');
    const div_name_project = document.createElement('input');
    div_name_project.value = name_project;

    element.appendChild(div_name_project);

    const button_edit_div_name_project = document.createElement('button');
    button_edit_div_name_project.id = 'button_div_name_project';
    button_edit_div_name_project.textContent = 'Save';
    button_edit_div_name_project.addEventListener('click', () => {
        const button_project = document.getElementById(name_project);
        button_project.textContent = div_name_project.value;
        button_project.id = div_name_project.value;
        console.log('Меняем название проекта');
    })

    element.appendChild(button_edit_div_name_project);

    return element;
}