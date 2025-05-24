// File: preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('cappivateAPI', {
  saveToCloud: async (data) => await ipcRenderer.invoke('cloud-save', data)
});
