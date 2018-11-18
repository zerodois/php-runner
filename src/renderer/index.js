const loader = require('monaco-loader')
const { remote } = require('electron')

loader().then((monaco) => {
  const editor = monaco.editor.create(document.getElementById('container'), {
    language: 'javascript',
    theme: 'vs-dark',
    automaticLayout: true,
  })
  remote.getCurrentWindow().show()
})
