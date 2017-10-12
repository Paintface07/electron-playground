const Element = require('./element.helpers');
const Paginator = require('./pagination/paginator.renderer');
const PageIterator = require('./pagination/pageIterator.renderer');
const PageNumber = require('./pagination/pageNumber.renderer');
const CardRow = require('./cards/cardRow.renderer');

function App(selector, initData) {
    const self = this;
    self.appBody = document.querySelector(selector);
    const APP_INIT_DATA = initData;
    const APP_GLOBAL_USERDATA = {};

    function init() {
        const cardList = new Element('div').addClass('card-list');
        const paginator = new Paginator(APP_INIT_DATA, cardList.element);

        self.appBody.appendChild(paginator.element);
        self.appBody.appendChild(cardList.element);

        $('.modal').modal();    // initialize modals
    }

    return { init: init };
}

module.exports = App;