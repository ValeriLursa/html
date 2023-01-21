const menu_text = [
    ["1.jpg", "Pizza 'Margherita'", "350 rub"],
    ["2.jpg", "Caesar salad", "280 rub"],
    ["3.jpg", "Pasta 'Carbonara'", "320 rub"],
    ["4.jpeg", "Lasagna Bolognese", "220 rub"],
    ["5.jpg", "Cheesecake 'New York'", "180 rub"]
]

function menu_component(array, name_array) {
    const element = document.createElement('div');
    element.id = name_array;
    for (let i = 0; i < array.length; i++) {
        const div_element = document.createElement('div');
        const image = document.createElement('img');
        image.src = 'img/' + array[i][0];
        image.alt = 'image '+ array[i][0];
        const name_image = document.createElement('p');
        name_image.textContent = array[i][1];
        const price_image = document.createElement('p');
        price_image.textContent = array[i][2];

        div_element.appendChild(image);
        div_element.appendChild(name_image);
        div_element.appendChild(price_image);
        element.appendChild(div_element);
    }
    return element;
}

export{
    menu_component, menu_text
}