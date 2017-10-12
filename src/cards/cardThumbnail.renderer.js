// const helpers = require('../html.helpers')();
const Element = require('../element.helpers');

function ImageThumbnail(cardToRender) {
    return new Element('a')
        .setAttribute('href', '#cardModal' + cardToRender.set[0].$.muId)
        .addClass('waves-effect').addClass('waves-light').addClass('modal-trigger')
        .addChild(new Element('img')
            .addClass('responsive-img')
            .setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
                + cardToRender.set[0].$.muId + '.jpg'));

    // const imageLink = helpers.elementWithClass('a', ['waves-effect', 'waves-light', 'modal-trigger']);
    // imageLink.setAttribute('href', '#cardModal' + cardToRender.set[0].$.muId);

    // const itemImage = helpers.elementWithClass('img', ['responsive-img']);
    // itemImage.setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
    //     + cardToRender.set[0].$.muId + '.jpg');
    // imageLink.appendChild(itemImage);
    // return imageLink;
}

module.exports = ImageThumbnail;