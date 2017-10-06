const Element = require('../element.helpers');
const ImageThumbnail = require('./cardThumbnail.renderer');
const ImagePreview = require('./cardModal.renderer');

function CardCell(cardToRender) {
    return new Element('div').addClass('col').addClass('s3')
        .addChild(new Element('div')
            .addClass('card')
            .addChild(new Element('div')
                .addClass('card-content')
                .addChild(new Element('div')
                    .addClass('card-title')
                    .addClass('app-card')
                    .setText(cardToRender.name)
                    .element)
                .addChild(new ImageThumbnail(cardToRender))
                .addChild(new ImagePreview(cardToRender))
                .element)
            .element)
        .element;
}

module.exports = CardCell;