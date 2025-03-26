const { app, BrowserWindow, WebContentsView } = require('electron');
const { api_url } = require('./data.js');
const systemOffline = require('./notifications/systemOffline.js');
const outdatedVersion = require('./notifications/outdatedVersion.js');
const customMenu = require('./customs/customMenu.js');
const autoFindUpdate = require('./functions/autoFindUpdate.js');
const systemAlerts = require('./functions/systemAlerts.js');
const localServer = require('./localServer.js');

(async function () {
    let win;

    function createWindow() {
        win = new BrowserWindow({
            width: 1366,
            height: 720,
            webPreferences: {
                nodeIntegration: true
            },
            resizable: false,
        });

        customMenu(app, win);

        win.loadFile('homePage.html');
    };

    app.whenReady().then(createWindow);

    localServer();

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        };
    });
})()