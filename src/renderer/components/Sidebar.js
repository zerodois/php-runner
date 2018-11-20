import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Sidebar extends Component {
  render () {
    const onClick = this.props.onClick;
    return (
      <section className="Sidebar">
        <span
          onClick={onClick}
          className="button hover ghost">
          <FontAwesomeIcon
            size="2x"
            icon="play" />
        </span>
      </section>
    );
  }
}

export default Sidebar;
