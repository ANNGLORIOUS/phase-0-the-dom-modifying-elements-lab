// Write your code here!

const mainElement = document.querySelector('main#main');

document.querySelector('main#main').remove();

const newHeader = document.createElement('h1');

newHeader.id = 'victory';
newHeader.textContent = 'YOUR-NAME is the champion';

document.body.appendChild(newHeader);
