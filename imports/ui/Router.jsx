import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import App from './App.jsx';
import Todo from './Todo.jsx';
import Route2 from './Route2.jsx';


FlowRouter.route('/', {
  name: 'Todo',
  action() {
    ReactLayout.render( App, { yield: <Todo /> } );
  },
});

FlowRouter.route('/route-2', {
    name: 'route-2',
    action() {
      ReactLayout.render( App, { yield: <Route2 /> } );
    },
  });