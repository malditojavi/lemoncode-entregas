import './mystyles.scss'
import logoImg from './content/logo_1.png';
console.log("hey");

const img:HTMLImageElement = document.createElement('img');
img.src = logoImg;
document.getElementById('imgContainer').appendChild(img)

const newVariableTypeString: string = "testeo de tipeo con typescript"
console.log(newVariableTypeString)