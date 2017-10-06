const Element = require('../element.helpers');

function PageNumber(number) {

    this.element = new Element('li')
        .addClass('waves-effect')
        .addChild(new Element('a')
            .setAttribute('href', '#!')
            .setText(number)
            .element)
        .element;

    this.activate = function() {
        this.element.setAttribute('class', 'active');
        return this;
    };

    return this;
}

module.exports = PageNumber;