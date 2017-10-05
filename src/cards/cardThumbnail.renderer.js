const helpers = require('../html.helpers')();

function ImageThumbnail(cardToRender) {
    // console.log(JSON.stringify(cardToRender, null, 2));
    const imageLink = helpers.elementWithClass('a', ['waves-effect', 'waves-light', 'modal-trigger']);
    imageLink.setAttribute('href', '#cardModal' + cardToRender.set[0].$.muId);

    const itemImage = helpers.elementWithClass('img', ['responsive-img']);
    itemImage.setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
        + cardToRender.set[0].$.muId + '.jpg');
    imageLink.appendChild(itemImage);
    return imageLink;
}

module.exports = ImageThumbnail;