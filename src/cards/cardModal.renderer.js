const Element = require('../element.helpers');

function ImagePreview(cardToRender) {

    return new Element('div', 'cardModal' + cardToRender.set[0].$.muId)
        .addClass('modal')
        .addChild(new Element('div')
            .addClass('modal-content')
            .addChild(new Element('h4')
                .addClass('center')
                .setText(cardToRender.name)
                .element)
            .addChild(new Element('img')
                .addClass('centered-card')
                .setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
                    + cardToRender.set[0].$.muId + '.jpg')
                .element)
            .element)
        .element;
}

module.exports = ImagePreview;