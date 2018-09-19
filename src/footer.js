import { red, blue } from './button-styles';

// top
const top = document.createElement('div');
top.innerText = 'Top of the footer';
top.style = red;

// bottom
const bottom = document.createElement('div');
bottom.innerText = 'Bottom of the footer';
bottom.style = blue;

// footer
const footer = document.createElement('footer');
footer.appendChild(top);
footer.appendChild(bottom);

export default footer;