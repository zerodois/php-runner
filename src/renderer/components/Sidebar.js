import React, { Component } from 'react'

class Sidebar extends Component {
  render () {
    const onClick = this.props.onClick;
    console.log('this', this.props, onClick)
    return (
      <section>
        <button onClick={onClick}>RUN</button>
      </section>
    );
  }
}

export default Sidebar;
