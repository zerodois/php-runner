const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const { join } = require('path')
const events = require('./events')

const electron = join(__dirname, '..', '..', 'node_modules', '.bin', 'electron')
require('electron-reload')(join(__dirname, '..'), { electron })

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile(join(__dirname, '..', '..', 'app', 'index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.toggleDevTools()
  Menu.setApplicationMenu(null)
  for (let event in events) {
    ipcMain.on(event, (e, data) => events[event](data, e.sender))
  }
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
