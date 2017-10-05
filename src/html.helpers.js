
function HtmlHelpers() {
    function element(type) {
        return document.createElement(type);
    }

    function text(text) {
        return document.createTextNode(text);
    }

    function elementWithClass(type, classes) {
        let element = document.createElement(type);
        let cls = '';
        for(let i in classes) {
            if(classes.hasOwnProperty(i)) {
                cls += classes[i] + (i < classes.length ? ' ' : '');
            }
        }

        if(cls !== '') {
            element.setAttribute('class', cls);
        }

        return element;
    }

    return {
        element: element,
        text: text,
        elementWithClass: elementWithClass
    };
}

module.exports = HtmlHelpers;