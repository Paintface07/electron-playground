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
    for(let x = 0; x < data.length && x < 30; x += 4) {
        let row = document.createElement('div');
        row.setAttribute('class', 'row');

        createCardIfExists(row, x, data, data.length);
        createCardIfExists(row, x + 1, data, data.length);
        createCardIfExists(row, x + 2, data, data.length);
        createCardIfExists(row, x + 3, data, data.length);

        cardListElement.appendChild(row);
    }
    $('.modal').modal();
});

function createCardIfExists(row, index, data, max) {
    // console.log('in create card');
    if(index < max) {
        // console.log('creating card: ');
        // const cardInfo3 = data[index].set[0].$;
        // console.log(JSON.stringify(data[index], null, 2));
        const card3 = createCardCell(data[index]);
        row.appendChild(card3);
    }
}

function createCardCell(cardToRender) {
    const cellLayout = document.createElement('div');
    cellLayout.setAttribute('class', 'col s3');

    const card = document.createElement('div');
    card.setAttribute('class', 'card');

    const cardTitle = document.createElement('span');
    cardTitle.setAttribute('class', 'card-title app-card');
    const cardTitleText = document.createTextNode(cardToRender.name);
    cardTitle.appendChild(cardTitleText);

    const cardContent = document.createElement('div');
    cardContent.setAttribute('class', 'card-content');

    const imageLink = document.createElement('a');
    imageLink.setAttribute('href', '#cardModal' + cardToRender.set[0].$.muId);
    imageLink.setAttribute('class', 'waves-effect waves-light modal-trigger');

    const itemImage = document.createElement('img');
    itemImage.setAttribute('class', 'responsive-img');
    itemImage.setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
        + cardToRender.set[0].$.muId + '.jpg');
    imageLink.appendChild(itemImage);

    const imageModal = document.createElement('div');
    imageModal.setAttribute('id', 'cardModal' + cardToRender.set[0].$.muId);
    imageModal.setAttribute('class', 'modal');
    const imageModalContent = document.createElement('div');
    imageModalContent.setAttribute('class', 'modal-content');
    const modalHeader = document.createElement('h4');
    modalHeader.setAttribute('class', 'center');
    const modalHeaderText = document.createTextNode(cardToRender.name);
    modalHeader.appendChild(modalHeaderText);

    const modalCardImage = document.createElement('img');
    modalCardImage.setAttribute('class', 'centered-card');
    modalCardImage.setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
        + cardToRender.set[0].$.muId + '.jpg');
    imageModalContent.appendChild(modalHeader);
    imageModalContent.appendChild(modalCardImage);
    imageModal.appendChild(imageModalContent);

    const sets = cardToRender.set;
    const setList = document.createElement('ul');
    for(let i = 0; i < sets.length; i++) {
        const set = document.createElement('li');
        const setText = document.createTextNode(sets[i]._);
        set.appendChild(setText);
        setList.appendChild(set);
    }

    cardContent.appendChild(cardTitle);
    cardContent.appendChild(imageLink);
    cardContent.appendChild(imageModal);
    cardContent.appendChild(setList);
    card.appendChild(cardContent);
    cellLayout.appendChild(card);

    return cellLayout;
}