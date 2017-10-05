const CardCell = require('./cardCell.renderer');

function CardRow(data, startPos) {
    let row = document.createElement('div');
    row.setAttribute('class', 'row');

    for(let i = 0; i < 4; i++) {
        if(i < data.length) {
            console.log('Writing Card: ' + (startPos + i));
            row.appendChild(CardCell(data[startPos + i]));
        }
    }

    return row;
}

module.exports = CardRow;