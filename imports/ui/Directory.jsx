import React, { Component } from 'react';
import { HTTP } from 'meteor/http'

export default class Directory extends Component {
    componentDidMount() {
        HTTP.call('GET', 
            'https://www.datos.gov.co/resource/grni-9zwi.json?$q=florencia', {
            data: { 
                '$$app_token': 'q3GS9C6AatILT9IgU1P7IEIg5',
                "$limit" : 500,
                '$q': 'Florencia'
            }
          }, (error, result) => {
            if (!error) {
                console.log('fine', result);
            } else {
                console.log('error', error);
            }
        });
    }

    render() {
        return (
            <div className="directory">
                hola directory!
            </div>
        );
    }
}   
    
