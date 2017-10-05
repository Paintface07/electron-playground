const helpers = require('../html.helpers')();

function ImagePreview(cardToRender) {

    const imageModal = helpers.elementWithClass('div', ['modal']);
    imageModal.setAttribute('id', 'cardModal' + cardToRender.set[0].$.muId);

    const imageModalContent = helpers.elementWithClass('div', ['modal-content']);

    const modalHeader = helpers.elementWithClass('h4', ['center']);
    const modalHeaderText = helpers.text(cardToRender.name);

    const modalCardImage = helpers.elementWithClass('img', ['centered-card']);
    modalCardImage.setAttribute('src', 'https://image.deckbrew.com/mtg/multiverseid/'
        + cardToRender.set[0].$.muId + '.jpg');

    modalHeader.appendChild(modalHeaderText);
    imageModalContent.appendChild(modalHeader);
    imageModalContent.appendChild(modalCardImage);
    imageModal.appendChild(imageModalContent);
    return imageModal;
}

module.exports = ImagePreview;