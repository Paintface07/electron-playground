const electron = require('electron');
// const helpers = require('./src/html.helpers')();
const Element = require('./src/element.helpers');
const PageIterator = require('./src/pagination/pageIterator.renderer');
const PageNumber = require('./src/pagination/pageNumber.renderer');
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

const cardListElement = document.querySelector('.app-content');

ipcRenderer.on('app:init', (e, data) => {
    CARD_ARRAY = data;

    const paginator = new Element('ul')
        .addClass('pagination')
        .addChild(new PageIterator('left').element)
        .addChild(new PageNumber(1).activate().element)
        .addChild(new PageNumber(2).element)
        .addChild(new PageNumber(3).element)
        .addChild(new PageIterator('right').element)
        .element;

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