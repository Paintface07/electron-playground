const Element = require('../element.helpers');

function PageIterator(direction) {

    this.element = new Element('li')
        .addClass('material-icons')
        .addChild(new Element('a')
            .setAttribute('href', '#!')
            .addChild(new Element('i')
                .addClass('material-icons')
                .setText('chevron_' + direction)));

    this.activate = function() {
        this.element.removeClass('disabled');
        return this.element;
    };

    return this.element;
}

module.exports = PageIterator;