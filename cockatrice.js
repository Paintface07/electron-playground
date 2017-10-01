const fs = require('graceful-fs');
const xml = require('xml2js');

function Cockatrice() {

    function getXml(window) {
        fs.readFile('/home/nosferatu/.local/share/Cockatrice/Cockatrice/cards.xml', 'utf8', (error, data) => {
            // console.log(data);
            xml.parseString(data, (err, result) => {
                err ? console.log(err) : console.log(result.toString());
                // console.log(JSON.stringify(result.cockatrice_carddatabase.cards[0].card[1], null, 2));
                let cards = [];
                for(let x = 0; x < result.cockatrice_carddatabase.cards[0].card.length; x++) {
                    const card = result.cockatrice_carddatabase.cards[0].card[x];
                    cards.push(card);
                    console.log(result.cockatrice_carddatabase.cards[0].card[x].name);
                }
                window.webContents.send('app:init', cards);
            });
        });
    }

    return {
        getXml: getXml
    };
}

module.exports = Cockatrice;