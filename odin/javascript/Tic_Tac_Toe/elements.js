// const crosses = document.createElement('img');
// crosses.setAttribute('src', 'crosses.png');
// crosses.setAttribute('alt', 'Image crosses');

const ElementImage = (elem) => {
    let elementImage;

    if (elem == 'o') {
        elementImage = document.createElement('img');
        elementImage.setAttribute('src', 'ziro.png');
        elementImage.setAttribute('alt', 'Image ziro');
    }
    
    if (elem == 'x'){
        elementImage = document.createElement('img');
        elementImage.setAttribute('src', 'crosse.png');
        elementImage.setAttribute('alt', 'Image crosse');
    }

    const getElem = () => elementImage;

    return {
        getElem
    }
}