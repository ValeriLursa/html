class ElemMenu {
    backColor;
    textColor;
    headText;
    footText;
    headUrl;
    footUrl;
    line;

    constructor(backColor, textColor, headText, footText, headUrl, footUrl, line) {
        this.backColor = backColor;
        this.textColor = textColor
        this.headText = headText;
        this.footText = footText;
        this.headUrl = headUrl;
        this.footUrl = footUrl;
        this.line = line;
    }
}

let array = [];
array.push(new ElemMenu(
    '#FFFFFF',
    "#000000",
    'A Portfolio Website',
    'projects after the course TheOdinProject',
    '',
    '',
    '1px solid #000000'
));

array.push(new ElemMenu(
    '#001F54',
    "#FFE433",
    'Book of recipes',
    'Project: Recipes',
    'https://valerilursa.github.io/html/odin/recipes_project/index.html',
    'https://www.theodinproject.com/lessons/foundations-recipes',
    '1px solid #FFE433'
));

array.push(new ElemMenu(
    '#001045',
    "#FFEFBA",
    'Flexbox Page',
    'project after the lesson flexbox',
    'https://valerilursa.github.io/html/odin/flexbox_project/flexbox.html',
    'https://www.internetingishard.com/html-and-css/flexbox/',
    '1px solid #FFEFBA'
));

array.push(new ElemMenu(
    '#0F5151',
    '#F0AEAE',
    'Landing Page',
    'Project: Landing Page',
    'https://valerilursa.github.io/html/odin/Landing_Page_project/index.html',
    'https://www.theodinproject.com/lessons/foundations-landing-page',
    '1px solid #F0AEAE'
))

array.push(new ElemMenu(
    '#004242',
    '#FFBDBD',
    'Rock paper scissors',
    'Project: Rock Paper Scissors',
    'https://valerilursa.github.io/html/odin/Rock_paper_scissors/index.html',
    'https://www.theodinproject.com/lessons/foundations-rock-paper-scissors',
    "1px solid #FFCCCC"
))

array.push(new ElemMenu(
    '#003333',
    '#FFCCCC',
    'Etch-A-Sketch',
    'Project: Etch-A-Sketch',
    'https://valerilursa.github.io/html/odin/Etch_a_sketch/index.html',
    'https://www.theodinproject.com/lessons/foundations-etch-a-sketch',
    '1px solid #FFCCCC'
))

array.push(new ElemMenu(
    '#FFA700',
    '#0058FF',
    'Calculator (in the process)',
    'Project: Calculator',
    'https://valerilursa.github.io/html/odin/Calculator/index.html',
    'https://www.theodinproject.com/lessons/foundations-calculator',
    '1px solid #0058FF'
))

array.push(new ElemMenu(
    '#F09800',
    '#0F67FF',
    'Sign-Up Form',
    'Project: Sign-Up Form',
    'https://valerilursa.github.io/html/odin/Form/index.html',
    'https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form',
    '1px solid #1E76FF'
))

let q = ['#E18900',
'#1E76FF']

let menu = document.querySelector(".menu");

array.forEach(elem => {
    let headA = document.createElement('a');
    headA.href = elem.headUrl;
    headA.textContent = elem.headText;
    headA.style.backgroundColor = elem.backColor;
    headA.style.color = elem.textColor;
    if (elem.headUrl == '') headA.classList.add('noActive');

    let headDiv = document.createElement('div');
    headDiv.classList.add('rectangleTitle');
    headDiv.style.backgroundColor = elem.backColor;
    headDiv.appendChild(headA);

    let footA = document.createElement('a');
    footA.href = elem.footUrl;
    footA.textContent = elem.footText;
    footA.style.backgroundColor = elem.backColor;
    footA.style.color = elem.textColor;
    if (elem.footUrl == '') footA.classList.add('noActive');

    let divFootA = document.createElement('div');
    divFootA.classList.add("rectangleText");
    divFootA.style.backgroundColor = elem.backColor;
    divFootA.appendChild(footA);

    let line = document.createElement('div');
    line.style.border = elem.line;

    let footDiv = document.createElement('div');
    footDiv.style.backgroundColor = elem.backColor;
    footDiv.appendChild(line);
    footDiv.appendChild(divFootA);

    let div = document.createElement('div');
    div.classList.add('elem_menu');
    div.classList.add('rectangle');
    div.style.backgroundColor = elem.backColor;
    div.appendChild(headDiv);
    div.appendChild(footDiv);

    menu.appendChild(div);
})

console.log('js file');
console.log(array);