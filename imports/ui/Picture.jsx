import React, { Component } from 'react';

export default class Picture extends Component {
  constructor(props) {
     super(props);

     this.state = {
        src: 'Test img 2',
    };
  }

  takePicture() {
    var cameraOptions = {
        width: 800,
        height: 600
    };
    var that = this;
    MeteorCamera.getPicture(cameraOptions, function (error, data) {
       if (!error) {
        that.setState({
            src: data,
            error: error
        });
       } else {
        that.setState({
            src: '',
            error: error
        });
       }
    });
  }

  render() {
    return (
      <div className="picture">
        <button onClick={this.takePicture.bind(this)}>Take a Picture</button>
        <img src={this.state.src} />
        <div>{this.state.src}</div>
        <div>{this.state.error}</div>
      </div>
    );
  }
}