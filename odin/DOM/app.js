const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const p = document.createElement('p');
p.classList.add('textColorRed');
p.textContent = "Hey I'm red";

container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('textColorBlue');
h3.textContent = "I’m a blue h3!";

container.appendChild(h3);

const div = document.createElement('div');
div.classList.add('div');

container.appendChild(div);

const div_h1 = document.createElement('h1');
div_h1.textContent = "I’m in a div";

div.appendChild(div_h1);

const div_p = document.createElement('p');
div_p.textContent = "ME TOO!";

div.appendChild(div_p);

function alertFunction() {
    alert("YAY! YOU DID IT!");
  }

const btn = document.querySelector('#btn');
btn.onclick = alertFunction;

const button = document.querySelector('#button');
button.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    alert(button.id);
  });
});