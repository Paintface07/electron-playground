const Element = require('../element.helpers');
const PageIterator = require('./pageIterator.renderer');
const PageNumber = require('./pageNumber.renderer');
const CardRow = require('../cards/cardRow.renderer');

const PAGE_SIZE = 8;

function Paginator(APP_INIT_DATA, loadTo) {
    const leftPageIterator = new PageIterator('left');
    const rightPageIterator = new PageIterator('right');

    this.element = new Element('ul')
        .addClass('pagination')
        .addChild(leftPageIterator);

    let pageCount = APP_INIT_DATA.length / 8;

    for(let i = 0; i < pageCount && i < 10; i++) {
        console.log('Appending page: ' + i);
        const index = i + 1;
        const page = new PageNumber(index);

        i + 1 !== 1 || page.activate();

        page.onClick((e) => {
            const element = this.element.element;
            for(let i = 0; i < element.childNodes.length; i++) {
                const cls = element.childNodes[i].getAttribute('class');
                if(cls.indexOf('active') >= 0) {
                    element.childNodes[i].setAttribute('class', cls.replace('active', ''));
                }
            }
            page.activate();
            loadPage(loadTo, i);
            $('.modal').modal();    // re-initialize new modals
        });

        this.element.addChild(page);
    }

    this.element.addChild(rightPageIterator);
    loadPage(loadTo, 0);

    return this.element;

    function loadPage(cardListElement, pageNumber) {
        cardListElement.innerHTML = '';
        for(let x = pageNumber * PAGE_SIZE; x < (pageNumber + 1) * PAGE_SIZE ; x += 4) {
            cardListElement.appendChild(CardRow(APP_INIT_DATA, x).asElement());
        }
    }
}

module.exports = Paginator;