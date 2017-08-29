import React, { Component } from 'react';

export default class GPS extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
           lat: 0,
           lng: 0
       };
     }
  getLocation() {
      var that = this;
    navigator.geolocation.getCurrentPosition(function(position) {
        that.setState({
            lat: position.coords.latitude, 
            lng: position.coords.longitude
        });
      });
  }

  render() {
      
    return (
      <div className="gps">
        <button onClick={this.getLocation.bind(this)}>Get Location</button>
        <div>Lat: {this.state.lat}</div>
        <div>Long: {this.state.lng}</div>
      </div>
    );
  }
}