import { img_component } from "./main";

function contact_component() {
    const element = document.createElement('div');

    element.appendChild(block_component('https://upload.wikimedia.org/wikipedia/ru/9/99/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82.jpg', ''));

    element.appendChild(block_component('https://static.wikia.nocookie.net/gravityfalls/images/5/58/S1e9_waddles_eating_pizza.png/revision/latest?cb=20120913034012',
        'the author of the idea:'));

        element.appendChild(block_component('https://upload.wikimedia.org/wikipedia/ru/9/99/%D0%91%D0%B5%D0%BB%D1%8B%D0%B9_%D0%BA%D0%B2%D0%B0%D0%B4%D1%80%D0%B0%D1%82.jpg', ''));

    element.appendChild(block_component('http://sun9-23.userapi.com/impf/BEc6nA2C4UHv5LGj56d8KsjveNJ8c5FzFb6a-g/udg75VUN9zY.jpg?size=604x604&quality=96&sign=d9bb9d09b349f994f60fb0bec268a7f0&type=album',
        'website designer (also author):'));

    element.appendChild(block_component('https://i.pinimg.com/550x/75/bf/e4/75bfe4e4fa5f85a9cae67f32ec394ee2.jpg',
        'author\'s landlord:'));

    element.appendChild(block_component('https://static.wikia.nocookie.net/gravityfalls/images/4/47/S1e20_Waddles_brought_up.png/revision/latest?cb=20171029131123',
        'author\'s salary:'));

    return element;
}

function block_component(url, text) {
    const element = document.createElement('div');
    element.setAttribute('class', 'contact_div');

    const h2_down_image = document.createElement('h2');
    h2_down_image.textContent = text;

    element.appendChild(h2_down_image);

    const image_author = document.createElement('img');
    image_author.src = url;
    image_author.alt = 'image ' + text;

    element.appendChild(image_author);

    return element;
}

export {
    contact_component
};