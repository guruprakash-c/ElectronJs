// In the main process.
const { electron, BrowserWindow } = require('electron') 
const app = electron.BrowserWindow 
const path = require('path')

const __dirname = path.dirname(fileURLToPath(import.meta.url)); 

let options = {
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    // show: false
};
function createWindow (Window, options, url, isDevTools, isUrlExternal) {
    Window = new BrowserWindow(options);

    if (isUrlExternal) {
        Window.loadURL(url);
    } else {
        Window.loadFile(url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        }));
    }
    if (isDevTools) {
        Window.webContents.openDevTools();
    }
    window.once('ready-to-show', () => {
        window.show();
    });
}

const win = new BrowserWindow();

app.whenReady().then(() => {
  createWindow(win, options, '', false, false);

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow(win, options, '', false, false)
    }
  })
});
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})