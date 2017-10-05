const helpers = require('../html.helpers')();
const ImageThumbnail = require('./cardThumbnail.renderer');
const ImagePreview = require('./cardModal.renderer');

function CardCell(cardToRender) {
    const cellLayout = helpers.elementWithClass('div', ['col', 's3']);
    const card = helpers.elementWithClass('div', ['card']);

    const cardTitle = helpers.elementWithClass('div', ['card-title', 'app-card']);
    const cardTitleText = helpers.text(cardToRender.name);
    cardTitle.appendChild(cardTitleText);

    const cardContent = helpers.elementWithClass('div', ['card-content']);
    cardContent.appendChild(cardTitle);

    cardContent.appendChild(new ImageThumbnail(cardToRender));
    cardContent.appendChild(new ImagePreview(cardToRender));

    // const sets = cardToRender.set;
    // const setList = helpers.elementWithClass('ul');
    // for(let i = 0; i < sets.length; i++) {
    //     const set = document.createElement('li');
    //     const setText = helpers.text(sets[i]._);
    //     set.appendChild(setText);
    //     setList.appendChild(set);
    // }
    //
    // cardContent.appendChild(setList);
    card.appendChild(cardContent);
    cellLayout.appendChild(card);

    return cellLayout;
}

module.exports = CardCell;