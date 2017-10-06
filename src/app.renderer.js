const Element = require('./element.helpers');
const PageIterator = require('./pagination/pageIterator.renderer');
const PageNumber = require('./pagination/pageNumber.renderer');
const CardRow = require('./cards/cardRow.renderer');

const PAGE_SIZE = 8;

function App(selector, initData) {
    const self = this;
    self.appBody = document.querySelector(selector);
    const APP_INIT_DATA = initData;
    const APP_GLOBAL_USERDATA = {};

    function init() {
        console.log(APP_INIT_DATA.length / 8);
        const paginator = new Element('ul')
            .addClass('pagination')
            .addChild(new PageIterator('left').element)
            .element;

        for(let i = 0; i < APP_INIT_DATA.length / 8 && i < 10; i++) {
            console.log('Appending page: ' + i);
            const page = new PageNumber(i + 1);

            i + 1 !== 1 || page.activate();

            paginator.appendChild(page.element);
        }

        paginator.appendChild(new PageIterator('right').element);

        self.appBody.appendChild(paginator);

        loadPage(self.appBody, 0);  // load first page

        $('.modal').modal();    // initialize modals
    }

    function loadPage(cardListElement, pageNumber) {
        for(let x = pageNumber * PAGE_SIZE; x < (pageNumber + 1) * PAGE_SIZE ; x += 4) {
            cardListElement.appendChild(CardRow(APP_INIT_DATA, x));
        }
    }

    return { init: init };
}

module.exports = App;