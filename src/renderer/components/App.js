import React, { Component } from 'react'
import Home from './Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay, faTimes } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay, faTimes)

class App extends Component {
  render () {
    return (
      <Home />
    )
  }
}

export default App;
