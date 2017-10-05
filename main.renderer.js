const electron = require('electron');
const helpers = require('./src/html.helpers')();
const CardRow = require('./src/cards/cardRow.renderer');
const { ipcRenderer } = electron;

let CARD_ARRAY = null;
let PAGE_SIZE = 8;

$(".button-collapse").sideNav();

$(document).ready((e) => {
    ipcRenderer.send('app:started');
});

document.querySelector('#exit-button').addEventListener('click', (e) => {
    ipcRenderer.send('app:quit');
});

const cardListElement = document.querySelector('.card-list');

ipcRenderer.on('app:init', (e, data) => {
    CARD_ARRAY = data;
    const paginator = document.querySelector('.pagination');
    const pageBackIconText = helpers.text('chevron_left');
    const pageBackIcon = helpers.elementWithClass('i', ['material-icons']);
    pageBackIcon.appendChild(pageBackIconText);

    const pageBackIconLink = document.createElement('a');
    pageBackIconLink.setAttribute('href', '#!');
    pageBackIconLink.appendChild(pageBackIcon);

    const pageBackListItem = helpers.elementWithClass('li', ['disabled']);
    pageBackListItem.appendChild(pageBackIconLink);


    const pageBack = helpers.elementWithClass('li', ['material-icons']);
    pageBack.appendChild(pageBackListItem);

    paginator.appendChild(pageBack);

    cardListElement.appendChild(paginator);

    loadPage(0);
    // loadPage(1);
    // loadPage(2);
    $('.modal').modal();
});

function loadPage(pageNumber) {
    for(let x = pageNumber * PAGE_SIZE; x < (pageNumber + 1) * PAGE_SIZE ; x += 4) {
        cardListElement.appendChild(CardRow(CARD_ARRAY, x));
    }
}