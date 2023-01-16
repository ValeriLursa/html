function h1_component(){
    const element = document.createElement('h1');
    element.textContent = 'Restaurant VaLurs';
    return element;
}

function h2_component(){
    const element = document.createElement('h2');
    element.textContent = 'Panoramic restaurant in the center of St. Petersburg';
    return element;
}

function img_component(){
    const element = document.createElement('img');
    const src_img = 'https://media-cdn.tripadvisor.com/media/photo-s/03/f8/ad/a4/luce.jpg';
    element.src = src_img;
    element.id = 'main_image';
    element.alt ='Image restaurant';
    return element;
}

export {h1_component,
h2_component,
img_component
};