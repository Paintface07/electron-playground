const Element = require('../element.helpers');

function PageNumber(number) {

    this.element = new Element('li')
        .addClass('waves-effect')
        .addChild(new Element('a')
            .setAttribute('href', '#!')
            .setText(number));

    this.element.activate = function() {
        this.element.setAttribute('class', 'active');
        return this.element;
    };

    this.element.deactivate = function() {
        let cls = this.element.getAttribute('class');
        this.element.setAttribute('class', cls.replace('active', ''));
    };

    return this.element;
}

module.exports = PageNumber;