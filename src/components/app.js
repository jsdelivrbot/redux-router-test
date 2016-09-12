import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

// to  make sure app renders children, we need to add, children props
