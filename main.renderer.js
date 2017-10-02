// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const { ipcRenderer } = electron;


$(".button-collapse").sideNav();

$(document).ready((e) => {
    ipcRenderer.send('app:started');
});

document.querySelector('#exit-button').addEventListener('click', (e) => {
    // e.preventDefault();
    ipcRenderer.send('app:quit');
});

ipcRenderer.on('app:init', (e, data) => {
    const cardListElement = document.querySelector('.card-list');
    console.log(data.length);
    for(let x = 0; x < data.length && x < 30; x += 3) {
        console.log('Starting x: ' + x);
        // x > data.length ? x = data.length - 1 : x = x;
        // console.log('ending x: ' + x);
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        createCardIfExists(row, x, data, data.length);
        createCardIfExists(row, x + 1, data, data.length);
        createCardIfExists(row, x + 2, data, data.length);

        cardListElement.appendChild(row);
    }
});

function createCardIfExists(row, index, data, max) {
    console.log('in create card');
    if(index < max) {
        console.log('creating card: ');
        const cardInfo3 = data[index].set[0].$;
        console.log(JSON.stringify(cardInfo3, null, 2));
        const card3 = createCardCell(cardInfo3.muId, data[index].name);
        row.appendChild(card3);
    }
}

function createCardCell(cardId, cardName) {
    const cellLayout = document.createElement('div');
    cellLayout.setAttribute('class', 'col s4');

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardTitle = document.createElement('span');
    cardTitle.setAttribute('class', 'card-title');
    const cardTitleText = document.createTextNode(cardName);
    cardTitle.appendChild(cardTitleText);

    const cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');

    const itemImage = document.createElement('img');
    itemImage.setAttribute('class', 'responsive-img');
    itemImage.setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
        + cardId + '.jpg');
    // const itemLinkText = document.createTextNode('https://image.deckbrew.com/mtg/multiverseid/'
    //     + cardId + '.jpg');
    // const itemImage = document.createElement('a');
    // itemImage.setAttribute('href', 'https://image.deckbrew.com/mtg/multiverseid/'
    //     + cardId + '.jpg');
    // itemImage.appendChild(itemLinkText);

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(itemImage);
    card.appendChild(cardContent);
    cellLayout.appendChild(card);

    return cellLayout;
}