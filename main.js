const electron = require('electron');
const cockatrice = require('./cockatrice')();
const {
    app,
    BrowserWindow,
    Menu,
    ipcMain
} = electron;

let AppMenus = require('./menus')();

const path = require('path');
const url = require('url');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

function createMainWindow() {
    // Create the browser window.
    mainWindow = new BrowserWindow({width: 1024, height: 900/*, frame: false*/});

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    const mainMenu = Menu.buildFromTemplate(AppMenus.MAIN_MENU);
    Menu.setApplicationMenu(mainMenu);

    console.log("Sending init data.");

    ipcMain.on('app:started', () => {
        cockatrice.getXml(mainWindow);
    });

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    //Catch app:quit
    ipcMain.on('app:quit', () => {
        app.quit();
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createMainWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});
