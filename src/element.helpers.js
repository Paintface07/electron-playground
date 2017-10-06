function Element(type, id) {
    if(typeof type === 'undefined' || type === '') {
        throw 'Element type should never be null!';
    }

    this.element = document.createElement(type);

    if(typeof id !== 'undefined' && id !== '') {
        this.element.setAttribute('id', id);
    }

    this.addChild = function(child) {
        if(typeof child === 'undefined') {
            throw 'An element child MUST have a tag name!';
        }

        this.element.appendChild(child);
        return this;
    };

    this.addClass = function(clazz) {
        let cls = this.element.getAttribute('class');
        if(typeof cls !== 'undefined' && cls !== null) {
            this.element.setAttribute('class', cls + ' ' + clazz);
        } else {
            this.element.setAttribute('class', clazz);
        }

        return this;
    };

    this.setText = function(text) {
        const textElement = document.createTextNode(text);
        this.element.appendChild(textElement);
        return this;
    };

    this.setAttribute = function(attrName, attr) {
        this.element.setAttribute(attrName, attr);
        return this;
    };

    this.removeClass = function(clazz) {
        let cls = this.element.getAttribute('class');
        if(typeof cls !== 'undefined') {
            this.element.setAttribute('class', cls.replace(clazz, ''));
        } else {
            this.element.setAttribute('class', clazz);
        }

        return this;
    };

    return this;
}

module.exports = Element;