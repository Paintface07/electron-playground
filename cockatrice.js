const fs = require('graceful-fs');
const xml = require('xml2js');

function Cockatrice() {

    function getXml(window) {
        fs.readFile('/home/nosferatu/.local/share/Cockatrice/Cockatrice/cards.xml', 'utf8', (error, data) => {
            xml.parseString(data, (err, result) => {
                // err ? console.log(err) : console.log(result.toString());
                // console.log(JSON.stringify(result.cockatrice_carddatabase.cards[0].card[1], null, 2));
                let cardsList = [];
                for(let x = 0; x < result.cockatrice_carddatabase.cards[0].card.length; x++) {
                    let cards = result.cockatrice_carddatabase.cards[0];
                    const card = cards.card[x];

                    cardsList.push(card);
                }

                console.log(JSON.stringify(cardsList[1], null, 2));

                window.webContents.send('app:init', cardsList);
            });
        });
    }

    return {
        getXml: getXml
    };
}

module.exports = Cockatrice;