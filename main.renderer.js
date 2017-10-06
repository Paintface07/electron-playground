const electron = require('electron');
const App = require('./src/app.renderer');
const { ipcRenderer } = electron;

$(".button-collapse").sideNav();

$(document).ready((e) => {
    ipcRenderer.send('app:started');
});

document.querySelector('#exit-button').addEventListener('click', (e) => {
    ipcRenderer.send('app:quit');
});

ipcRenderer.on('app:init', (e, data) => {
    new App('.app-content', data).init();
});