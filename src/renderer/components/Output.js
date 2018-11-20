import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PrintResult = ({ error, response }) => {
  if (error === null && response === null) {
    return (
      <code>
        Running
        <span className="dot-1">.</span>
        <span className="dot-2">.</span>
        <span className="dot-3">.</span>
      </code>
    );
  }
  if (error === null) {
    return (
      <pre>{response || 'No output.'}</pre>
    )
  }
  return (
    <pre className="error">{error}</pre>
  )
}

class Output extends Component {
  render () {
    if (!this.props.visible) {
      return null
    }
    return (
      <div className="Output">
        <div className="topbar">
          <span className="bar-title">
            OUTPUT
          </span>
          <span className="flex-1" />
          <div onClick={this.props.close} className="pointer ghost close-button">
            <FontAwesomeIcon
              icon="times" />
          </div>
        </div>
        <div className="runner flex-1 scroll">
          <PrintResult {...this.props} />
        </div>
      </div>
    )
  }
}

export default Output
