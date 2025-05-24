// File: main.js
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const fs = require('fs');

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      sandbox: true
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

ipcMain.handle('cloud-save', async (_, data) => {
  const backupPath = path.join(app.getPath('documents'), 'CappivateBackup.json');
  fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
  return { success: true, path: backupPath };
});
