class ElemMenu {
    backColor;
    textColor;
    headText;
    footText;
    headUrl;
    footUrl;

    ElemMenu(backColor, textColor, headText, footText, headUrl, footUrl) {
        this.backColor = backColor;
        this.textColor = textColor
        this.headText = headText;
        this.footText = footText;
        this.headUrl = headUrl;
        this.footUrl = footUrl;
    }
}

let array = [];
array.push(new ElemMenu(
    '#FFFFFF',
    "#000000",
    'A Portfolio Website',
    'projects after the course TheOdinProject',
    '',
    ''
));

array.push(new ElemMenu(
    '#001F54',
    "#FFE433",
    'Book of recipes',
    'Project: Recipes',
    'https://valerilursa.github.io/html/odin/recipes_project/index.html',
    'https://www.theodinproject.com/lessons/foundations-recipes'
));

let menu = document.querySelector(".menu");

array.forEach(elem => {
    let headA = document.createElement('a');
    headA.href = elem.headUrl;
    headA.textContent = elem.headText;

    let headDiv = document.createElement('div');
    headDiv.classList.add('rectangleTitle');
    headDiv.appendChild(headA);

    let footA = document.createElement('a');
    footA.href = elem.footUrl;
    footA.textContent = elem.footText;

    let line = document.createElement('div');

    let footDiv = document.createElement('div');
    footDiv.classList.add('rectangleText');
    footDiv.appendChild(line);
    footDiv.appendChild(footA);

    let div = document.createElement('div');
    div.classList.add(['elem_menu', 'rectangleHead']);
    div.appendChild(headDiv);
    div.appendChild(footDiv);
})

console.log('js file');
console.log(array);