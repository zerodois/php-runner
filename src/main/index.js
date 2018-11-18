const { app, BrowserWindow, Menu } = require('electron')
const { join } = require('path')

const electron = join(__dirname, '..', '..', 'node_modules', '.bin', 'electron')
require('electron-reload')(join(__dirname, '..'), { electron })

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({width: 800, height: 600})
  mainWindow.loadFile(join(__dirname, '..', 'renderer', 'index.html'))
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  Menu.setApplicationMenu(null)
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
