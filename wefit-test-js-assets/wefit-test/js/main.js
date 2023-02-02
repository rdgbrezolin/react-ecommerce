// Change Menu
const menu = document.getElementsByClassName('btn-group-vertical');
menu[0].className = 'btn-group-horizontal';

// Change Header
const header = document.getElementsByClassName('jumbotron');
header[0].style.backgroundColor = '#6b747d';
header[0].style.color = '#fff';
header[0].style.textAlign = 'right';

// Change button color
const buttonColor = document.getElementsByClassName('btn-primary');
buttonColor[0].className = 'btn btn-success';

// Change cards
const cardTitleOne = document.getElementsByClassName('card-title')[0];
const cardTitleTwo = document.getElementsByClassName('card-title')[1];
const cardTitleThree = document.getElementsByClassName('card-title')[2];
const cardTitleFour = document.getElementsByClassName('card-title')[3];

const cardImageOne = document.getElementsByClassName('card-img-top')[0];
const cardImageTwo = document.getElementsByClassName('card-img-top')[1];
const cardImageThree = document.getElementsByClassName('card-img-top')[2];
const cardImageFour = document.getElementsByClassName('card-img-top')[3];

cardTitleOne.textContent = 'Natureza';
cardTitleTwo.textContent = 'Animais';
cardTitleThree.textContent = 'Pessoas';
cardTitleFour.textContent = 'Tecnologia';

buttonColor[2].className = 'btn btn-success';

// alterar o link da imagem
cardImageOne.setAttribute('src', 'https://placeimg.com/300/180/nature');
cardImageTwo.setAttribute('src', 'https://placeimg.com/300/180/animals');
cardImageThree.setAttribute('src', 'https://placeimg.com/300/180/people');
cardImageFour.setAttribute('src', 'https://placeimg.com/300/180/tech');

// Add li on ul
const list = document.getElementsByTagName('ul')[0];

const itemFour = document.createElement('li');
const itemFive = document.createElement('li');

itemFour.textContent = 'Quarto item';
itemFive.textContent = 'Quinto item';

itemFour.className = 'list-group-item active';
itemFive.className = 'list-group-item';

list.appendChild(itemFour);
list.appendChild(itemFive);

// Remove active class from first item
const firstItem = document.getElementsByClassName('list-group-item')[0];
firstItem.className = 'list-group-item';
