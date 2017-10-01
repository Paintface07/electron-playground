// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
const electron = require('electron');
const { ipcRenderer } = electron;


$(".button-collapse").sideNav();

$(document).ready((e) => {
    ipcRenderer.send('app:started');
});

document.querySelector('#exit-button').addEventListener('click', (e) => {
    // e.preventDefault();
    ipcRenderer.send('app:quit');
});

ipcRenderer.on('app:init', (e, data) => {
    console.log("Data is:");
    console.log(data);
    const cardListElement = document.querySelector('.card-list');
    for(let x = 0; x < data.length; x++) {
        const item = document.createElement('li');
        const itemText = document.createTextNode(data[x].name + " " + data[x].manacost + " " + data[x].type);
        item.appendChild(itemText);
        cardListElement.appendChild(item);
    }
});