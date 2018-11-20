const { app, BrowserWindow, Menu, ipcMain } = require('electron')
const { join } = require('path')
const { to } = require('./utils')
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
    ipcMain.on(event, async (e, data) => {
      const [err, response] = await to(events[event](data, e.sender))
      if (err) {
        e.sender.send(`${event}:error`, err.message)
      }
      e.sender.send(`${event}:response`, response)
    })
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
