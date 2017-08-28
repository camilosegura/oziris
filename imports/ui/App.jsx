import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div className="app-root">
        <div className="container">
          {this.props.yield}
        </div>
      </div>
    );
  }
}