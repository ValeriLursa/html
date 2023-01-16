const menu_text = ["Carbonara 200 rub", "Beer 100 rub", "Tiramisu 180 rub"]

function ul_component(array, name_array) {
    const element = document.createElement('ul');
    element.id = name_array;
    for (let i = 0; i < array.length; i++) {
        const li_element = document.createElement('li');
        li_element.textContent = array[i];
        element.appendChild(li_element);
    }
    return element;
}

export{
    ul_component, menu_text
}