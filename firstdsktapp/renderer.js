// const { ipcRenderer, remote } = require('electron');

// document.addEventListener('DOMContentLoaded', () => {
//   const urlInput = document.getElementById('url-input');
//   const backBtn = document.getElementById('back-btn');
//   const forwardBtn = document.getElementById('forward-btn');
//   const reloadBtn = document.getElementById('reload-btn');
//   const goBtn = document.getElementById('go-btn');

//   const currentWindow = remote.getCurrentWindow();
//   const view = currentWindow.getBrowserView();

//   const navigateToUrl = () => {
//     let url = urlInput.value;
//     if (!url.startsWith('http://') && !url.startsWith('https://')) {
//       url = 'https://' + url;
//     }
//     view.webContents.loadURL(url);
//   };

//   urlInput.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') {
//       navigateToUrl();
//     }
//   });

//   goBtn.addEventListener('click', navigateToUrl);
  
//   backBtn.addEventListener('click', () => {
//     if (view.webContents.canGoBack()) {
//       view.webContents.goBack();
//     }
//   });

//   forwardBtn.addEventListener('click', () => {
//     if (view.webContents.canGoForward()) {
//       view.webContents.goForward();
//     }
//   });

//   reloadBtn.addEventListener('click', () => {
//     view.webContents.reload();
//   });
  
//   // Update the URL bar when a new page is loaded
//   view.webContents.on('did-finish-load', () => {
//     urlInput.value = view.webContents.getURL();
//   });
// });
