import React, { Component } from 'react';
import AccountsUIWrapper from './AccountsUIWrapper.jsx';

export default class App extends Component {
    render() {
        return (
            <div className="app-root">
                <div className="container">
                    <AccountsUIWrapper />
                    {this.props.yield}
                </div>
            </div>
        );
    }
}
