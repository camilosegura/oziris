import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import App from './App.jsx';
import HelloWorld from './HelloWorld.jsx';

FlowRouter.route('/', {
  name: 'hello-world',
  action() {
    ReactLayout.render( App, { yield: <HelloWorld /> } );
  },
});
