import _ from 'lodash';
import { h1_component, h2_component, img_component } from './main';
import { menu_text, menu_component } from './menu';
import { contact_component } from './contact';

//  function component() {
//    const element = document.createElement('div');

//   // Lodash, now imported by this script
//   //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//    return element;
//  }

//  document.body.appendChild(component());

const div_content = document.getElementById("content");

const li = document.querySelectorAll('a');
console.log(li);
li.forEach(elem => {
  elem.addEventListener('click', () => {
    console.log(elem.textContent);
    check(elem.textContent);
  })
})

function check(name_navbar_elem) {
  if (name_navbar_elem === 'Main') {
    clear_div_content();

    div_content.appendChild(h1_component('Restaurant VaLurs'));
    div_content.appendChild(h2_component());
    div_content.appendChild(img_component());
  }

  if (name_navbar_elem === 'Menu') {
    clear_div_content();

    div_content.appendChild(h1_component('Menu'));
    div_content.appendChild(menu_component(menu_text, 'menu'));
  }

  if (name_navbar_elem === 'Contact') {
    clear_div_content();
    
    div_content.appendChild(h1_component('Contact'));
    div_content.appendChild(contact_component());
  }
}

function clear_div_content() {
  while (div_content.firstChild)
    div_content.removeChild(div_content.firstChild);
}

check('Main');