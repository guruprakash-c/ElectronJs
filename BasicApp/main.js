import { app, BrowserWindow, ipcMain, nativeTheme } from 'electron'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import url from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
var options = {
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'icon.png'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
};
var xUrl = 'https://www.devstoc.com';
var isUrlExternal = false;
var isDevTools = false;


function createWindow () {
const parentWndw = new BrowserWindow({
  width: 800,
  height: 600,
  title: "Parent Window",
  icon: path.join(__dirname, 'icon.png'),
  webPreferences: {
    preload: path.join(__dirname, 'preload.js')
  },
  // backgroundColor: '#efefef',
  // minimizable: false,
  // maximizable: true,
  // autoHideMenuBar: true,
  // fullscreenable: false,
  // resizable: false,
  // modal: true,
})
// parentWndw.webContents.openDevTools();
parentWndw.loadURL(url.format({
  pathname: path.join(__dirname, 'index.html'),
  protocol: 'file:',
  slashes: true
}));
// const childWndw = new BrowserWindow({
//   show: false,
//   title: "Child Window",
//   width: 700,
//   height: 450,
//   icon: path.join(__dirname, 'icon.png'),
//   webPreferences: {
//     preload: path.join(__dirname, 'preload.js')
//   },
//   parent: parentWndw,
//   modal: true,
//   minimizable: false,
//   maximizable: false,
// });
// //childWndw.webContents.openDevTools();
// childWndw.loadURL(xUrl);
// childWndw.once('ready-to-show', () => {
//   childWndw.show();
// });
}

ipcMain.handle('dark-mode:toggle', () => {
  if (nativeTheme.shouldUseDarkColors) {
    nativeTheme.themeSource = 'light'
  } else {
    nativeTheme.themeSource = 'dark'
  }
  return nativeTheme.shouldUseDarkColors
})

ipcMain.handle('dark-mode:system', () => {
  nativeTheme.themeSource = 'system'
})

// const view = new BrowserView();
//   win.setBrowserView(view);

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// app.commandLine.appendSwitch('disable-features', 'crashpad');

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})