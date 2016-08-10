'use strict';

const { app, BrowserWindow } = require('electron');
const path = require('path');

let win;

function createWindow() {
  win = new BrowserWindow({
    height: 600,
    width: 800,
  });
  win.loadURL(
    `file://${path.resolve(__dirname, 'render', 'index.html')}`
  );
  win.webContents.openDevTools();
  win.on('closed', () => {
    win = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (!win) {
    createWindow();
  }
});

