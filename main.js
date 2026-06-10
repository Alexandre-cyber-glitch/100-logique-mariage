require("electron-reload")(__dirname);

const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });
  win.loadFile("src/index.html");
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
