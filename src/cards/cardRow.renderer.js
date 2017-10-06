const CardCell = require('./cardCell.renderer');
const Element = require('../element.helpers');

function CardRow(data, startPos) {
    const row = new Element('div').addClass('row');

    for(let i = 0; i < 4; i++) {
        if(i < data.length) {
            row.addChild(CardCell(data[startPos + i]));
        }
    }

    return row.element;
}

module.exports = CardRow;