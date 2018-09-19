import footer from './footer';
import makeButton from './button';
import { makeColorStyle } from './button-styles';


const button = makeButton('Yay! A button!!!');
button.style = makeColorStyle("cyan");

document.body.appendChild(button);
document.body.appendChild(footer);