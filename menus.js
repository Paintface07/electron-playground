const { BrowserWindow, Menu } = require('electron');

function AppMenus() {
    let settingsWindow;

    let MAIN_MENU = [
        {
            label: "File",
            submenu: [
                {
                    label: "Settings",
                    click() {
                        settingsWindow = new BrowserWindow({ width: 400, height: 600 });
                        settingsWindow.setMenu(null);

                        //cleanup settings window
                        settingsWindow.on('close', () => {
                            settingsWindow = null;
                        });
                    }
                },
                {
                    label: "Quit",
                    accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
                    click() {
                        app.quit();
                    }
                }
            ]
        }
    ];

    // If mac, add empty object to avoid default 1st menu entry
    if(process.platform == 'darwin') {
        MAIN_MENU.unshift({});
    }

    // Add dev tools if non-prod environment
    if(process.env.NODE_ENV !== 'production') {
        MAIN_MENU.push({
            label:  'Dev Tools',
            submenu: [
                {
                    label: 'Toggle DevTools',
                    accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
                    click(item, focusedWindow) {
                        focusedWindow.toggleDevTools();
                    }
                }, {
                    role: 'reload'
                }
            ]
        });
    }

    return {
        MAIN_MENU: MAIN_MENU
    };
}

module.exports = AppMenus;