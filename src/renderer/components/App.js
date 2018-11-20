import React, { Component } from 'react'
import Home from './Home'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

library.add(faPlay)

class App extends Component {
  render () {
    return (
      <Home />
    )
  }
}

export default App;
