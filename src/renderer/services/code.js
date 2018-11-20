import { ipcRenderer } from 'electron'

export const execute = code => {
  return new Promise((resolve, reject) => {
  	let time = setTimeout(reject, 10000)
		ipcRenderer.send('code:execute', code)
		ipcRenderer.on('code:execute:error', (_, err) => reject(err))
  	ipcRenderer.on('code:execute:response', (_, data) => {
  		resolve(data)
  		clearTimeout(time)
  	})
  })
}
